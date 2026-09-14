export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  location: string;
  dates: string;
  yearLabel: string;
  logo: string;
  brandColor: string;
  logoWide?: boolean;
}

export const education: EducationEntry[] = [
  {
    id: "utd-ms",
    degree: "Master of Science in Information Technology",
    institution: "The University of Texas at Dallas",
    location: "Dallas, TX",
    dates: "05/2024",
    yearLabel: "2024",
    logo: "/images/logos/utd-mark.svg",
    brandColor: "#F4792A",
  },
  {
    id: "vnit-btech",
    degree: "Bachelor of Technology in Computer Engineering",
    institution: "Visvesvaraya National Institute of Technology",
    location: "Nagpur, India",
    dates: "05/2022",
    yearLabel: "2022",
    logo: "/images/logos/vnit.jpg",
    brandColor: "#8B1E3F",
  },
];
