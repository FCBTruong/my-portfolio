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
  youtubeId: string;
  githubUrl?: string;
  downloadUrl?: string;
};

const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "FPS Zombie Multiplayer",
    role: "",
    description:
      "Fast-paced runner prototype with performance-friendly VFX and clean gameplay architecture.",
    tech: ["Unreal Engine 5", "C++", ".NET"],
    youtubeId: "dQw4w9WgXcQ",
    githubUrl: "https://github.com/FCBTruong/fps-zombie-multiplayer",
    downloadUrl: "https://yourlink.com/neon-runner",
  },
  {
    id: "p2",
    title: "Tressette",
    role: "",
    description:
      "Turn-based tactics prototype with deterministic simulation and tooling for rapid iteration.",
    tech: ["Godot", "Python"],
    youtubeId: "5WXr3NAkn3o",
    githubUrl: "https://github.com/FCBTruong/tressette/",
    downloadUrl: "https://tressette.clareentertainment.com/",
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

function YouTubeEmbed({ youtubeId, title }: { youtubeId: string; title: string }) {
  const src = `https://www.youtube.com/embed/${youtubeId}?rel=0`;
  return (
    <div className="ratio">
      <iframe
        src={src}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
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
            <button className="navLinkBtn" onClick={() => navigateTo("#/cv")} type="button">
              CV
            </button>
          </nav>
        </div>
      </header>

      <main className="container main">
       <section className="intro" id="top" style={{ marginBottom: "40px" }}>
          <h1 className="h3">
            Hi, I&apos;m <span className="accent">Truong</span>
          </h1>
          <p className="summary">
            I’m a game developer with 4 years of experience in the video game industry, mainly working on online multiplayer games. I enjoy collaborating with international teams and building features that players interact with every day.
             My goal is to help create great game experiences for players all around the world, and I’m open to relocation.
          </p>
       </section>

       <section
          id="projects"
          className="projects"
        >
          <div className="sectionHead">
            <h2 className="h3">Projects</h2>
          </div>

          <div className="projectList">
            {PROJECTS.map((p) => (
              <div key={p.id} className="projectItem">
                <div className="projectMedia">
                  <YouTubeEmbed youtubeId={p.youtubeId} title={`${p.title} video`} />
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
                         <a className="btn btnIcon" href={p.githubUrl} target="_blank" rel="noreferrer">
                        <GitHubIcon />
                        GitHub
                      </a>
                    ) : null}
                    {p.downloadUrl ? (
                      <a className="btn primary" href={p.downloadUrl} target="_blank" rel="noreferrer">
                        Download / Play
                      </a>
                    ) : null}
                  </div>
                </div>
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
  --text: #111827;     /* slate-900 */
  --muted: #6b7280;    /* slate-500 */
  --border: #e5e7eb;   /* gray-200 */
  --accent: #111827;   /* keep monochrome */
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

.badge{
  display:inline-flex;
  align-items:center;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 650;
  color: var(--muted);
  background: var(--surface);
  border: 1px solid var(--border);
}

.h1{
  margin: 10px 0 6px;
  font-size: clamp(28px, 4vw, 42px);
  line-height: 1.12;
  letter-spacing: -0.4px;
}
.accent{ color: var(--accent); }

.subtitle{
  margin:0;
  font-weight: 650;
  color: var(--text);
  max-width: 74ch;
}
.summary{
  margin: 10px 0 0;
  color: var(--muted);
  line-height: 1.8;
  font-size: 17.5px;
  max-width: 90ch;
}

.actions{
  margin-top: 14px;
  display:flex;
  gap: 10px;
  flex-wrap: wrap;
}

.btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
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
  background: #000;        /* stronger contrast */
}

.links{
  margin-top: 14px;
  display:flex;
  gap: 10px;
  flex-wrap: wrap;
  color: var(--muted);
}
.link{
  color: var(--text);
  text-decoration: underline;
  text-underline-offset: 3px;
}
.link:hover{ opacity: 0.85; }
.sep{
  width:4px; height:4px; border-radius:50%;
  background: var(--border);
  align-self:center;
}

.projects{ display:grid; gap: 12px; }
.sectionHead{
  display:flex;
  align-items:baseline;
  justify-content:space-between;
  gap:12px;
  flex-wrap:wrap;
}
.h2{ margin:0; font-size: 22px; }
.h3{ margin:0; font-size: 18px; }
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

.ratio{ position: relative; width:100%; padding-top: 56.25%; }
.ratio iframe{ position:absolute; inset:0; width:100%; height:100%; border:0; }

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

@media (max-width: 920px){
  .projectItem{ grid-template-columns: 1fr; }
  .cvIframe{ height: calc(100vh - 72px - 28px); }
}
`;
