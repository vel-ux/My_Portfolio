
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ onContactClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setOpen(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "border-b border-[whitesmoke]/10 bg-[#0a0a0a]/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <style>{`
        .serif-heading { font-family: "Fraunces", "Georgia", serif; font-weight: 600; }
      `}</style>

      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 md:px-12 lg:px-20">
        <a href="#" className="serif-heading text-xl tracking-tight text-[whitesmoke]">
          KUMARAVEL R<span className="text-[whitesmoke]/40">.</span>
        </a>

        {/* desktop links */}
        <div className="hidden items-center gap-10 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative text-sm text-[whitesmoke]/65 transition-colors hover:text-[whitesmoke]"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[whitesmoke] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <button
          onClick={onContactClick}
          className="hidden rounded-full bg-[whitesmoke] px-6 py-2.5 text-sm font-semibold text-[#0a0a0a] transition-transform hover:-translate-y-0.5 md:inline-flex md:items-center"
        >
          Let's Talk
        </button>

        {/* mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[whitesmoke]/20 md:hidden"
        >
          <div className="relative h-3.5 w-4">
            <motion.span
              animate={open ? { rotate: 45, top: "50%" } : { rotate: 0, top: "0%" }}
              className="absolute left-0 top-0 h-px w-full -translate-y-1/2 bg-[whitesmoke]"
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1 }}
              className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[whitesmoke]"
            />
            <motion.span
              animate={open ? { rotate: -45, top: "50%" } : { rotate: 0, top: "100%" }}
              className="absolute left-0 top-full h-px w-full -translate-y-1/2 bg-[whitesmoke]"
            />
          </div>
        </button>
      </nav>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-[whitesmoke]/10 bg-[#0a0a0a]/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="py-3 text-base text-[whitesmoke]/70 transition-colors hover:text-[whitesmoke]"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.button
                onClick={() => {
                  handleLinkClick();
                  onContactClick();
                }}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: LINKS.length * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="mt-4 inline-flex w-fit items-center rounded-full bg-[whitesmoke] px-6 py-2.5 text-sm font-semibold text-[#0a0a0a]"
              >
                Let's Talk
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}