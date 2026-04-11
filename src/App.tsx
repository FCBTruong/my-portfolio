// src/App.tsx
// Single-file portfolio app with:
// - game-style display font
// - light/dark theme toggle with moon/sun icon
// - theme persisted in localStorage
// - hash routes: #/ and #/cv
// - patterned background
// - toned down Download / Play button so GitHub keeps more visual focus

import React from "react";

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0.5C5.37 0.5 0 5.87 0 12.5c0 5.28 3.438 9.75 8.205 11.325.6.113.82-.262.82-.582 0-.287-.01-1.045-.015-2.052-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.304-.536-1.53.117-3.19 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 013.003-.404c1.018.005 2.042.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.66.243 2.886.12 3.19.77.84 1.234 1.91 1.234 3.22 0 4.61-2.805 5.624-5.476 5.92.43.372.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.29 0 .323.216.7.825.58C20.565 22.245 24 17.78 24 12.5 24 5.87 18.63 0.5 12 0.5z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-14a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm0 19a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1ZM4.22 5.64a1 1 0 0 1-1.42 0l-.7-.7A1 1 0 1 1 3.5 3.52l.7.7a1 1 0 0 1 .02 1.42ZM20.2 21.62a1 1 0 0 1-1.42 0l-.7-.7a1 1 0 1 1 1.42-1.42l.7.7a1 1 0 0 1 0 1.42ZM2 13a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2H2Zm19 0a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2h-1ZM4.22 18.36a1 1 0 0 1-.02 1.42l-.7.7a1 1 0 1 1-1.42-1.42l.7-.7a1 1 0 0 1 1.44 0ZM19.08 4.94a1 1 0 0 1 0-1.42l.7-.7a1 1 0 1 1 1.42 1.42l-.7.7a1 1 0 0 1-1.42 0Z" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.64 13a1 1 0 0 0-1.12-.22A8.05 8.05 0 0 1 9.22 3.48 1 1 0 0 0 8 2.36 10 10 0 1 0 21.64 13Z" />
    </svg>
  );
}

type Project = {
  id: string;
  title: string;
  role?: string;
  description: string;
  tech?: string[];
  previewMp4?: string;
  previewGif?: string;
  youtubeUrl?: string;
  githubUrl?: string;
  downloadUrl?: string;
  screenshots?: string[];
};

type Theme = "light" | "dark";

const baseUrl = import.meta.env.BASE_URL;
const asset = (p: string) => `${baseUrl}${p.replace(/^\/+/, "")}`;

