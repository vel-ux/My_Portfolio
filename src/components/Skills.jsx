
import { motion } from "motion/react";

const SKILL_GROUPS = [
  { title: "Frontend Development", skills: ["HTML", "CSS", "JavaScript", "React JS", "Bootstrap"] },
  { title: "Tools & Version Control", skills: ["Git", "GitHub", "VS Code"] },
  { title: "Core Skills", skills: ["Communication", "Leadership", "Problem Solving"] },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
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

const tagStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-[#0a0a0a] text-[whitesmoke] overflow-hidden py-24 md:py-32">
   
      <style>{`
        .serif-heading { font-family: "Fraunces", "Georgia", serif; font-weight: 600; }
        .pill-tag { font-family: "Space Grotesk", "Inter", sans-serif; letter-spacing: 0.3em; }
      `}</style>

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d="M-50 150 Q 250 90 480 190 T 950 160 T 1300 240" stroke="whitesmoke" strokeWidth="1" fill="none" />
        <path d="M-50 420 Q 280 350 520 450 T 1000 430 T 1300 500" stroke="whitesmoke" strokeWidth="1" fill="none" />
      </svg>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start px-6 md:px-12 lg:px-20"
      >
        <motion.span
          variants={riseUp}
          className="pill-tag mb-8 inline-block rounded-full border border-[whitesmoke]/25 px-5 py-2.5 text-[11px] uppercase text-[whitesmoke]/70"
        >
          Skills
        </motion.span>

        <motion.h2
          variants={titleLine}
          className="serif-heading text-4xl leading-[1.12] sm:text-5xl lg:text-[3.6rem]"
        >
          <span className="block overflow-hidden">
            <motion.span variants={titleWord} className="inline-block">What I</motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span variants={titleWord} className="inline-block">Work With</motion.span>
          </span>
        </motion.h2>

        <div className="mt-14 grid w-full grid-cols-1 gap-12 md:grid-cols-3">
          {SKILL_GROUPS.map((group) => (
            <motion.div key={group.title} variants={riseUp}>
              <h3 className="mb-5 text-xs uppercase tracking-wider text-[whitesmoke]/50">
                {group.title}
              </h3>
              <motion.div
                variants={tagStagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="flex flex-wrap gap-3"
              >
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={riseUp}
                    whileHover={{ y: -3, borderColor: "whitesmoke" }}
                    className="rounded-full border border-[whitesmoke]/20 px-5 py-2.5 text-xs uppercase tracking-widest text-[whitesmoke]/70 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}