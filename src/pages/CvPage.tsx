import { navigateTo } from "../lib/navigation";
import { TopbarScene } from "../components/TopbarScene";
import type { Theme } from "../types/portfolio";
import { ThemeToggle } from "../components/ThemeToggle";
import { MemoryGame } from "../components/MemoryGame";

type CvPageProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

export function CvPage({ theme, onToggleTheme }: CvPageProps) {
  const cvUrl = "/NGUYEN_HUY_TRUONG_GE_VNG.pdf#toolbar=0";

  return (
    <div className="cvPage">
      <header className="topbar">
        <TopbarScene />
        <div className="container topbarInner">
          <button className="btn" onClick={() => navigateTo("#/")} type="button">
            ← Back
          </button>

          <div className="brand">
            <span>Resume</span>
          </div>

          <div className="rightActions">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <a className="btn primary" href="/NGUYEN_HUY_TRUONG_GE_VNG.pdf" target="_blank" rel="noreferrer">
              Open in new tab
            </a>
          </div>
        </div>
      </header>

      <main className="container cvMain">
        <iframe src={cvUrl} title="Resume PDF" className="cvIframe" loading="lazy" />
      </main>
    </div>
  );
}
