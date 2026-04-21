import React from "react";
import { navigateTo } from "../lib/navigation";
import { BuildingIcon, CertificateIcon, EducationIcon, SparkIcon, TrophyIcon } from "../components/icons";
import { TopbarScene } from "../components/TopbarScene";
import type { CareerMilestone, Theme } from "../types/portfolio";
import { ThemeToggle } from "../components/ThemeToggle";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { useLanguage } from "../contexts/LanguageContext";
import {
  CAREER_AWARDS,
  CAREER_CERTIFICATES,
  CAREER_EDUCATION,
  CAREER_MILESTONES,
} from "../data/career";

type CareerPageProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

export function CareerPage({ theme, onToggleTheme }: CareerPageProps) {
  const { tr } = useLanguage();
  const milestonesTopToBottom = [...CAREER_MILESTONES].reverse();
  const careerTimelineRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
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
  }, []);

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
    <div className="careerPage">
      <header className="topbar">
        <TopbarScene />
        <div className="container topbarInner">
          <button className="btn" onClick={() => navigateTo("#/")} type="button">
            {tr.cv.back}
          </button>

          <div className="brand">
            <span>{tr.nav.career}</span>
          </div>

          <div className="rightActions">
            <LanguageSwitcher />
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </div>
        </div>
      </header>

      <main className="container careerMain">
        <section className="careerIntro">
          <h1 className="h3 careerTitle">Career Journey</h1>
          <p className="summary careerSummary">
            A bottom-to-top flow of my path: where I started, how long I worked in each phase, and what I built along
            the way.
          </p>
        </section>

        <section className="careerTimeline" ref={careerTimelineRef} aria-label="Career timeline">
          <span className="careerFlowLabel top">{tr.career.now}</span>
          <span className="careerFlowLabel bottom">{tr.career.start}</span>
          <span className="careerLine" aria-hidden="true" />

          {milestonesTopToBottom.map((item, index) => (
            <div key={item.period} className="careerItem" style={{ ['--delay' as string]: `${index * 100}ms` } as React.CSSProperties}>
              <div className="careerDateWrap">
                <div className="careerDate">{item.period}</div>
                <span className="careerDot" aria-hidden="true" />
              </div>
              <article className="careerCard">
                {renderCareerIcon(item)}
                <h2 className="h3 careerRole">{item.title}</h2>
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
        </section>

        <section className="careerExtras" aria-label="Education and achievements">
          <article className="careerExtraCard">
            <h3 className="h3 careerExtraTitle">
              <EducationIcon />
              {tr.career.education}
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
              {tr.career.certificates}
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
              {tr.career.awards}
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
      </main>
    </div>
  );
}
