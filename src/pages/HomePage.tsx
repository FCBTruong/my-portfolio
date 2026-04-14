import React from "react";
import { PROJECTS } from "../data/projects";
import {
  CAREER_AWARDS,
  CAREER_CERTIFICATES,
  CAREER_EDUCATION,
  CAREER_MILESTONES,
} from "../data/career";
import type { CareerMilestone, Theme } from "../types/portfolio";
import {
  BuildingIcon,
  CertificateIcon,
  EducationIcon,
  GitHubIcon,
  GmailIcon,
  LinkedInIcon,
  ReactLogoIcon,
  SparkIcon,
  TrophyIcon,
  TypeScriptLogoIcon,
  ViteLogoIcon,
} from "../components/icons";
import { Lightbox } from "../components/Lightbox";
import { ProjectPreview } from "../components/ProjectPreview";
import { TopbarScene } from "../components/TopbarScene";
import { ThemeToggle } from "../components/ThemeToggle";
import { MemoryGame } from "../components/MemoryGame";

type HomePageProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

type HomeTab = "about" | "projects" | "career";



export function HomePage({ theme, onToggleTheme }: HomePageProps) {
  const [lightbox, setLightbox] = React.useState<{ src: string; alt: string } | null>(null);
  const [activeTab, setActiveTab] = React.useState<HomeTab>("about");

  const switchTab = (tab: HomeTab) => {
    setActiveTab(tab);
  };
  const introText = React.useMemo(
    () =>
      "I work on online multiplayer games and I am also an active player. That player perspective shapes how I think about gameplay and overall experience. I know great games are not built alone, and I am looking to work with a passionate team where I can fully contribute and grow together. My goal is to create meaningful experiences for players around the world.",
    []
  );
  const [typedIntro, setTypedIntro] = React.useState("");
  const [isTypingPaused, setIsTypingPaused] = React.useState(false);

  React.useEffect(() => {
    const BASE_DELAY = 24;
    let index = 0;
    let timer: number | undefined;

    const tick = () => {
      setIsTypingPaused(false);
      index += 1;
      setTypedIntro(introText.slice(0, index));
      if (index >= introText.length) {
        setIsTypingPaused(false);
        return;
      }

      const ch = introText[index - 1];
      const delay = ch === "." ? 360 : ch === "," ? 140 : BASE_DELAY;
      setIsTypingPaused(delay > BASE_DELAY);
      timer = window.setTimeout(tick, delay);
    };

    timer = window.setTimeout(tick, BASE_DELAY);

    return () => {
      setIsTypingPaused(false);
      if (timer !== undefined) {
        window.clearTimeout(timer);
      }
    };
  }, [introText]);

  React.useEffect(() => {
    if (activeTab === "career" && lightbox) {
      setLightbox(null);
    }
  }, [activeTab, lightbox]);

  const careerTimelineRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (activeTab !== "career") return;
    const container = careerTimelineRef.current;
    if (!container) return;
    const items = container.querySelectorAll<HTMLElement>(".careerItem");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("careerItemVisible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeTab]);

  const renderProjectsContent = (animateOnEnter: boolean) => (
    <div className={`projectList${animateOnEnter ? " projectListReveal" : ""}`} key={animateOnEnter ? "projects-tab-animated" : "projects-tab-static"}>
      {PROJECTS.map((p) => (
        <div key={p.id} className={`projectItem${animateOnEnter ? " projectItemReveal" : ""}`}>
          <div className="projectMedia">
            <ProjectPreview title={p.title} previewMp4={p.previewMp4} previewGif={p.previewGif} youtubeUrl={p.youtubeUrl} />
          </div>

          <div className="projectInfo">
            <div className="projectTitleRow">
              <h3 className="h3">{p.title}</h3>
              {p.year ? <span className="pill year">{p.year}</span> : null}
              {p.statusLabel ? <span className="pill progress">{p.statusLabel}</span> : null}
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
  );

  const renderCareerIcon = (item: CareerMilestone) => {
    if (item.logo) {
      return <img src={item.logo} alt={item.org} className="careerLogo" />;
    }

    if (item.title === "Self Development") {
      return (
        <span className="careerLogoBadge selfDevelopment" aria-hidden="true">
          <SparkIcon />
        </span>
      );
    }

    return (
      <span className="careerLogoBadge companyFallback" aria-hidden="true">
        <BuildingIcon />
      </span>
    );
  };

  return (
    <div className="page">
      <header className="topbar">
        <TopbarScene />
        <div className="container topbarInner">
          <a className="brand" href="#/">
            <span>Portfolio</span>
          </a>

          <nav className="nav">
            <button
              type="button"
              className={`navTabBtn${activeTab === "about" ? " active" : ""}`}
              onClick={() => switchTab("about")}
            >
              About Me
              <span className="navTabUnderline" aria-hidden="true" />
            </button>
            <button
              type="button"
              className={`navTabBtn${activeTab === "projects" ? " active" : ""}`}
              onClick={() => switchTab("projects")}
            >
              Projects
              <span className="navTabUnderline" aria-hidden="true" />
            </button>
            <button
              type="button"
              className={`navTabBtn${activeTab === "career" ? " active" : ""}`}
              onClick={() => switchTab("career")}
            >
              Career
              <span className="navTabUnderline" aria-hidden="true" />
            </button>
            <a href="./NGUYEN_HUY_TRUONG_GE_VNG.pdf" download className="navLinkBtn">
              Résumé
            </a>
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </nav>
        </div>
      </header>

      <main className="container main">
        {activeTab === "about" ? (
          <section className="projects" id="top">
            <section className="intro" style={{ marginBottom: "20px" }}>
              <h1 className="h3 heroTitle">
                Hi, I'm <span className="accent">Truong</span>
              </h1>
              <p className="summary">
                {typedIntro}
                {typedIntro.length < introText.length ? <span className={`typingCursor${isTypingPaused ? " paused" : ""}`} aria-hidden="true">|</span> : null}
              </p>
            </section>

            <MemoryGame />
            {renderProjectsContent(false)}
          </section>
        ) : null}

        {activeTab === "projects" ? (
          <section id="projects" className="projects">
            {renderProjectsContent(true)}
          </section>
        ) : null}

        {activeTab === "career" ? (
          <section className="projects">
            <div className="careerTimeline" ref={careerTimelineRef} key="career-tab" aria-label="Career timeline">
              <span className="careerFlowLabel top">Now</span>
              <span className="careerFlowLabel bottom">Start</span>
              <span className="careerLine" aria-hidden="true" />

              {[...CAREER_MILESTONES].reverse().map((item, index) => (
                <div key={item.period} className="careerItem" style={{ ['--delay' as string]: `${index * 100}ms` } as React.CSSProperties}>
                  <div className="careerDateWrap">
                    <div className="careerDate">{item.period}</div>
                    <span className="careerDot" aria-hidden="true" />
                  </div>
                  <article className="careerCard">
                    {renderCareerIcon(item)}
                    <h3 className="h3 careerRole">{item.title}</h3>
                    <p className="careerOrg">{item.org}</p>
                    {item.location ? <p className="careerLocation">{item.location}</p> : null}
                    <p className="careerCardSummary">{item.summary}</p>
                    <ul className="careerHighlights">
                      {item.highlights.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </article>
                </div>
              ))}
            </div>

            <section className="careerExtras" aria-label="Education and achievements">
              <article className="careerExtraCard">
                <h3 className="h3 careerExtraTitle">
                  <EducationIcon />
                  Education
                </h3>
                <ul className="careerExtraList">
                  {CAREER_EDUCATION.map((item) => (
                    <li key={`${item.school}-${item.period}`} className="careerExtraItem">
                      <div className="careerExtraHead">
                        <p className="careerExtraMain">
                          {item.degree}
                          {item.area ? ` in ${item.area}` : ""}
                        </p>
                        <span className="careerExtraDate">{item.period}</span>
                      </div>
                      <p className="careerExtraSub">{item.school}</p>
                      {item.location ? <p className="careerExtraMeta">{item.location}</p> : null}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="careerExtraCard">
                <h3 className="h3 careerExtraTitle">
                  <CertificateIcon />
                  Certificates
                </h3>
                <ul className="careerExtraList">
                  {CAREER_CERTIFICATES.map((item) => (
                    <li key={`${item.title}-${item.date}`} className="careerExtraItem">
                      <div className="careerExtraHead">
                        <p className="careerExtraMain">{item.title}</p>
                        <span className="careerExtraDate">{item.date}</span>
                      </div>
                      <p className="careerExtraSub">{item.issuer}</p>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="careerExtraCard">
                <h3 className="h3 careerExtraTitle">
                  <TrophyIcon />
                  Awards
                </h3>
                <ul className="careerExtraList">
                  {CAREER_AWARDS.map((item) => (
                    <li key={`${item.title}-${item.date}`} className="careerExtraItem">
                      <div className="careerExtraHead">
                        <p className="careerExtraMain">{item.title}</p>
                        <span className="careerExtraDate">{item.date}</span>
                      </div>
                      {item.location ? <p className="careerExtraMeta">{item.location}</p> : null}
                    </li>
                  ))}
                </ul>
              </article>
            </section>
          </section>
        ) : null}
      </main>

      <p className="footerQuote">"Every small step shapes something great"</p>

      <footer className="footer">
        <div className="footerLandscape" aria-hidden="true">
          <span className="footerBaseAccent" />
        </div>
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
            <a
              className="socialIcon github"
              href="https://github.com/FCBTruong"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <GitHubIcon />
            </a>
          </span>
          <span className="footerStack" aria-label="Built with React, TypeScript and Vite">
            <span className="stackChip react" title="React" aria-hidden="true">
              <ReactLogoIcon />
            </span>
            <span className="stackChip ts" title="TypeScript" aria-hidden="true">
              <TypeScriptLogoIcon />
            </span>
            <span className="stackChip vite" title="Vite" aria-hidden="true">
              <ViteLogoIcon />
            </span>
          </span>
        </div>
      </footer>

      {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />}
    </div>
  );
}
