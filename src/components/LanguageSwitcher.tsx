import React from "react";
import { LANGUAGES } from "../lib/i18n";
import { useLanguage } from "../contexts/LanguageContext";

type FlagCode = "en" | "ja" | "vi";

function FlagIcon({ code }: { code: FlagCode }) {
  if (code === "en") {
    return (
      <svg className="langFlag" viewBox="0 0 20 20" aria-hidden="true">
        <defs>
          <clipPath id="flagCircleEn">
            <circle cx="10" cy="10" r="10" />
          </clipPath>
        </defs>
        <g clipPath="url(#flagCircleEn)">
          <rect width="20" height="20" fill="#b22234" />
          <rect y="2" width="20" height="2" fill="#fff" />
          <rect y="6" width="20" height="2" fill="#fff" />
          <rect y="10" width="20" height="2" fill="#fff" />
          <rect y="14" width="20" height="2" fill="#fff" />
          <rect y="18" width="20" height="2" fill="#fff" />
          <rect width="9" height="9" fill="#3c3b6e" />
        </g>
      </svg>
    );
  }

  if (code === "ja") {
    return (
      <svg className="langFlag" viewBox="0 0 20 20" aria-hidden="true">
        <circle cx="10" cy="10" r="9.6" fill="#fff" stroke="rgba(16,24,40,0.12)" strokeWidth="0.8" />
        <circle cx="10" cy="10" r="4.3" fill="#bc002d" />
      </svg>
    );
  }

  return (
    <svg className="langFlag" viewBox="0 0 20 20" aria-hidden="true">
      <defs>
        <clipPath id="flagCircleVi">
          <circle cx="10" cy="10" r="10" />
        </clipPath>
      </defs>
      <g clipPath="url(#flagCircleVi)">
        <rect width="20" height="20" fill="#da251d" />
        <path
          d="M10 5.1L11.2 8.1H14.4L11.8 10.1L12.8 13.1L10 11.3L7.2 13.1L8.2 10.1L5.6 8.1H8.8L10 5.1Z"
          fill="#ffde00"
        />
      </g>
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg className="langChevron" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="langOptionCheck" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2.5 7L5.5 10L11.5 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  React.useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div className="langSwitcher" ref={ref}>
      <button
        type="button"
        className="langSwitcherBtn"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Language: ${current.label}`}
        title={current.label}
      >
        <FlagIcon code={current.code as FlagCode} />
        <span className="langCode">{current.code}</span>
        <ChevronDown />
      </button>

      {open && (
        <div className="langDropdown" role="listbox" aria-label="Select language">
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              type="button"
              role="option"
              aria-selected={l.code === lang}
              className={`langOption${l.code === lang ? " active" : ""}`}
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
            >
              <FlagIcon code={l.code as FlagCode} />
              <span className="langLabel">{l.label}</span>
              {l.code === lang && <CheckIcon />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
