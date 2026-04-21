import { createServer } from "node:http";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

loadEnvFile(resolve(process.cwd(), ".env.server.local"));

const PORT = Number(process.env.PORT || 3000);
const CLIENT_API_KEY = process.env.CLIENT_API_KEY || "";
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || "";
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || "*";
const DEFAULT_MODEL = process.env.OPENROUTER_MODEL || "meta-llama/llama-3.3-8b-instruct:free";

const server = createServer(async (req, res) => {
  const origin = req.headers.origin;
  setCorsHeaders(res, origin);

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.url !== "/v1/chat/completions") {
    sendJson(res, 404, { error: { message: "Not found" } });
    return;
  }

  if (req.method !== "POST") {
    sendJson(res, 405, { error: { message: "Method not allowed" } });
    return;
  }

  if (!CLIENT_API_KEY || !OPENROUTER_API_KEY) {
    sendJson(res, 500, { error: { message: "Server secrets are not configured" } });
    return;
  }

  if (ALLOWED_ORIGIN !== "*" && origin && origin !== ALLOWED_ORIGIN) {
    sendJson(res, 403, { error: { message: "Origin not allowed" } });
    return;
  }

  const requestClientKey = req.headers["x-api-key"];
  if (requestClientKey !== CLIENT_API_KEY) {
    sendJson(res, 401, { error: { message: "Invalid client API key" } });
    return;
  }

  try {
    const rawBody = await readBody(req);
    const body = JSON.parse(rawBody);
    const model = body?.model || DEFAULT_MODEL;
    const messages = Array.isArray(body?.messages) ? body.messages : [];

    const upstream = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "HTTP-Referer": "https://fcbtruong.github.io/my-portfolio",
        "X-Title": "my-portfolio-chatbot",
      },
      body: JSON.stringify({ model, messages }),
    });

    const data = await upstream.text();
    res.writeHead(upstream.status, { "Content-Type": "application/json" });
    res.end(data);
  } catch (error) {
    sendJson(res, 500, {
      error: {
        message: error instanceof Error ? error.message : "Unknown server error",
      },
    });
  }
});

server.listen(PORT, () => {
  console.log(`Chat proxy listening on http://localhost:${PORT}`);
});

function readBody(req) {
  return new Promise((resolveBody, rejectBody) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        rejectBody(new Error("Request body too large"));
        req.destroy();
      }
    });

    req.on("end", () => resolveBody(body));
    req.on("error", rejectBody);
  });
}

function sendJson(res, status, payload) {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(payload));
}

function setCorsHeaders(res, origin) {
  res.setHeader("Access-Control-Allow-Origin", ALLOWED_ORIGIN === "*" ? "*" : origin || ALLOWED_ORIGIN);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-api-key");
}

function loadEnvFile(filePath) {
  if (!existsSync(filePath)) {
    return;
  }

  const lines = readFileSync(filePath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim();
    if (key && !(key in process.env)) {
      process.env[key] = value;
    }
  }
}
