export type Language = "en" | "ja" | "vi";

export const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "vi", label: "Tiếng Việt", flag: "🇻🇳" },
];

export const translations = {
  en: {
    nav: {
      about: "About Me",
      projects: "Projects",
      career: "Career",
      resume: "Résumé",
    },
    intro: {
      greeting: "Hi, I'm",
      body: "I work on online multiplayer games and I am also an active player. That player perspective shapes how I think about gameplay and overall experience. I know great games are not built alone, and I am looking to work with a passionate team where I can fully contribute and grow together. My goal is to create meaningful experiences for players around the world.",
    },
    career: {
      now: "Now",
      start: "Start",
      education: "Education",
      certificates: "Certificates",
      awards: "Awards",
    },
    project: {
      downloadPlay: "Download / Play",
      github: "GitHub",
    },
    cv: {
      back: "← Back",
      title: "Résumé",
      openTab: "Open in new tab",
      downloadPdf: "Download PDF CV",
    },
    footer: {
      quote: '"Every small step shapes something great"',
    },
  },
  ja: {
    nav: {
      about: "自己紹介",
      projects: "プロジェクト",
      career: "キャリア",
      resume: "履歴書",
    },
    intro: {
      greeting: "こんにちは、",
      body: "オンラインマルチプレイヤーゲームの開発を行いながら、自らもアクティブなプレイヤーとして活動しています。プレイヤーとしての視点が、ゲームプレイや全体的な体験への考え方を形づくっています。素晴らしいゲームは一人では作れないと知っており、情熱あるチームで貢献し、共に成長できる環境を求めています。世界中のプレイヤーに意味ある体験を届けることが目標です。",
    },
    career: {
      now: "現在",
      start: "始まり",
      education: "学歴",
      certificates: "資格・認定",
      awards: "受賞・実績",
    },
    project: {
      downloadPlay: "ダウンロード / プレイ",
      github: "GitHub",
    },
    cv: {
      back: "← 戻る",
      title: "履歴書",
      openTab: "新しいタブで開く",
      downloadPdf: "PDF履歴書をダウンロード",
    },
    footer: {
      quote: "「一歩一歩が偉大なものを形づくる」",
    },
  },
  vi: {
    nav: {
      about: "Giới Thiệu",
      projects: "Dự Án",
      career: "Sự Nghiệp",
      resume: "Hồ Sơ",
    },
    intro: {
      greeting: "Xin chào, tôi là",
      body: "Tôi phát triển game nhiều người chơi trực tuyến và bản thân cũng là một game thủ tích cực. Góc nhìn người chơi ảnh hưởng đến cách tôi nghĩ về gameplay và trải nghiệm tổng thể. Tôi hiểu rằng những game hay không thể tạo ra một mình, và tôi muốn làm việc với một đội ngũ đam mê để cùng đóng góp và phát triển. Mục tiêu của tôi là tạo ra những trải nghiệm có ý nghĩa cho người chơi trên toàn thế giới.",
    },
    career: {
      now: "Hiện Tại",
      start: "Bắt Đầu",
      education: "Học Vấn",
      certificates: "Chứng Chỉ",
      awards: "Giải Thưởng",
    },
    project: {
      downloadPlay: "Tải Xuống / Chơi",
      github: "GitHub",
    },
    cv: {
      back: "← Quay Lại",
      title: "Hồ Sơ",
      openTab: "Mở Tab Mới",
      downloadPdf: "Tải CV PDF",
    },
    footer: {
      quote: '"Mỗi bước nhỏ đều tạo nên điều vĩ đại"',
    },
  },
} as const;

export type Translations = (typeof translations)[Language];

export function getInitialLanguage(): Language {
  const stored = localStorage.getItem("language") as Language | null;
  if (stored && (stored === "en" || stored === "ja" || stored === "vi")) {
    return stored;
  }
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith("ja")) return "ja";
  if (browserLang.startsWith("vi")) return "vi";
  return "en";
}

export function t(lang: Language): Translations {
  return translations[lang];
}
