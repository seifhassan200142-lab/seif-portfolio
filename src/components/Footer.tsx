import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-line px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="font-mono text-xs text-ink-faint">
          &copy; {new Date().getFullYear()} {site.name}. Built with React &amp; Tailwind CSS.
        </p>
        <p className="font-mono text-xs text-ink-faint">
          Designed for clarity, built for retrieval.
        </p>
      </div>
    </footer>
  );
}
