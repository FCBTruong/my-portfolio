import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const CHAT_PROXY_URL = import.meta.env.VITE_CHAT_PROXY_URL ?? "http://localhost:3000/v1/portfolio/chat";
const CHAT_CLIENT_KEY = import.meta.env.VITE_CHAT_CLIENT_KEY ?? "";
const IS_LOCAL_PROXY = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?\//i.test(CHAT_PROXY_URL);

type Message = { role: "user" | "model"; text: string };

function extractReply(data: unknown): string {
  if (!data || typeof data !== "object") {
    return "Sorry, I couldn't get a response right now.";
  }

  const payload = data as {
    reply?: string;
    message?: string;
    answer?: string;
    data?: { reply?: string };
    choices?: Array<{ message?: { content?: string } }>;
  };

  return (
    payload.reply ??
    payload.message ??
    payload.answer ??
    payload.data?.reply ??
    payload.choices?.[0]?.message?.content ??
    "Sorry, I couldn't get a response right now."
  );
}

export function ChatBot() {
  const [open, setOpen] = React.useState(false);
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  const [showTooltip, setShowTooltip] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [input, setInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [pendingReply, setPendingReply] = React.useState<string | null>(null);
  const [typingText, setTypingText] = React.useState("");
  const bottomRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Typewriter animation
  React.useEffect(() => {
    if (pendingReply === null) return;
    if (typingText.length >= pendingReply.length) {
      setPendingReply(null);
      return;
    }
    const charsPerTick = Math.max(1, Math.floor(pendingReply.length / 120));
    const timer = setTimeout(() => {
      setTypingText(pendingReply.slice(0, typingText.length + charsPerTick));
    }, 16);
    return () => clearTimeout(timer);
  }, [pendingReply, typingText]);

  React.useEffect(() => {
    if (open) {
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
        inputRef.current?.focus();
      }, 50);
    }
  }, [messages, open]);

  React.useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowTooltip(true);
    }, 5000);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const newMessages: Message[] = [...messages, { role: "user", text }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      if (!CHAT_CLIENT_KEY) {
        setMessages((prev) => [...prev, { role: "model", text: "Client key missing. Set VITE_CHAT_CLIENT_KEY and restart dev server." }]);
        return;
      }

      const res = await fetch(CHAT_PROXY_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": CHAT_CLIENT_KEY,
        },
        body: JSON.stringify({
          question: text,
        }),
      });

      const data = await res.json();
      if (!res.ok || (data as { error?: { message?: string } })?.error) {
        const errorMessage =
          (data as { error?: { message?: string } })?.error?.message ??
          `HTTP ${res.status}`;
        setMessages((prev) => [...prev, { role: "model", text: `API error: ${errorMessage}` }]);
        return;
      }

      const reply = extractReply(data);
      setMessages((prev) => [...prev, { role: "model", text: reply }]);
      setTypingText("");
      setPendingReply(reply);
    } catch (err) {
      const isRemotePage = typeof window !== "undefined" && !["localhost", "127.0.0.1"].includes(window.location.hostname);
      const connectionMessage =
        IS_LOCAL_PROXY && isRemotePage
          ? "Chat server is set to localhost, so it only works on your machine. Deploy the proxy to a public URL and update VITE_CHAT_PROXY_URL before publishing."
          : `Connection error: ${err instanceof Error ? err.message : String(err)}`;

      setMessages((prev) => [...prev, { role: "model", text: connectionMessage }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {open ? (
        <div className={`chatbotWindow${isFullscreen ? " isFullscreen" : ""}`}>
          <div className="chatbotHeader">
            <span className="chatbotTitle">Miko • AI assistant</span>
            <div className="chatbotHeaderActions">
              <button
                className="chatbotControl"
                onClick={() => setIsFullscreen((v) => !v)}
                aria-label={isFullscreen ? "Exit full screen" : "Open full screen"}
                title={isFullscreen ? "Exit full screen" : "Open full screen"}
              >
                {isFullscreen ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 3 3 3 3 9" />
                    <line x1="3" y1="3" x2="10" y2="10" />
                    <polyline points="15 21 21 21 21 15" />
                    <line x1="14" y1="14" x2="21" y2="21" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="14" y1="10" x2="21" y2="3" />
                    <polyline points="9 21 3 21 3 15" />
                    <line x1="10" y1="14" x2="3" y2="21" />
                  </svg>
                )}
              </button>
              <button
                className="chatbotClose"
                onClick={() => {
                  setOpen(false);
                  setIsFullscreen(false);
                }}
                aria-label="Close chat"
                title="Close"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          <div className="chatbotMessages">
            {messages.length === 0 ? (
              <p className="chatbotEmpty">
                Ask me anything about Truong — projects, skills, career...
              </p>
            ) : null}

            {messages.map((m, i) => {
              const isTypingMsg =
                pendingReply !== null &&
                i === messages.length - 1 &&
                m.role === "model";
              const displayText = isTypingMsg ? typingText : m.text;
              return (
                <div key={i} className={`chatbotMsg chatbotMsg--${m.role}`}>
                  {m.role === "model" ? (
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        a: ({ ...props }) => (
                          <a {...props} target="_blank" rel="noreferrer" />
                        ),
                      }}
                    >
                      {displayText}
                    </ReactMarkdown>
                  ) : (
                    <p>{m.text}</p>
                  )}
                </div>
              );
            })}

            {loading ? (
              <div className="chatbotMsg chatbotMsg--model">
                <span className="chatbotTyping">
                  <span /><span /><span />
                </span>
              </div>
            ) : null}

            <div ref={bottomRef} />
          </div>

          <div className="chatbotInputRow">
            <input
              ref={inputRef}
              className="chatbotInput"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              placeholder="Ask a question..."
              disabled={loading || pendingReply !== null}
              autoComplete="off"
            />
            <button
              className="chatbotSend"
              onClick={sendMessage}
              disabled={loading || pendingReply !== null || !input.trim()}
              aria-label="Send"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="19" x2="12" y2="5" />
                <polyline points="5 12 12 5 19 12" />
              </svg>
            </button>
          </div>
        </div>
      ) : null}

      {!open && showTooltip ? (
        <div className="chatbotTooltip" role="status" aria-live="polite">
          <div className="chatbotTooltipTitle">Hi, I am Miko</div>
          <p>AI assistant for Truong, ask me anything...</p>
          <button
            type="button"
            className="chatbotTooltipClose"
            aria-label="Dismiss intro"
            onClick={() => setShowTooltip(false)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      ) : null}

      <button
        className={`chatbotFab${open ? " chatbotFab--open" : ""}`}
        onClick={() => {
          setShowTooltip(false);
          setOpen((v) => !v);
          if (open) {
            setIsFullscreen(false);
          }
        }}
        aria-label={open ? "Close chat" : "Chat with AI"}
      >
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <span className="chatbotMascot" aria-hidden="true">
            <svg className="chatbotMascotBody" viewBox="0 0 72 72" fill="none">
              <defs>
                <linearGradient id="mikoHead" x1="18" y1="14" x2="54" y2="58" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#7be9ff" />
                  <stop offset="1" stopColor="#1f90ff" />
                </linearGradient>
                <linearGradient id="mikoVisor" x1="22" y1="28" x2="50" y2="40" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#0f2b5f" />
                  <stop offset="1" stopColor="#163a7a" />
                </linearGradient>
              </defs>
              <line x1="36" y1="8" x2="36" y2="14" stroke="#9feeff" strokeWidth="3" strokeLinecap="round" />
              <circle cx="36" cy="7" r="3" fill="#b6f4ff" />
              <rect x="17" y="14" width="38" height="40" rx="14" fill="url(#mikoHead)" />
              <rect x="22" y="27" width="28" height="14" rx="7" fill="url(#mikoVisor)" />
              <circle cx="30" cy="34" r="3.2" fill="#8ef3ff" />
              <circle cx="42" cy="34" r="3.2" fill="#8ef3ff" />
              <rect x="30" y="44" width="12" height="3" rx="1.5" fill="#e3fbff" fillOpacity="0.92" />
              <rect x="11" y="28" width="7" height="12" rx="3.5" fill="#62d7ff" />
              <rect x="54" y="28" width="7" height="12" rx="3.5" fill="#62d7ff" />
            </svg>
          </span>
        )}
      </button>
    </>
  );
}
