export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  location: string;
  dates: string;
  yearLabel: string;
  logo: string;
  brandColor: string;
  logoWide?: boolean;
  logoDark?: boolean;
  isPresent?: boolean;
}

export const experience: ExperienceEntry[] = [
  {
    id: "wwc",
    role: "Software Engineer",
    company: "WWC P.C. · AiBi",
    location: "Dallas, TX",
    dates: "08/2024 – Present",
    yearLabel: "Present",
    logo: "/images/logos/wwc.png",
    brandColor: "#C4A35A",
    logoWide: true,
    logoDark: true,
    isPresent: true,
  },
  {
    id: "commscope",
    role: "Software Engineer Intern",
    company: "Commscope",
    location: "Dallas, TX",
    dates: "05/2023 – 08/2023",
    yearLabel: "2023",
    logo: "/images/logos/commscope-wordmark.svg",
    brandColor: "#231F20",
    logoWide: true,
  },
  {
    id: "utd-oit",
    role: "Student Enterprise Developer",
    company: "UT Dallas · Office of Information Technology",
    location: "Dallas, TX",
    dates: "08/2022 – 05/2023",
    yearLabel: "2022",
    logo: "/images/logos/utd-mark.svg",
    brandColor: "#F4792A",
  },
  {
    id: "ey",
    role: "Software Engineer Intern",
    company: "EY (Ernst & Young)",
    location: "Pune, India",
    dates: "04/2021 – 10/2021",
    yearLabel: "2021",
    logo: "/images/logos/ey-logo.svg",
    brandColor: "#FFE600",
  },
];
