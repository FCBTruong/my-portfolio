// src/App.tsx
// Single-file version (data + UI + styles).
// Minimal light theme (white/gray), readable.
// Route: #/ (home), #/cv (iframe shows /public/cv.pdf)

import React from "react";

function GitHubIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0.5C5.37 0.5 0 5.87 0 12.5c0 5.28 3.438 9.75 8.205 11.325.6.113.82-.262.82-.582 0-.287-.01-1.045-.015-2.052-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.304-.536-1.53.117-3.19 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 013.003-.404c1.018.005 2.042.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.66.243 2.886.12 3.19.77.84 1.234 1.91 1.234 3.22 0 4.61-2.805 5.624-5.476 5.92.43.372.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.29 0 .323.216.7.825.58C20.565 22.245 24 17.78 24 12.5 24 5.87 18.63 0.5 12 0.5z" />
    </svg>
  );
}

type Project = {
  id: string;
  title: string;
  role?: string;
  description: string;
  tech?: string[];
  previewMp4?: string; // Prefer MP4 if available
  previewGif?: string; // Fallback
  youtubeUrl?: string;
  githubUrl?: string;
  downloadUrl?: string;
  screenshots?: string[];
};

const baseUrl = import.meta.env.BASE_URL;
const asset = (p: string) => `${baseUrl}${p.replace(/^\/+/, "")}`;

const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "FPS Zombie Online",
    role: "",
    description:
      "Multiplayer shooting FPS game with Spike, Zombie, and Deathmatch modes.",
    tech: ["UE 5", "C++", ".NET"],
    previewMp4: "", // <-- add if you have MP4
    previewGif: "",
    youtubeUrl: "https://youtu.be/dQw4w9WgXcQ",
    githubUrl: "https://github.com/FCBTruong/fps-zombie-multiplayer",
    downloadUrl: "https://yourlink.com/neon-runner",
    screenshots: [asset("/screenshots/fps/1.png"), asset("/screenshots/fps/2.png")],
  },
  {
    id: "p2",
    title: "Tressette Royal Online",
    role: "",
    description:
      "An online, turn-based multiplayer card game.",
    tech: ["Godot", "Python"],
    previewMp4: asset("/videos/tressette.mp4"), // <-- add if available
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
    previewMp4: asset("/videos/thoiloan.mp4"), // <-- add if available
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
    previewMp4: asset("/videos/defense.mp4"), // <-- add if available
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
    description:
      "A simple 2048 puzzle game focused on core tile movement and merging logic.",
    tech: ["C++"],
    previewMp4: asset("/videos/2048.mp4"), // <-- add if available
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
    previewMp4: asset("/videos/bat.mp4"), // <-- add if available
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

function CvPage() {
  const cvUrl = "/cv.pdf#toolbar=0";
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

          <a className="btn primary" href="/cv.pdf" target="_blank" rel="noreferrer">
            Open in new tab
          </a>
        </div>
      </header>

      <main className="container cvMain">
        <iframe src={cvUrl} title="CV PDF" className="cvIframe" loading="lazy" />
      </main>
    </div>
  );
}

function HomePage() {
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
            <a href="./cv.pdf" download className="navLinkBtn">
              CV
            </a>
          </nav>
        </div>
      </header>

      <main className="container main">
        <section className="intro" id="top" style={{ marginBottom: "20px" }}>
          <h1 className="h3">
            Hi, I&apos;m <span className="accent">Truong</span>
          </h1>
          <p className="summary">
            I work on online multiplayer games and I&apos;m also an active player.
            That player perspective shapes how I think about gameplay and overall
            experience. I know great games aren&apos;t built alone, and I&apos;m looking
            to work with a passionate team where I can fully contribute and grow
            together to create meaningful experiences for players around the world.
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
  return (
    <>
      <style>{styles}</style>
      {route === "cv" ? <CvPage /> : <HomePage />}
    </>
  );
}

