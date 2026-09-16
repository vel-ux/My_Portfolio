import { motion } from "motion/react";
import aboutPortrait from "../assets/about-portrait.jpeg";

const STATS = [
  { value: "8.28", label: "Current CGPA" },
  { value: "2027", label: "Graduating Year" },
  { value: "2", label: "Languages Spoken" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const riseUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const titleLine = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const titleWord = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0a0a0a] text-[whitesmoke] overflow-hidden py-24 md:py-32">
      <style>{`
        .serif-heading { font-family: "Fraunces", "Georgia", serif; font-weight: 600; }
        .pill-tag { font-family: "Space Grotesk", "Inter", sans-serif; letter-spacing: 0.3em; }
        .stat-number { font-family: "Fraunces", "Georgia", serif; font-weight: 600; }
      `}</style>

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d="M-50 120 Q 200 60 400 160 T 900 130 T 1300 210" stroke="whitesmoke" strokeWidth="1" fill="none" />
        <path d="M-50 350 Q 250 270 500 370 T 1000 350 T 1300 430" stroke="whitesmoke" strokeWidth="1" fill="none" />
        <path d="M-50 600 Q 300 530 550 630 T 1000 610 T 1300 670" stroke="whitesmoke" strokeWidth="1" fill="none" />
      </svg>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-16 px-6 md:flex-row md:gap-16 md:px-12 lg:px-20"
      >
        {/* LEFT — arch-framed image */}
        <motion.div
          variants={riseUp}
          className="relative flex w-full max-w-xs items-center justify-center md:w-2/5 md:max-w-sm md:justify-start"
        >
          <div className="relative w-full max-w-[280px] sm:max-w-[320px]">
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
                src={aboutPortrait}
                alt="About Kumaravel"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT — text content */}
        <div className="flex w-full max-w-xl flex-col items-start text-left md:w-3/5">
          <motion.span
            variants={riseUp}
            className="pill-tag mb-8 inline-block rounded-full border border-[whitesmoke]/25 px-5 py-2.5 text-[11px] uppercase text-[whitesmoke]/70"
          >
            About
          </motion.span>

          <motion.h2
            variants={titleLine}
            className="serif-heading text-4xl leading-[1.12] sm:text-5xl lg:text-[3.6rem]"
          >
            <span className="block overflow-hidden">
              <motion.span variants={titleWord} className="inline-block">Who I</motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={titleWord} className="inline-block">Am</motion.span>
            </span>
          </motion.h2>

          <motion.p
            variants={riseUp}
            className="mt-7 max-w-lg text-base leading-relaxed text-[whitesmoke]/55 sm:text-lg"
          >
            I'm a Computer Science and Engineering student at Annai
            Vailankanni College of Engineering, currently maintaining an
            8.28 CGPA while building a strong foundation in web development.
            I recently completed a full-stack development internship at
            EDU TANTR, working hands-on across front-end, back-end, and
            database layers.
          </motion.p>

          <motion.p
            variants={riseUp}
            className="mt-4 max-w-lg text-base leading-relaxed text-[whitesmoke]/55 sm:text-lg"
          >
            I'm motivated, hardworking, and always looking to learn from
            people ahead of me in the field — right now I'm deepening my
            skills in SQL and DevOps alongside front-end work with React.
          </motion.p>

          <motion.div
            variants={riseUp}
            className="mt-10 grid w-full grid-cols-3 gap-4 rounded-2xl border border-[whitesmoke]/15 px-6 py-8"
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-start">
                <span className="stat-number text-3xl sm:text-4xl">{stat.value}</span>
                <span className="mt-1 text-xs uppercase tracking-wider text-[whitesmoke]/50">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}