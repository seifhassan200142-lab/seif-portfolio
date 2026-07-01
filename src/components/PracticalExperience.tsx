import { motion } from "framer-motion";
import { Wrench } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { site } from "../data/site";

export default function PracticalExperience() {
  return (
    <section className="relative px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="// 06 — Practical Work" title={site.practicalExperience.title} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="glass-card flex max-w-3xl items-start gap-5 rounded-2xl p-7"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet/10 text-violet-soft">
            <Wrench size={19} />
          </span>
          <div className="space-y-4 text-base leading-relaxed text-ink-muted">
            <p>{site.practicalExperience.paragraph1}</p>
            <p>{site.practicalExperience.paragraph2}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