const styles = `
:root{
  --bg: #f5f6f8;
  --surface: #ffffff;
  --text: #111827;
  --muted: #6b7280;
  --border: #e5e7eb;
  --accent: #111827;
  --focus: 0 0 0 3px rgba(17,24,39,0.18);
}

*{ box-sizing:border-box; }
html,body{ height:100%; }
body{
  margin:0;
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
  background: var(--bg);
  color: var(--text);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

a{ color:inherit; text-decoration:none; }
.container{ width:min(1100px, calc(100% - 40px)); margin:0 auto; }

.page{ min-height:100%; display:flex; flex-direction:column; }
.main{ padding: 28px 0 56px; display:grid; gap: 28px; }

.topbar{
  position: sticky;
  top:0;
  z-index:10;
  background: rgba(245,246,248,0.9);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border);
}
.topbarInner{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding: 14px 0;
  gap: 10px;
}

.brand{
  display:inline-flex;
  align-items:center;
  gap:10px;
  font-weight:700;
  letter-spacing:0.2px;
}

.nav{ display:inline-flex; gap:10px; align-items:center; }
.navLink{
  padding: 8px 10px;
  border-radius: 10px;
  color: var(--muted);
}
.navLink:hover{ color: var(--text); background: rgba(17,24,39,0.05); }

.navLinkBtn{
  padding: 8px 10px;
  border-radius: 10px;
  border: 0;
  background: transparent;
  color: var(--muted);
  cursor: pointer;
  font: inherit;
}
.navLinkBtn:hover{ color: var(--text); background: rgba(17,24,39,0.05); }
.navLinkBtn:focus-visible{ outline:none; box-shadow: var(--focus); }

.h3{ margin:0; font-size: 18px; }
.accent{ color: var(--accent); }

.summary{
  margin: 10px 0 0;
  color: var(--muted);
  line-height: 1.5;
  font-size: 19.5px;
  max-width: 90ch;
}

.btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap: 8px;
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  font-weight: 650;
  font-size: 14px;
  cursor: pointer;
}
.btn:hover{ background: rgba(17,24,39,0.03); }
.btn:focus-visible{ outline:none; box-shadow: var(--focus); }

.primary{
  border-color: var(--text);
  background: var(--text);
  color: #fff;
}
.primary:hover{
  background: #000;
}

.projects{ display:grid; gap: 12px; }
.sectionHead{
  display:flex;
  align-items:baseline;
  justify-content:space-between;
  gap:12px;
  flex-wrap:wrap;
}
.muted{ color: var(--muted); }

.projectList{
  display: grid;
  gap: 48px;
  margin-top: 6px;
  padding-top: 14px;
  border-top: 1px solid var(--border);
}

.projectItem{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--surface);
}

.projectMedia{
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow:hidden;
  background: #fafafa;
}

.previewCard{
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  overflow: hidden;
  background: #f3f4f6;
}

.previewMedia{
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.previewPlaceholder{
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  color: var(--muted);
  font-size: 14px;
  background: #f9fafb;
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
  border: 1px solid rgba(255,255,255,0.35);
  background: rgba(17,24,39,0.78);
  color: #fff;
  font-size: 13px;
  font-weight: 650;
  backdrop-filter: blur(6px);
}

.previewOverlayBtn:hover{
  background: rgba(17,24,39,0.92);
}

.projectTitleRow{
  display:flex;
  align-items:center;
  gap: 10px;
  flex-wrap: wrap;
}
.pill{
  font-size: 12px;
  font-weight: 650;
  color: var(--muted);
  border: 1px solid var(--border);
  background: #f9fafb;
  padding: 4px 8px;
  border-radius: 999px;
}

.projectDesc{
  margin: 10px 0 0;
  color: var(--muted);
  line-height: 1.75;
  font-size: 17px;
}

.tech{
  margin-top: 12px;
  display:flex;
  gap: 8px;
  flex-wrap: wrap;
}
.tag{
  font-size: 12px;
  font-weight: 650;
  color: var(--text);
  border: 1px solid var(--border);
  background: #f9fafb;
  padding: 5px 8px;
  border-radius: 999px;
}

.projectActions{
  margin-top: 12px;
  display:flex;
  gap: 10px;
  flex-wrap: wrap;
}

.btnIcon svg{
  flex-shrink: 0;
}

.footer{
  margin-top:auto;
  border-top: 1px solid var(--border);
  background: rgba(255,255,255,0.6);
}
.footerInner{
  padding: 14px 0;
  display:flex;
  justify-content:space-between;
  gap: 10px;
  flex-wrap: wrap;
}

/* CV route */
.cvPage{ min-height:100vh; display:flex; flex-direction:column; }
.cvMain{ padding: 18px 0 28px; flex:1; }
.cvIframe{
  width:100%;
  height: calc(100vh - 72px - 28px);
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--surface);
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
  border-radius: 10px;
  border: 1px solid var(--border);
  background: #fafafa;
}

@media (max-width: 920px){
  .projectItem{ grid-template-columns: 1fr; }
  .cvIframe{ height: calc(100vh - 72px - 28px); }
}
`;