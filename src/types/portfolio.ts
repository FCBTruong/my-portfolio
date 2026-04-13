export type Project = {
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

export type Theme = "light" | "dark";

export type Route = "home" | "cv";
