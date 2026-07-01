import type { SkillGroup } from "../types";

export const skillGroups: SkillGroup[] = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    skills: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "NLP",
      "Computer Vision",
    ],
  },
  {
    id: "llms-rag",
    title: "LLMs & RAG",
    skills: [
      "RAG",
      "LangChain",
      "Hugging Face Transformers",
      "Prompt Engineering",
      "Vector Databases",
      "FAISS",
      "Qdrant",
      "Reranking",
      "Embeddings",
    ],
  },
  {
    id: "backend-tools",
    title: "Backend & Tools",
    skills: ["FastAPI", "Streamlit", "REST APIs", "Docker", "Git", "GitHub", "SQLite", "MLflow"],
  },
  {
    id: "cloud-ai",
    title: "Cloud & AI Platforms",
    skills: ["Azure AI", "Groq", "Ollama", "Hugging Face", "AWS AI (Learning)"],
  },
];
