import type {
    CareerAward,
    CareerCertificate,
    CareerEducation,
    CareerMilestone,
} from "../types/portfolio";

const baseUrl = import.meta.env.BASE_URL;
const asset = (p: string) => `${baseUrl}${p.replace(/^\/+/, "")}`;

export const CAREER_MILESTONES: CareerMilestone[] = [
    {
        period: "May 2020 - Aug 2020",
        title: "Intern",
        org: "Onesoft - Monster Studio",
        location: "Ha Noi, Viet Nam",
        logo: asset("/company/onesoft.png"),
        summary:
            "Gained hands-on experience building puzzle game mechanics and interactive features using Unity.",
        highlights: [
            "Developed puzzle game projects using Unity game engine.",
            "Implemented core game mechanics and gameplay systems.",
            "Collaborated with team on game design and prototyping.",
        ],
    },
    {
        period: "Aug 2020 - Nov 2020",
        title: "Intern",
        org: "Early Start - Monkey Junior",
        location: "Ha Noi, Viet Nam",
        logo: asset("/company/monkeyjunior.png"),
        summary:
            "Continued game development experience with Unity, focusing on gameplay systems, performance, and user experience.",
        highlights: [
            "Developed puzzle game features and gameplay mechanics using Unity.",
            "Optimized game performance, responsiveness, and user experience.",
            "Participated in the full development cycle from feature design to deployment.",
        ],
    },
    {
        period: "Nov 2020 - Sep 2024",
        title: "Software Engineer",
        org: "VNG - ZingPlay Studios",
        location: "Ha Noi, Viet Nam",
        logo: asset("/company/vng.png"),
        summary:
            "This was the starting point of my professional game development journey, focused on live online products.",
        highlights: [
            "Built and maintained core gameplay, UI, and online systems for large-scale titles.",
            "Developed metagame features, including events, shop flows, and payment-related features.",
            "Collaborated with artists, designers, PMs, and engineers to brainstorm, develop, and deliver game features.",
            "Integrated third-party services such as Firebase, CDN, SDKs, and log tracking tools.",
            "Debugged production issues, fixed bugs, refactored code, and built tools to support live game operations.",
            "Analyzed player behavior to improve gameplay, UI, and overall player experience.",
            "Reduced recurring client crashes by 25% through production debugging and root-cause fixes.",
        ],
    },
    {
        period: "Oct 2024 - Oct 2025",
        title: "Backend Developer III",
        org: "VIET NAM DIGITAL TECHNOLOGY AND INVESTMENT JOINT STOCK COMPANY",
        location: "Ha Noi, Viet Nam",
        summary:
            "Expanded into backend and infrastructure-heavy work to strengthen reliability and delivery speed.",
        highlights: [
            "Built scalable backend and data platforms providing shared services for multiple teams.",
            "Designed and operated reliable distributed systems with FastAPI, PostgreSQL, Docker, and Kubernetes.",
            "Developed large-scale ETL workflows and Airflow-based data pipelines.",
            "Improved delivery efficiency through CI/CD, automation, and production workflow optimization.",
            "Mentored engineers and led backend/platform development from design to production.",
        ]
    },
    {
        period: "Nov 2025 - Present",
        title: "Self Development",
        org: "Independent Learning & Project Building",
        location: "Ha Noi, Viet Nam",
        summary:
            "Focused on personal growth through building projects, deepening Unreal Engine 5 skills, improving English communication, and sharpening system thinking.",
        highlights: [
            "Built personal game projects to practice end-to-end architecture and execution.",
            "Improved Unreal Engine 5 proficiency through regular prototyping and technical experimentation.",
            "Researched AI tools and applied them to optimize workflows and automate repetitive tasks.",
            "Improved English communication for technical discussions and documentation.",
            "Strengthened system thinking by designing scalable gameplay and backend flows.",
        ],
    },
];

export const CAREER_EDUCATION: CareerEducation[] = [
    {
        school: "University of Engineering and Technology (VNU)",
        degree: "Bachelor",
        area: "Software Engineering",
        period: "Aug 2018 - Dec 2023",
        location: "Ha Noi, Viet Nam",
    },
];

export const CAREER_CERTIFICATES: CareerCertificate[] = [
    {
        title: "IELTS 7.5",
        issuer: "British Council",
        date: "2025",
    },
];

export const CAREER_AWARDS: CareerAward[] = [
    {
        title: "Third Prize Chess Province",
        location: "Nghe An, Viet Nam",
        date: "2018",
    },
];
