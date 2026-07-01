import { motion } from "framer-motion";
import { Cpu, GitBranch, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { site } from "../data/site";

const focusPoints = [
  {
    icon: Cpu,
    label: "Core focus",
    value: "RAG pipelines, LLM applications & NLP",
  },
  {
    icon: GitBranch,
    label: "Engineering base",
    value: "Electronics & Communications Engineering",
  },
  {
    icon: Sparkles,
    label: "Currently learning",
    value: "MLOps, cloud AI services & production systems",
  },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="// 01 — About" title="From signal processing to language models" />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-5 text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            <p>{site.about.paragraph1}</p>
            <p>{site.about.paragraph2}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="space-y-3"
          >
            {focusPoints.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="glass-card flex items-start gap-4 rounded-2xl p-5 transition-colors hover:border-cyan/30"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan/10 text-cyan-soft">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                    {label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-ink">{value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