const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "FPS Zombie Online",
    role: "",
    description: "Multiplayer shooting FPS game with Spike, Zombie, and Deathmatch modes.",
    tech: ["UE 5", "C++", ".NET"],
    previewMp4: asset("/videos/fps.mp4"),
    previewGif: "",
    youtubeUrl: "https://youtu.be/O9IfP6dzKvo",
    githubUrl: "https://github.com/FCBTruong/fps-zombie-multiplayer",
    downloadUrl: "https://github.com/FCBTruong/fps-zombie-multiplayer/releases",
    screenshots: [asset("/screenshots/fps/1.jpg"), asset("/screenshots/fps/2.jpg"), asset("/screenshots/fps/3.jpg")],
  },
  {
    id: "p2",
    title: "Tressette Royal Online",
    role: "",
    description: "An online, turn-based multiplayer card game.",
    tech: ["Godot", "Python", "C++"],
    previewMp4: asset("/videos/tressette.mp4"),
    previewGif: "",
    youtubeUrl: "https://youtu.be/zKZ15l_08L4",
    githubUrl: "https://github.com/FCBTruong/tressette/",
    downloadUrl: "https://tressette.clareentertainment.com/",
    screenshots: [
      asset("/screenshots/tressette/1.jpg"),
      asset("/screenshots/tressette/2.jpg"),
      asset("/screenshots/tressette/3.jpg"),
    ],
  },
  {
    id: "p3",
    title: "Thoi Loan Online",
    role: "",
    description:
      "Fresher training project at VNG: developed a fully featured Clash of Clans-style game remake, including core codebase, architecture, gameplay systems, and balancing/polishing.",
    tech: ["Cocos"],
    previewMp4: asset("/videos/thoiloan.mp4"),
    previewGif: "",
    youtubeUrl: "https://youtu.be/kkiejixeQr0",
    githubUrl: "",
    downloadUrl: "",
    screenshots: [
      asset("/screenshots/thoiloan/1.jpg"),
      asset("/screenshots/thoiloan/2.jpg"),
      asset("/screenshots/thoiloan/3.jpg"),
    ],
  },
  {
    id: "p4",
    title: "Tower Defense",
    role: "",
    description:
      "A Tower Defense game where players strategically place towers to defend against waves of enemies.",
    tech: ["LibGDX", "Java"],
    previewMp4: asset("/videos/defense.mp4"),
    previewGif: "",
    youtubeUrl: "https://youtu.be/f_LjY2B8enk",
    githubUrl: "https://github.com/FCBTruong/tower_defense_game",
    downloadUrl:
      "https://drive.google.com/file/d/19q84ZlyNqOVZZZzH24mDap18oo8_kEdI/view?usp=drive_link",
  },
  {
    id: "p5",
    title: "2048 Puzzle",
    role: "",
    description: "A simple 2048 puzzle game focused on core tile movement and merging logic.",
    tech: ["C++"],
    previewMp4: asset("/videos/2048.mp4"),
    previewGif: "",
    youtubeUrl: "https://youtu.be/_1QW8wA5rz0",
    githubUrl: "https://github.com/FCBTruong/game-2048-cpp",
    downloadUrl:
      "https://drive.google.com/file/d/1vlW6E9IuX5oEf8YZvksmCS5h1mi8T0QS/view?usp=drive_link",
  },
  {
    id: "p6",
    title: "Sleepy Bat",
    role: "",
    description:
      "A simple endless runner game where players control a bat navigating through obstacles.",
    tech: ["Unity", "C#"],
    previewMp4: asset("/videos/bat.mp4"),
    previewGif: "",
    youtubeUrl: "https://youtu.be/2woaTfKqtQY",
    githubUrl: "https://github.com/FCBTruong/FlyBat3D",
    downloadUrl: "",
  },
];

function getRoute() {
  const h = window.location.hash || "#/";
  return h.startsWith("#/cv") ? "cv" : "home";
}

function useHashRoute() {
  const [route, setRoute] = React.useState<"home" | "cv">(getRoute());

  React.useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return route;
}

function navigateTo(hash: "#/" | "#/cv") {
  if (window.location.hash === hash) return;
  window.location.hash = hash;
}

function getInitialTheme(): Theme {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;

  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
  return prefersDark ? "dark" : "light";
}

