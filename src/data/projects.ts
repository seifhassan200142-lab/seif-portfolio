import type { Project } from "../types";

// ---------------------------------------------------------------------------
// PROJECTS
// To add a screenshot: drop an image in /public/projects/ and set `image`
// to its path, e.g. "/projects/nabd-ai.png". Update githubUrl / liveUrl
// with the real repository and demo links.
// ---------------------------------------------------------------------------

export const projects: Project[] = [
  {
    id: "nabd-ai",
    title: "Nabd AI — Medical RAG & Hospital AI Assistant",
    image: "/projects/nabd-ai-cover.png",
    imageAlt: "Nabd AI project cover showing medical RAG workflow",
    description:
      "A healthcare AI assistant designed to support medical workflows using Arabic input, guardrails, query mapping, hybrid retrieval, RAG, citations, and doctor-reviewed AI outputs.",
    problem:
      "Medical teams need safe, grounded, and well-documented AI assistance that supports their workflow without replacing clinicians.",
    solution:
      "Nabd AI uses guardrails, medical query mapping, hybrid retrieval, reranking, grounded generation, and citations to support healthcare workflows as a draft layer with doctor review.",
    techStack: [
      "Python",
      "FastAPI",
      "Qdrant",
      "LangChain",
      "Hugging Face",
      "Sentence Transformers",
      "CrossEncoder",
      "Groq / LLaMA",
      "RAG",
      "BM25",
      "Reranking",
    ],
    githubUrl: "https://github.com/seifhassan200142-lab/Medical_RAG_SYS",
    liveUrl: "https://seifhassan200142-nabd-healthos-demo.hf.space",
    featured: true,
  },
  {
    id: "internal-docs-rag",
    title: "Internal Docs RAG Assistant",
    image: "/projects/internal-docs-rag-cover.png",
    imageAlt: "Internal Docs RAG Assistant project cover showing document question answering workflow",
    description:
      "A production-style RAG assistant that allows users to upload internal documents and ask questions with grounded answers and citations.",
    techStack: [
      "Python",
      "FastAPI",
      "Streamlit",
      "FAISS",
      "Qdrant",
      "Sentence Transformers",
      "RAG",
      "Hybrid Search",
      "Reranking",
    ],
    githubUrl: "https://github.com/seifhassan200142-lab/internal-docs-rag-assistant",
    liveUrl: "",
  },
  {
    id: "ai-operations-agent",
    title: "AI Operations Agent",
    image: "/projects/ai-operations-agent-cover.png",
    imageAlt: "AI Operations Agent project cover showing tool calling and approval workflow",
    description:
      "An AI operations assistant that understands requests, selects tools, executes multi-step workflows, summarizes tickets, drafts emails, uses a calculator, interacts with a local database, and requires human approval before sensitive actions.",
    techStack: [
      "Python",
      "FastAPI",
      "SQLite",
      "Tool Calling",
      "AI Agents",
      "Human Approval Workflow",
    ],
    githubUrl: "https://github.com/seifhassan200142-lab/ai-operations-agent",
    liveUrl: "",
  },
  {
    id: "domain-lora-finetuning",
    title: "Domain LoRA Fine-tuning Pipeline",
    image: "/projects/domain-lora-finetuning-cover.png",
    imageAlt: "Domain LoRA Fine-tuning Pipeline project cover showing training workflow",
    description:
      "A lightweight educational fine-tuning pipeline for adapting a small open-source language model to structured customer support response formatting.",
    techStack: ["Python", "Hugging Face", "PEFT", "LoRA", "Transformers", "Datasets"],
    githubUrl: "https://github.com/seifhassan200142-lab/Domain-LoRA-Fine-tuning-Pipeline",
    liveUrl: "",
  },
  {
    id: "talk-to-your-data",
    title: "Talk to Your Data",
    image: "/projects/talk-to-your-data-cover.png",
    imageAlt: "Talk to Your Data project cover showing analytics assistant workflow",
    description:
      "A local analytics assistant that lets users query tabular data, generate insights, explore dashboards, and interact with data using natural language.",
    techStack: ["Python", "Streamlit", "DuckDB", "FAISS", "Plotly", "Ollama", "Sentence Transformers"],
    githubUrl: "https://github.com/seifhassan200142-lab/Talk_To_Your_Data",
    liveUrl: "",
  },
  {
    id: "real-estate-price-prediction",
    title: "Real Estate Price Prediction",
    image: "/projects/real-estate-price-prediction-cover.png",
    imageAlt: "Real Estate Price Prediction project cover showing machine learning regression workflow",
    description:
      "A machine learning regression project for predicting real estate prices in Egypt using cleaned listing data, feature engineering, and model evaluation.",
    techStack: ["Python", "Pandas", "Scikit-learn", "Regression", "Data Cleaning", "Feature Engineering"],
    githubUrl: "https://github.com/seifhassan200142-lab/real-estate-price-prediction",
    liveUrl: "",
  },
];
