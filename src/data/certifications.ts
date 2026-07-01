import type { Certification } from "../types";

// TODO: add the real "date earned" and credential / verification URL for each.
export const certifications: Certification[] = [
  {
    id: "azure-ai-fundamentals",
    title: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "2026",
    credentialUrl: "https://learn.microsoft.com/api/credentials/share/en-us/SeifEldeen-5936/34E9EF2223B803AB?sharingId=A94DB43A1F4B7D40",
  },
  {
    id: "ms-ai-skills-fest",
    title: "Microsoft AI Skills Fest Achievement",
    issuer: "Microsoft",
    date: "2026",
    credentialUrl: "https://www.credly.com/badges/f647133d-1c5e-4d93-a888-14eed57d42a2/public_url",
  },
  {
    id: "aws-agentic-ai",
    title: "AWS Agentic AI Demonstrated",
    issuer: "AWS",
    date: "2026",
    credentialUrl: "https://www.credly.com/badges/89e981c1-9c40-44f7-90ae-27994bcff927/public_url",
  },
];
