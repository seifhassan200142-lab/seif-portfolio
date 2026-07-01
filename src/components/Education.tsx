import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education } from "../data/education";

export default function Education() {
  return (
    <section id="education" className="relative px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="// 05 — Education" title="Academic foundation" />

        <div className="relative max-w-3xl">
          <div
            aria-hidden="true"
            className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan/50 via-violet/40 to-transparent"
          />
          <ol className="space-y-8">
            {education.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                className="relative flex gap-5 pl-0"
              >
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan/40 bg-deep text-cyan-soft">
                  <GraduationCap size={17} />
                </span>
                <div className="glass-card flex-1 rounded-2xl p-5">
                  <h3 className="font-display text-base font-semibold leading-snug text-ink">
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-sm text-ink-muted">{item.institution}</p>
                  {item.detail && (
                    <p className="mt-2 font-mono text-xs uppercase tracking-wider text-cyan-soft">
                      {item.detail}
                    </p>
                  )}
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
