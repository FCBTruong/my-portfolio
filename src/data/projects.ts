import type { Project } from "../types/portfolio";

const baseUrl = import.meta.env.BASE_URL;
const asset = (p: string) => `${baseUrl}${p.replace(/^\/+/, "")}`;

export const PROJECTS: Project[] = [
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
