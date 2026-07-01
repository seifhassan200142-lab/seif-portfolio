import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, MessageCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { site } from "../data/site";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-20 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 -z-0 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/10 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 bottom-0 -z-0 h-[420px] w-[420px] rounded-full bg-violet/10 blur-[140px]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]"
      >
        <div>
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-panel/60 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-cyan-soft"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse-node" />
            Open to entry-level AI / ML roles
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            {site.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="text-gradient mt-3 font-display text-xl font-medium sm:text-2xl"
          >
            {site.role}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            {site.subtitle}
          </motion.p>

          <motion.ul variants={item} className="mt-8 flex flex-wrap gap-2">
            {site.badges.map((badge) => (
              <li
                key={badge}
                className="rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs text-ink-muted"
              >
                {badge}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan to-violet px-6 py-3 font-mono text-xs font-medium uppercase tracking-wider text-void transition-transform hover:scale-[1.03]"
            >
              View Projects
            </a>
            <a
              href={site.cvUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/60 px-6 py-3 font-mono text-xs uppercase tracking-wider text-ink transition-colors hover:border-cyan/40 hover:text-cyan-soft"
            >
              <Download size={14} />
              Download CV
            </a>
            <div className="flex items-center gap-2">
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub profile"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink-muted transition-colors hover:border-cyan/40 hover:text-cyan-soft"
              >
                <GithubIcon size={17} />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn profile"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink-muted transition-colors hover:border-cyan/40 hover:text-cyan-soft"
              >
                <LinkedinIcon size={17} />
              </a>
              <a
                href="#contact"
                aria-label="Contact me"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink-muted transition-colors hover:border-cyan/40 hover:text-cyan-soft"
              >
                <Mail size={17} />
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Contact me on WhatsApp"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink-muted transition-colors hover:border-cyan/40 hover:text-cyan-soft"
              >
                <MessageCircle size={17} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div variants={item} className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan/20 via-violet/20 to-transparent blur-2xl" />
          <div className="glass-card relative overflow-hidden rounded-[2rem] p-2">
            <img
              src={site.profileImage}
              alt="Seif Eldeen Hassan profile photo"
              className="aspect-square w-full rounded-[1.5rem] object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-6 rounded-2xl border border-cyan/20 bg-void/80 px-4 py-3 backdrop-blur-xl">
            <p className="font-mono text-[10px] uppercase tracking-wider text-cyan-soft">
              AI Portfolio
            </p>
            <p className="mt-1 text-sm text-ink-muted">Projects • RAG • LLMs • ML</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 text-ink-faint transition-colors hover:text-cyan-soft sm:flex"
      >
        <ArrowDown size={18} className="animate-bounce" />
      </motion.a>
    </section>
  );
}