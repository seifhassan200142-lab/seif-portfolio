// ---------------------------------------------------------------------------
// SITE CONFIG
// Replace the placeholder URLs below with Seif's real links before deploying.
// ---------------------------------------------------------------------------
const baseUrl = import.meta.env.BASE_URL;

const asset = (path: string) => `${baseUrl}${path.replace(/^\/+/, "")}`;

export const site = {
  name: "Seif Eldeen Hassan",
  shortName: "Seif",
  role: "AI & Machine Learning Engineer",
  profileImage: asset("profile/seif-profile.jpg"),
  subtitle:
    "Building practical AI systems with Machine Learning, RAG, LLMs, NLP, and intelligent automation.",
  badges: ["RAG Systems", "LLM Apps", "NLP", "AI Agents", "Machine Learning"],

  // TODO: replace with the real CV file. Drop it in /public and update the path.
  cvUrl: asset("cv/Seif-Eldeen-Hassan-CV.pdf"),

  // TODO: replace with real profile URLs.
  github: "https://github.com/seifhassan200142-lab",
  linkedin: "https://www.linkedin.com/in/seif-eldeen-hassan/",
  email: "seifhassan200142@gmail.com",
  whatsapp: "https://wa.me/201111883708",
  whatsappLabel: "+20 111 188 3708",

  about: {
    paragraph1:
      "I am an Electronics and Communications Engineering graduate focused on Artificial Intelligence, Machine Learning, NLP, and Generative AI. I enjoy building practical AI systems that solve real-world problems using Python, RAG pipelines, LLM applications, vector databases, backend APIs, and intelligent automation.",
    paragraph2:
      "My work includes medical RAG systems, internal document assistants, AI agents, fine-tuning pipelines, data analytics tools, and machine learning prediction projects. I am currently focused on improving my skills in production-ready AI systems, cloud AI services, MLOps, and applied generative AI.",
  },

  practicalExperience: {
    title: "Hands-on AI Projects & Practical Training",
    paragraph1:
      "Developed multiple hands-on AI and machine learning projects focused on real-world use cases, including medical RAG, document question answering, AI agents, fine-tuning, data analytics, and predictive modeling.",
    paragraph2:
      "Completed practical engineering and AI-related learning experiences through academic projects, self-driven portfolio work, and applied AI development.",
  },

  contactCta:
    "Interested in AI, RAG, LLM applications, or machine learning projects? Let's connect.",
};

