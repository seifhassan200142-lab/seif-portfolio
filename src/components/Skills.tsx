import { motion } from "framer-motion";
import { Boxes, Brain, Cloud, Layers } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data/skills";

const groupIcons: Record<string, typeof Brain> = {
  "ai-ml": Brain,
  "llms-rag": Layers,
  "backend-tools": Boxes,
  "cloud-ai": Cloud,
};

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="// 03 — Skills" title="Technical toolkit" />

        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = groupIcons[group.id] ?? Brain;
            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
                className="glass-card rounded-2xl p-6 transition-colors hover:border-violet/30"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet/10 text-violet-soft">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-display text-base font-semibold text-ink">
                    {group.title}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-line bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-ink-muted transition-colors hover:border-cyan/40 hover:text-cyan-soft"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
