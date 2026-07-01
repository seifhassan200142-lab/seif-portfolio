import { motion } from "framer-motion";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import { GithubIcon } from "./icons";
import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        ease: "easeOut",
        delay: (index % 3) * 0.08,
      }}
      className="glass-card group flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan/30 hover:glow-cyan"
    >
      <div className="relative aspect-video flex items-center justify-center overflow-hidden border-b border-line bg-gradient-to-br from-panel via-deep to-panel">
        {project.image ? (
          <img
            src={project.image}
            alt={project.imageAlt ?? project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <>
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />
            <div className="relative flex flex-col items-center gap-2 text-ink-faint">
              <ImageIcon size={22} strokeWidth={1.5} />
              <span className="font-mono text-[10px] uppercase tracking-wider">
                Add screenshot
              </span>
            </div>
          </>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-ink">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          {project.description}
        </p>

        {(project.problem || project.solution) && (
          <div className="mt-5 space-y-3 rounded-xl border border-line bg-white/[0.02] p-4">
            {project.problem && (
              <div className="flex gap-3">
                <span className="mt-0.5 shrink-0 font-mono text-[10px] uppercase tracking-wider text-violet-soft">
                  Problem
                </span>
                <p className="text-xs leading-relaxed text-ink-muted">
                  {project.problem}
                </p>
              </div>
            )}

            {project.solution && (
              <div className="flex gap-3 border-t border-line/70 pt-3">
                <span className="mt-0.5 shrink-0 font-mono text-[10px] uppercase tracking-wider text-cyan-soft">
                  Solution
                </span>
                <p className="text-xs leading-relaxed text-ink-muted">
                  {project.solution}
                </p>
              </div>
            )}
          </div>
        )}

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-line bg-white/[0.02] px-2.5 py-1 font-mono text-[10px] text-ink-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center gap-3 pt-8">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-ink transition-colors hover:border-cyan/40 hover:text-cyan-soft"
          >
            <GithubIcon size={13} />
            Code
          </a>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-cyan to-violet px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-void transition-transform hover:scale-[1.03]"
            >
              Live demo
              <ArrowUpRight size={13} />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line/60 px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-ink-faint">
              Demo coming soon
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}