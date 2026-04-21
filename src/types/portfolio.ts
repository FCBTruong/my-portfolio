export type Project = {
  id: string;
  title: string;
  role?: string;
  year?: number;
  statusLabel?: string;
  description: string;
  tech?: string[];
  previewMp4?: string;
  previewGif?: string;
  youtubeUrl?: string;
  githubUrl?: string;
  downloadUrl?: string;
  screenshots?: string[];
};

export type CareerMilestone = {
  period: string;
  title: string;
  org: string;
  location?: string;
  logo?: string;
  summary: string;
  highlights: string[];
};

export type CareerEducation = {
  school: string;
  degree: string;
  area?: string;
  period: string;
  location?: string;
};

export type CareerCertificate = {
  title: string;
  issuer: string;
  date: string;
};

export type CareerAward = {
  title: string;
  location?: string;
  date: string;
};

export type Theme = "light" | "dark";

export type Language = "en" | "ja" | "vi";

export type Route = "home" | "cv" | "career";
