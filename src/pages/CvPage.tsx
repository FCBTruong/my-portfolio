import { navigateTo } from "../lib/navigation";
import { TopbarScene } from "../components/TopbarScene";
import type { Theme } from "../types/portfolio";
import { ThemeToggle } from "../components/ThemeToggle";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { useLanguage } from "../contexts/LanguageContext";
import resumeData from "../data/game-developer-new.json";

type CvPageProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

type LinkField = { url?: string; label?: string };
type BaseItem = { id: string; hidden?: boolean; description?: string; website?: LinkField };
type ExperienceItem = BaseItem & { company?: string; position?: string; location?: string; period?: string };
type EducationItem = BaseItem & { school?: string; degree?: string; area?: string; period?: string };
type ProjectItem = BaseItem & { name?: string; period?: string };
type CertItem = BaseItem & { title?: string; issuer?: string; date?: string };

type ResumeData = {
  basics: {
    name: string;
    headline: string;
    email?: string;
    location?: string;
    customFields?: Array<{ id: string; text: string; link: string }>;
  };
  summary: { title: string; hidden?: boolean; content?: string };
  sections: {
    experience: { title: string; hidden?: boolean; items: ExperienceItem[] };
    projects: { title: string; hidden?: boolean; items: ProjectItem[] };
    education: { title: string; hidden?: boolean; items: EducationItem[] };
    certifications: { title: string; hidden?: boolean; items: CertItem[] };
  };
  customSections: Array<{
    id: string;
    title: string;
    hidden?: boolean;
    items: ExperienceItem[];
  }>;
};

function visibleItems<T extends { hidden?: boolean }>(items: T[]): T[] {
  return items.filter((item) => !item.hidden);
}

function HtmlBlock({ value }: { value?: string }) {
  if (!value) return null;
  return <div className="cvHtml" dangerouslySetInnerHTML={{ __html: value }} />;
}

export function CvPage({ theme, onToggleTheme }: CvPageProps) {
  const { tr } = useLanguage();
  const resumePdfUrl = `${import.meta.env.BASE_URL}NGUYEN_HUY_TRUONG_GE_VNG.pdf`;
  const data = resumeData as ResumeData;
  const techStack = data.customSections.find((section) => section.title.toLowerCase().includes("tech") && !section.hidden);

  return (
    <div className="cvPage">
      <header className="topbar">
        <TopbarScene />
        <div className="container topbarInner">
          <button className="btn" onClick={() => navigateTo("#/")} type="button">
            {tr.cv.back}
          </button>

          <div className="brand">
            <span>{tr.cv.title}</span>
          </div>

          <div className="rightActions">
            <LanguageSwitcher />
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <a className="btn primary" href={resumePdfUrl} download>
              {tr.cv.downloadPdf}
            </a>
          </div>
        </div>
      </header>

      <main className="container cvMain">
        <section className="cvHeroCard">
          <h1 className="cvHeroName">{data.basics.name}</h1>
          <p className="cvHeroHeadline">{data.basics.headline}</p>
          <div className="cvHeroMeta">
            {data.basics.email ? <a href={`mailto:${data.basics.email}`}>{data.basics.email}</a> : null}
            {data.basics.location ? <span>{data.basics.location}</span> : null}
            {data.basics.customFields?.map((field) => (
              <a key={field.id} href={field.link} target="_blank" rel="noreferrer">
                {field.text}
              </a>
            ))}
          </div>
        </section>

        {!data.summary.hidden ? (
          <section className="cvSectionCard">
            <h2 className="cvSectionHeading">{data.summary.title}</h2>
            <HtmlBlock value={data.summary.content} />
          </section>
        ) : null}

        {!data.sections.experience.hidden && visibleItems(data.sections.experience.items).length ? (
          <section className="cvSectionCard">
            <h2 className="cvSectionHeading">{data.sections.experience.title}</h2>
            <div className="cvList">
              {visibleItems(data.sections.experience.items).map((item) => (
                <article key={item.id} className="cvItemCard">
                  <div className="cvItemTop">
                    <h3>{item.position || item.company}</h3>
                    {item.period ? <span className="cvItemPeriod">{item.period}</span> : null}
                  </div>
                  <p className="cvItemSub">
                    {item.company}
                    {item.location ? ` · ${item.location}` : ""}
                  </p>
                  <HtmlBlock value={item.description} />
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {!data.sections.projects.hidden && visibleItems(data.sections.projects.items).length ? (
          <section className="cvSectionCard">
            <h2 className="cvSectionHeading">{data.sections.projects.title}</h2>
            <div className="cvList cvGrid2">
              {visibleItems(data.sections.projects.items).map((item) => (
                <article key={item.id} className="cvItemCard">
                  <div className="cvItemTop">
                    <h3>{item.name}</h3>
                    {item.period ? <span className="cvItemPeriod">{item.period}</span> : null}
                  </div>
                  {item.website?.url ? (
                    <a className="cvItemLink" href={item.website.url} target="_blank" rel="noreferrer">
                      {item.website.label || item.website.url}
                    </a>
                  ) : null}
                  <HtmlBlock value={item.description} />
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {techStack && visibleItems(techStack.items).length ? (
          <section className="cvSectionCard">
            <h2 className="cvSectionHeading">{techStack.title}</h2>
            <div className="cvList cvGrid2">
              {visibleItems(techStack.items).map((item) => (
                <article key={item.id} className="cvItemCard">
                  <h3>{item.company}</h3>
                  <HtmlBlock value={item.description} />
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {!data.sections.education.hidden && visibleItems(data.sections.education.items).length ? (
          <section className="cvSectionCard">
            <h2 className="cvSectionHeading">{data.sections.education.title}</h2>
            <div className="cvList">
              {visibleItems(data.sections.education.items).map((item) => (
                <article key={item.id} className="cvItemCard">
                  <div className="cvItemTop">
                    <h3>{item.school}</h3>
                    {item.period ? <span className="cvItemPeriod">{item.period}</span> : null}
                  </div>
                  <p className="cvItemSub">
                    {item.degree}
                    {item.area ? ` · ${item.area}` : ""}
                  </p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {!data.sections.certifications.hidden && visibleItems(data.sections.certifications.items).length ? (
          <section className="cvSectionCard">
            <h2 className="cvSectionHeading">{data.sections.certifications.title}</h2>
            <div className="cvList">
              {visibleItems(data.sections.certifications.items).map((item) => (
                <article key={item.id} className="cvItemCard">
                  <div className="cvItemTop">
                    <h3>{item.title}</h3>
                    {item.date ? <span className="cvItemPeriod">{item.date}</span> : null}
                  </div>
                  <p className="cvItemSub">{item.issuer}</p>
                </article>
              ))}
            </div>
          </section>
        ) : null}
      </main>
    </div>
  );
}
