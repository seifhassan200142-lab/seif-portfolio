import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { publications } from "../data/education";

export default function Publications() {
  if (publications.length === 0) return null;

  return (
    <section className="relative px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="// 07 — Publications" title="Research" />

        <div className="max-w-3xl space-y-4">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
              className="glass-card flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan/10 text-cyan-soft">
                  <FileText size={18} />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold leading-snug text-ink">
                    {pub.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wider text-ink-faint">
                    {pub.venue} &middot; {pub.date}
                  </p>
                </div>
              </div>
              {pub.url ? (
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full border border-line px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-ink transition-colors hover:border-cyan/40 hover:text-cyan-soft sm:self-auto"
                >
                  View paper
                  <ExternalLink size={12} />
                </a>
              ) : (
                <span className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full border border-line/60 px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-ink-faint sm:self-auto">
                  Add DOI / IEEE link
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
