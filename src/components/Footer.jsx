
import { motion } from "motion/react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const riseUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-[whitesmoke]/10 bg-[#0a0a0a] text-[whitesmoke] overflow-hidden">
      <style>{`
        .serif-heading { font-family: "Fraunces", "Georgia", serif; font-weight: 600; }
      `}</style>

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
        viewBox="0 0 1200 400"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d="M-50 80 Q 250 20 500 110 T 1000 90 T 1300 150" stroke="whitesmoke" strokeWidth="1" fill="none" />
      </svg>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-16 md:px-12 lg:px-20"
      >
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <motion.a
            variants={riseUp}
            href="#"
            className="serif-heading text-2xl tracking-tight text-[whitesmoke]"
          >
            Kumaravel<span className="text-[whitesmoke]/40">.</span>
          </motion.a>

          <motion.nav variants={riseUp} className="flex flex-wrap items-center gap-6">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[whitesmoke]/60 transition-colors hover:text-[whitesmoke]"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>

          <motion.div variants={riseUp} className="flex items-center gap-3">
            {[
              { label: "GH", href: "#" }, // <- add your GitHub profile URL
              { label: "LI", href: "https://www.linkedin.com/in/kumaravel-r-190125308" },
              { label: "IG", href: "#" }, // <- add your Instagram profile URL
            ].map(({ label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, borderColor: "whitesmoke", color: "whitesmoke" }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[whitesmoke]/25 text-[10px] font-semibold tracking-wide text-[whitesmoke]/60"
              >
                {label}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={riseUp}
          className="flex flex-col items-start justify-between gap-3 border-t border-[whitesmoke]/10 pt-8 text-xs uppercase tracking-widest text-[whitesmoke]/40 sm:flex-row sm:items-center"
        >
          <span>© {new Date().getFullYear()} Kumaravel R. All rights reserved.</span>
          <span>Built with React &amp; Tailwind</span>
        </motion.div>
      </motion.div>
    </footer>
  );
}