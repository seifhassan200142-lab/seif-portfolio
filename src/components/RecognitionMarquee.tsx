import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { recognitions } from "../data/recognitions";

export default function RecognitionMarquee() {
  const duplicated = [...recognitions, ...recognitions];

  return (
    <section id="recognition" className="relative overflow-hidden px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="// Recognition"
          title="Learning, certifications & technical ecosystem"
          description="A snapshot of the organizations, platforms, and technical communities connected to my education, certifications, learning journey, and engineering activities."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mt-10 overflow-hidden rounded-3xl border border-line bg-panel/30 py-6"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-void to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-void to-transparent" />

          <div className="marquee-track flex w-max items-center gap-5">
            {duplicated.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="group flex h-24 min-w-[190px] items-center justify-center rounded-2xl border border-line bg-white/[0.025] px-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/30 hover:bg-white/[0.04]"
                title={item.label}
              >
                <img
                  src={item.logo}
                  alt={`${item.name} logo`}
                  loading="lazy"
                  className="max-h-12 max-w-[140px] object-contain opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </motion.div>

        <p className="mx-auto mt-5 max-w-3xl text-center text-xs leading-relaxed text-ink-faint">
          Logos are shown to represent education, certifications, learning platforms,
          technical communities, and recognition context — not employment, partnership,
          or client relationships.
        </p>
      </div>
    </section>
  );
}