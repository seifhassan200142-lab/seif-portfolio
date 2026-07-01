import { motion } from "framer-motion";
import { Download, Mail, MessageCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import SectionHeading from "./SectionHeading";
import { site } from "../data/site";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: site.linkedin,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "Browse repositories",
    href: site.github,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: site.whatsappLabel,
    href: site.whatsapp,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <SectionHeading
          eyebrow="// 08 — Contact"
          title="Let's build something with AI"
          description={site.contactCta}
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {contactLinks.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
              className="glass-card group flex flex-col items-center gap-3 rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-cyan/30 hover:glow-cyan"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan/10 text-cyan-soft transition-colors group-hover:bg-cyan/20">
                <Icon size={20} />
              </span>

              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                  {label}
                </p>
                <p className="mt-1 text-sm font-medium text-ink">{value}</p>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          href={site.cvUrl}
          download
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan to-violet px-7 py-3.5 font-mono text-xs font-medium uppercase tracking-wider text-void transition-transform hover:scale-[1.03]"
        >
          <Download size={15} />
          Download CV
        </motion.a>
      </div>
    </section>
  );
}