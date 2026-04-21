const SYSTEM_PROMPT = `You are Miko, a friendly and helpful AI assistant on a developer's portfolio website. 
You provide thoughtful responses about the work, skills, and projects showcased.
Keep responses concise and engaging. Format your responses with markdown when appropriate (bold, italic, lists, code blocks).
Be conversational and warm in tone.`;

const ALLOWED_PATHS = ["/v1/chat/completions", "/v1/portfolio/chat"];

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: corsHeaders(),
      });
    }

    if (request.method !== "POST") {
      return json({ error: "Method not allowed" }, 405);
    }

    if (!env.OPENROUTER_API_KEY) {
      return json({ error: "Missing OPENROUTER_API_KEY secret" }, 500);
    }

    // Validate API key
    const apiKey = request.headers.get("x-api-key");
    if (!apiKey) {
      return json({ error: "Missing x-api-key header" }, 401);
    }

    const url = new URL(request.url);
    const path = url.pathname;

    // Check if path is allowed
    if (!ALLOWED_PATHS.some(p => path.endsWith(p))) {
      return json({ error: "Invalid endpoint" }, 404);
    }

    try {
      const body = await request.json();
      let messages = [];
      let model = "meta-llama/llama-3.3-8b-instruct:free";

      // Handle /v1/portfolio/chat (new format: { question: "..." })
      if (path.endsWith("/v1/portfolio/chat")) {
        const userMessage = body?.question;
        if (!userMessage || typeof userMessage !== "string") {
          return json({ error: "Invalid request: missing 'question' field" }, 400);
        }

        // Build messages array with system prompt
        messages = [
          {
            role: "system",
            content: SYSTEM_PROMPT,
          },
          {
            role: "user",
            content: userMessage,
          },
        ];
      } 
      // Handle /v1/chat/completions (legacy format: { model, messages })
      else {
        model = body?.model ?? "meta-llama/llama-3.3-8b-instruct:free";
        messages = Array.isArray(body?.messages) ? body.messages : [];
        
        if (messages.length === 0) {
          return json({ error: "Invalid request: missing 'messages' array" }, 400);
        }
      }

      const upstream = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${env.OPENROUTER_API_KEY}`,
          "HTTP-Referer": "https://fcbtruong.github.io/my-portfolio",
          "X-Title": "my-portfolio-chatbot",
        },
        body: JSON.stringify({
          model,
          messages,
        }),
      });

      const data = await upstream.text();
      return new Response(data, {
        status: upstream.status,
        headers: {
          ...corsHeaders(),
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      return json(
        { error: error instanceof Error ? error.message : "Unknown error" },
        500
      );
    }
  },
};

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, x-api-key",
  };
}

function json(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      ...corsHeaders(),
      "Content-Type": "application/json",
    },
  });
}
