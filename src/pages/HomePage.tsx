import React from "react";
import { PROJECTS } from "../data/projects";
import type { Theme } from "../types/portfolio";
import { GitHubIcon, GmailIcon, LinkedInIcon } from "../components/icons";
import { Lightbox } from "../components/Lightbox";
import { ProjectPreview } from "../components/ProjectPreview";
import { TopbarScene } from "../components/TopbarScene";
import { ThemeToggle } from "../components/ThemeToggle";
import { MemoryGame } from "../components/MemoryGame";

type HomePageProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

export function HomePage({ theme, onToggleTheme }: HomePageProps) {
  const [lightbox, setLightbox] = React.useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="page">
      <header className="topbar">
        <TopbarScene />
        <div className="container topbarInner">
          <a className="brand" href="#/">
            <span>Portfolio</span>
          </a>

          <nav className="nav">
            <a className="navLink" href="#projects">
              Projects
            </a>
            <a href="./NGUYEN_HUY_TRUONG_GE_VNG.pdf" download className="navLinkBtn">
              Resume
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
            I work on online multiplayer games and I am also an active player. That player perspective shapes how I
            think about gameplay and overall experience. I know great games are not built alone, and I am looking to
            work with a passionate team where I can fully contribute and grow together. My goal is to create meaningful
            experiences for players around the world.
          </p>
        </section>

        <MemoryGame />

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

                {p.screenshots?.length ? (
                  <div className="screenshots fill3">
                    {p.screenshots.slice(0, 3).map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`${p.title} screenshot ${i + 1}`}
                        loading="lazy"
                        className="screenshotThumb"
                        onClick={() => setLightbox({ src, alt: `${p.title} screenshot ${i + 1}` })}
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
          <span className="footerLeft">
            <span className="muted">© {new Date().getFullYear()} Nguyen Huy Truong</span>
            <a
              className="socialIcon linkedin"
              href="https://www.linkedin.com/in/huy-tr%C6%B0%E1%BB%9Dng-nguy%E1%BB%85n-b8a3652ba/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon />
            </a>
            <a className="socialIcon gmail" href="mailto:nguyenhuytruong9112k@gmail.com" aria-label="Send email">
              <GmailIcon />
            </a>
          </span>
          <span className="muted">React + TypeScript (Vite)</span>
        </div>
      </footer>

      {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />}
    </div>
  );
}
