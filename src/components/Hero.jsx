
import { motion } from "motion/react";
import portrait from "../assets/portrait.jpg";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const riseUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const titleLine = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const titleWord = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const BADGES = [
  { label: "UI / UX Design", className: "top-4 -right-6 md:-right-10" },
  { label: "React & JavaScript", className: "top-[38%] -left-8 md:-left-16" },
  { label: "Full-Stack Dev", className: "bottom-6 -right-2 md:-right-6" },
];

export default function Hero({ onContactClick }) {
  return (
    <section className="relative w-full min-h-screen bg-[#0a0a0a] text-[whitesmoke] overflow-hidden">
      <style>{`
        .serif-heading {
          font-family: "Fraunces", "Georgia", serif;
          font-weight: 600;
        }
        .boxed-tag {
          font-family: "Space Grotesk", "Inter", sans-serif;
          letter-spacing: 0.3em;
        }
      `}</style>

      {/* decorative wavy threads, echoes the reference's background linework */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M-50 100 Q 200 50 400 150 T 900 120 T 1300 200"
          stroke="whitesmoke"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M-50 300 Q 250 220 500 320 T 1000 300 T 1300 380"
          stroke="whitesmoke"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M-50 550 Q 300 480 550 580 T 1000 560 T 1300 620"
          stroke="whitesmoke"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M-50 700 Q 200 650 450 730 T 950 700 T 1300 760"
          stroke="whitesmoke"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col-reverse items-center justify-between gap-20 px-6 py-24 md:flex-row md:gap-10 md:px-12 lg:px-20"
      >
        {/* LEFT — text content */}
        <div className="flex w-full max-w-xl flex-col items-start text-left md:w-1/2">
          <motion.h1
            variants={titleLine}
            className="serif-heading text-5xl leading-[1.12] sm:text-6xl lg:text-[4.2rem]"
          >
            <span className="block overflow-hidden">
              <motion.span variants={titleWord} className="inline-block">
                Turning Ideas
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={titleWord} className="inline-block">
                Into Working
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={titleWord} className="inline-block">
                Interfaces
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            variants={riseUp}
            className="mt-7 max-w-md text-base leading-relaxed text-[whitesmoke]/55 sm:text-lg"
          >
            I'm Kumaravel, a frontend developer who turns rough ideas into
            clean, responsive interfaces — built with care from the first
            line of code.
          </motion.p>

          <motion.button
            variants={riseUp}
            onClick={onContactClick}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 inline-flex items-center rounded-full bg-[whitesmoke] px-8 py-4 text-sm font-semibold text-[#0a0a0a]"
          >
            Let's Talk
          </motion.button>

          <motion.div
            variants={riseUp}
            className="mt-16 flex items-center gap-4 text-sm text-[whitesmoke]/50"
          >
            <span>Find me at:</span>
            <div className="flex items-center gap-3">
              {["GH", "LI", "IG"].map((label) => (
                <motion.a
                  key={label}
                  href="#"
                  whileHover={{ y: -2, borderColor: "whitesmoke", color: "whitesmoke" }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[whitesmoke]/25 text-[10px] font-semibold tracking-wide text-[whitesmoke]/60"
                >
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT — arch-framed portrait with floating skill pills */}
        <motion.div
          variants={riseUp}
          className="relative flex w-full max-w-xs items-center justify-center md:w-1/2 md:max-w-sm md:justify-end"
        >
          <div className="relative w-full max-w-[280px] sm:max-w-[320px]">
            {/* soft blob behind the arch, whitesmoke at low opacity instead of a color accent */}
            <div
              className="absolute inset-0 -z-10 translate-y-3 bg-[whitesmoke]/10"
              style={{ borderRadius: "160px 160px 24px 24px" }}
            />

            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative aspect-[3/4] w-full overflow-hidden border border-[whitesmoke]/30"
              style={{ borderRadius: "160px 160px 24px 24px" }}
            >
              <img
                src={portrait}
                alt="Kumaravel R"
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* floating skill pills, staggered in with a slight float loop */}
            {BADGES.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.85, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.7 + i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`absolute ${badge.className}`}
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3.5 + i * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                  className="whitespace-nowrap rounded-full border border-[whitesmoke]/20 bg-[#0a0a0a] px-4 py-2.5 text-xs font-medium text-[whitesmoke]/85 shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
                >
                  {badge.label}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}