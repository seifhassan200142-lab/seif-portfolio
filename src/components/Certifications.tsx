import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { certifications } from "../data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="relative px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="// 04 — Certifications" title="Verified credentials" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
              className="glass-card flex flex-col rounded-2xl p-6 transition-colors hover:border-cyan/30"
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan/10 text-cyan-soft">
                <Award size={20} />
              </span>
              <h3 className="font-display text-base font-semibold leading-snug text-ink">
                {cert.title}
              </h3>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-ink-faint">
                {cert.issuer}
              </p>
              <div className="mt-auto flex items-center justify-between pt-6">
                <span className="text-xs text-ink-faint">{cert.date || "Date pending"}</span>
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1 font-mono text-xs text-cyan-soft hover:underline"
                  >
                    Verify
                    <ExternalLink size={12} />
                  </a>
                ) : (
                  <span className="font-mono text-xs text-ink-faint">Add link</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