function ThemeToggle({
  theme,
  onToggle,
}: {
  theme: Theme;
  onToggle: () => void;
}) {
  const isDark = theme === "dark";

  return (
    <button
      className="btn btnIconOnly"
      type="button"
      onClick={onToggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

function ProjectPreview({
  title,
  previewMp4,
  previewGif,
  youtubeUrl,
}: {
  title: string;
  previewMp4?: string;
  previewGif?: string;
  youtubeUrl?: string;
}) {
  return (
    <div className="previewCard">
      {previewMp4 ? (
        <video
          className="previewMedia"
          src={previewMp4}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={`${title} preview video`}
        />
      ) : previewGif ? (
        <img
          src={previewGif}
          alt={`${title} preview`}
          className="previewMedia"
          loading="lazy"
        />
      ) : (
        <div className="previewPlaceholder">No preview</div>
      )}

      {youtubeUrl ? (
        <a
          className="previewOverlayBtn"
          href={youtubeUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Watch full demo of ${title}`}
        >
          Watch Full Demo
        </a>
      ) : null}
    </div>
  );
}

function CvPage({
  theme,
  onToggleTheme,
}: {
  theme: Theme;
  onToggleTheme: () => void;
}) {
  const cvUrl = "/NGUYEN_HUY_TRUONG_GE_VNG.pdf#toolbar=0";

  return (
    <div className="cvPage">
      <header className="topbar">
        <div className="container topbarInner">
          <button className="btn" onClick={() => navigateTo("#/")} type="button">
            ← Back
          </button>

          <div className="brand">
            <span>CV</span>
          </div>

          <div className="rightActions">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <a className="btn primary" href="/NGUYENHUYTRUONG_SE.pdf" target="_blank" rel="noreferrer">
              Open in new tab
            </a>
          </div>
        </div>
      </header>

      <main className="container cvMain">
        <iframe src={cvUrl} title="CV PDF" className="cvIframe" loading="lazy" />
      </main>
    </div>
  );
}

function HomePage({
  theme,
  onToggleTheme,
}: {
  theme: Theme;
  onToggleTheme: () => void;
}) {
  return (
    <div className="page">
      <header className="topbar">
        <div className="container topbarInner">
          <a className="brand" href="#/">
            <span>Portfolio</span>
          </a>

          <nav className="nav">
            <a className="navLink" href="#projects">
              Projects
            </a>
            <a href="./NGUYENHUYTRUONG_SE.pdf" download className="navLinkBtn">
              CV
            </a>
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </nav>
        </div>
      </header>

      <main className="container main">
        <section className="intro" id="top" style={{ marginBottom: "20px" }}>
          <h1 className="h3 heroTitle">
            Hi, I'm <span className="accent">Truong</span>
          </h1>
          <p className="summary">
            I work on online multiplayer games and I am also an active player.
            That player perspective shapes how I think about gameplay and overall
            experience. I know great games are not built alone, and I am
            looking to work with a passionate team where I can fully contribute and
            grow together. My goal is to create meaningful experiences for players
            around the world.
          </p>
        </section>

        <section id="projects" className="projects">
          <div className="sectionHead">
            <h2 className="h3">Projects</h2>
          </div>

          <div className="projectList">
            {PROJECTS.map((p) => (
              <div key={p.id} className="projectItem">
                <div className="projectMedia">
                  <ProjectPreview
                    title={p.title}
                    previewMp4={p.previewMp4}
                    previewGif={p.previewGif}
                    youtubeUrl={p.youtubeUrl}
                  />
                </div>

                <div className="projectInfo">
                  <div className="projectTitleRow">
                    <h3 className="h3">{p.title}</h3>
                    {p.role ? <span className="pill">{p.role}</span> : null}
                  </div>

                  <p className="projectDesc">{p.description}</p>

                  {p.tech?.length ? (
                    <div className="tech">
                      {p.tech.map((t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <div className="projectActions">
                    {p.githubUrl ? (
                      <a
                        className="btn btnIcon"
                        href={p.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <GitHubIcon />
                        GitHub
                      </a>
                    ) : null}

                    {p.downloadUrl ? (
                      <a
                        className="btn primary"
                        href={p.downloadUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Download / Play
                      </a>
                    ) : null}
                  </div>
                </div>

                {p.screenshots?.length ? (
                  <div className="screenshots fill3">
                    {p.screenshots.slice(0, 3).map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`${p.title} screenshot ${i + 1}`}
                        loading="lazy"
                      />
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerInner">
          <span className="muted">© {new Date().getFullYear()} Nguyen Huy Truong</span>
          <span className="muted">React + TypeScript (Vite)</span>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  const route = useHashRoute();
  const [theme, setTheme] = React.useState<Theme>(() => getInitialTheme());

  const toggleTheme = React.useCallback(() => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }, []);

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <style>{styles}</style>
      {route === "cv" ? (
        <CvPage theme={theme} onToggleTheme={toggleTheme} />
      ) : (
        <HomePage theme={theme} onToggleTheme={toggleTheme} />
      )}
    </>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Oxanium:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap');

:root{
  --font-body: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  --font-display: Oxanium, Inter, ui-sans-serif, system-ui, sans-serif;

  --bg: #f6f8fc;
  --surface: rgba(255, 255, 255, 0.88);
  --surface-solid: #ffffff;
  --surface-2: #f3f6fb;
  --text: #101828;
  --muted: #667085;
  --border: rgba(16, 24, 40, 0.08);

  --accent: #4f46e5;
  --accent-2: #0ea5e9;

  --pattern-line: rgba(16, 24, 40, 0.05);
  --pattern-dot: rgba(16, 24, 40, 0.06);

  --shadow: 0 10px 30px rgba(2, 6, 23, 0.08);
  --focus: 0 0 0 3px rgba(79, 70, 229, 0.20);

  color-scheme: light;
}

:root[data-theme="dark"]{
  --bg: #070b14;
  --surface: rgba(15, 23, 42, 0.80);
  --surface-solid: #0f172a;
  --surface-2: #111827;
  --text: #e5e7eb;
  --muted: #94a3b8;
  --border: rgba(148, 163, 184, 0.14);

  --accent: #7c3aed;
  --accent-2: #22d3ee;

  --pattern-line: rgba(148, 163, 184, 0.08);
  --pattern-dot: rgba(148, 163, 184, 0.10);

  --shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
  --focus: 0 0 0 3px rgba(34, 211, 238, 0.20);

  color-scheme: dark;
}

*{ box-sizing: border-box; }

html, body, #root{
  min-height: 100%;
}

html{
  scroll-behavior: smooth;
}

body{
  margin: 0;
  font-family: var(--font-body);
  color: var(--text);
  background-color: var(--bg);
  background-image:
    radial-gradient(circle at 1px 1px,
      color-mix(in srgb, var(--text) 6%, transparent) 1px,
      transparent 0),
    radial-gradient(900px 500px at 15% 10%,
      color-mix(in srgb, var(--accent) 18%, transparent),
      transparent 60%),
    radial-gradient(900px 500px at 85% 15%,
      color-mix(in srgb, var(--accent-2) 16%, transparent),
      transparent 60%);
  background-size: 18px 18px, auto, auto;
  background-position: 0 0, 0 0, 0 0;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

a{
  color: inherit;
  text-decoration: none;
}

img{
  display: block;
}

button{
  font: inherit;
}

.container{
  width: min(1100px, calc(100% - 40px));
  margin: 0 auto;
}

.page{
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.main{
  padding: 28px 0 56px;
  display: grid;
  gap: 28px;
}

.topbar{
  position: sticky;
  top: 0;
  z-index: 10;
  background: color-mix(in srgb, var(--bg) 78%, transparent);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
}

.topbarInner{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
  gap: 10px;
}

.brand{
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.nav{
  display: inline-flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
}

.navLink{
  padding: 8px 10px;
  border-radius: 10px;
  color: var(--muted);
  transition: background 180ms ease, color 180ms ease;
}

.navLink:hover{
  color: var(--text);
  background: rgba(255, 255, 255, 0.06);
}

.navLinkBtn{
  padding: 8px 10px;
  border-radius: 10px;
  border: 0;
  background: transparent;
  color: var(--muted);
  cursor: pointer;
  transition: background 180ms ease, color 180ms ease;
}

.navLinkBtn:hover{
  color: var(--text);
  background: rgba(255, 255, 255, 0.06);
}

.navLinkBtn:focus-visible{
  outline: none;
  box-shadow: var(--focus);
}

.h3{
  margin: 0;
  font-size: 20px;
  font-family: var(--font-display);
  letter-spacing: 0.03em;
}

.heroTitle{
  font-size: clamp(28px, 4vw, 30px);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.accent{
  color: var(--accent-2);
  text-shadow: 0 0 18px color-mix(in srgb, var(--accent-2) 24%, transparent);
}

.summary{
  margin: 10px 0 0;
  color: var(--muted);
  line-height: 1.75;
  font-size: 18px;
  max-width: 88ch;
}

.btn{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  box-shadow: var(--shadow);
  transition: transform 150ms ease, background 180ms ease, border-color 180ms ease, opacity 180ms ease;
  backdrop-filter: blur(10px);
}

.btn:hover{
  transform: translateY(-1px);
  border-color: color-mix(in srgb, var(--accent) 24%, var(--border));
}

.btn:focus-visible{
  outline: none;
  box-shadow: var(--focus);
}

.btnIcon{
  background: color-mix(in srgb, var(--surface-solid) 84%, transparent);
}

.btnIcon:hover{
  background: color-mix(in srgb, var(--surface-solid) 94%, transparent);
}

.btnIcon svg{
  flex-shrink: 0;
}

.btnIconOnly{
  width: 42px;
  height: 42px;
  padding: 0;
  border-radius: 999px;
}

.btnIconOnly svg{
  width: 18px;
  height: 18px;
}

.primary{
  border: 1px solid color-mix(in srgb, var(--accent) 18%, var(--border));
  background: color-mix(in srgb, var(--accent) 8%, var(--surface-solid));
  color: var(--text);
  box-shadow: none;
}

.primary:hover{
  background: color-mix(in srgb, var(--accent) 12%, var(--surface-solid));
  filter: none;
}

.rightActions{
  display: flex;
  gap: 10px;
  align-items: center;
}

.projects{
  display: grid;
  gap: 12px;
}

.sectionHead{
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.muted{
  color: var(--muted);
}

.projectList{
  display: grid;
  gap: 48px;
  margin-top: 6px;
  padding-top: 14px;
  border-top: 1px solid var(--border);
}

.projectItem{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 18px;
  background: var(--surface);
  box-shadow: var(--shadow);
  backdrop-filter: blur(12px);
}

.projectMedia{
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
  background: var(--surface-2);
}

.previewCard{
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 14px;
  overflow: hidden;
  background: var(--surface-2);
}

.previewMedia{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.previewPlaceholder{
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  color: var(--muted);
  font-size: 14px;
  background: var(--surface-2);
  font-family: var(--font-display);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.previewOverlayBtn{
  position: absolute;
  right: 10px;
  bottom: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.14);
  background: rgba(15, 23, 42, 0.68);
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  backdrop-filter: blur(8px);
  transition: background 180ms ease, transform 150ms ease;
}

.previewOverlayBtn:hover{
  background: rgba(15, 23, 42, 0.82);
  transform: translateY(-1px);
}

.projectTitleRow{
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.pill{
  font-size: 12px;
  font-weight: 700;
  color: var(--muted);
  border: 1px solid var(--border);
  background: color-mix(in srgb, var(--surface-solid) 80%, transparent);
  padding: 4px 8px;
  border-radius: 999px;
  font-family: var(--font-display);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.projectDesc{
  margin: 10px 0 0;
  color: var(--muted);
  line-height: 1.8;
  font-size: 16px;
}

.tech{
  margin-top: 12px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag{
  font-size: 12px;
  font-weight: 700;
  color: var(--text);
  border: 1px solid var(--border);
  background: color-mix(in srgb, var(--surface-solid) 82%, transparent);
  padding: 5px 9px;
  border-radius: 999px;
  font-family: var(--font-display);
  letter-spacing: 0.03em;
}

.projectActions{
  margin-top: 12px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.footer{
  margin-top: auto;
  border-top: 1px solid var(--border);
  background: color-mix(in srgb, var(--surface-solid) 32%, transparent);
  backdrop-filter: blur(10px);
}

.footerInner{
  padding: 14px 0;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
}

.cvPage{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.cvMain{
  padding: 18px 0 28px;
  flex: 1;
}

.cvIframe{
  width: 100%;
  height: calc(100vh - 72px - 28px);
  border: 1px solid var(--border);
  border-radius: 16px;
  background: var(--surface-solid);
  box-shadow: var(--shadow);
}

.screenshots.fill3{
  margin-top: 14px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.screenshots.fill3 img{
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--surface-2);
}

@media (max-width: 920px){
  .projectItem{
    grid-template-columns: 1fr;
  }

  .cvIframe{
    height: calc(100vh - 72px - 28px);
  }
}

@media (max-width: 640px){
  .container{
    width: min(1100px, calc(100% - 24px));
  }

  .topbarInner{
    align-items: flex-start;
  }

  .nav{
    justify-content: flex-end;
  }

  .summary{
    font-size: 16px;
  }

  .projectItem{
    padding: 12px;
  }

  .footerInner{
    flex-direction: column;
  }
}
`;