import type { EducationItem, Publication } from "../types";

export const education: EducationItem[] = [
  {
    id: "ecsc-degree",
    degree: "Bachelor of Engineering in Electronics and Communications Engineering",
    institution: "Institute of Aviation Engineering and Technology, Egypt",
    detail: "Grade: Excellent with Honors",
    date: "2023",
  },
  {
    id: "german-recognition",
    degree: "Academic Degree Recognition",
    institution: "German-recognized academic degree equivalency",
    detail: "Recognized for German degree equivalency",
    date: "2026",
  },
  {
    id: "azure-ai-fundamentals-edu",
    degree: "Microsoft Certified: Azure AI Fundamentals",
    institution: "Microsoft",
    detail: "Additional credential",
    date: "",
  },
];

export const publications: Publication[] = [
  {
    id: "digital-twin-cav",
    title:
      "Digital Twin Simulations for Connected and Automated Vehicles: A Comprehensive Study",
    venue: "IEEE Xplore",
    date: "2023",
    // TODO: add the real DOI / IEEE Xplore link.
    url: "https://ieeexplore.ieee.org/document/10319570",
  },
];
