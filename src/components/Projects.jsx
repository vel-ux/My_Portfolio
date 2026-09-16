
import { motion } from "motion/react";

const PROJECTS = [
  {
    title: "Portfolio Website",
    desc: "A personal portfolio to showcase skills, projects, certifications, and my continuous learning journey as an aspiring software developer interested in web development, SQL, and DevOps.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "Calculator App",
    desc: "A simple, responsive calculator performing basic arithmetic operations with a clean, user-friendly interface. Strengthened my skills in input handling, logical operations, and error handling.",
    tags: ["JavaScript", "HTML", "CSS"],
  },
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

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-[#0a0a0a] text-[whitesmoke] overflow-hidden py-24 md:py-32">
      <style>{`
        .serif-heading { font-family: "Fraunces", "Georgia", serif; font-weight: 600; }
        .pill-tag { font-family: "Space Grotesk", "Inter", sans-serif; letter-spacing: 0.3em; }
      `}</style>

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]"
        viewBox="0 0 1200 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d="M-50 130 Q 260 60 520 160 T 1000 130 T 1300 210" stroke="whitesmoke" strokeWidth="1" fill="none" />
        <path d="M-50 550 Q 300 470 560 570 T 1000 550 T 1300 620" stroke="whitesmoke" strokeWidth="1" fill="none" />
      </svg>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start px-6 md:px-12 lg:px-20"
      >
        <motion.span
          variants={riseUp}
          className="pill-tag mb-8 inline-block rounded-full border border-[whitesmoke]/25 px-5 py-2.5 text-[11px] uppercase text-[whitesmoke]/70"
        >
          Projects
        </motion.span>

        <motion.h2
          variants={titleLine}
          className="serif-heading text-4xl leading-[1.12] sm:text-5xl lg:text-[3.6rem]"
        >
          <span className="block overflow-hidden">
            <motion.span variants={titleWord} className="inline-block">Things I've</motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span variants={titleWord} className="inline-block">Built</motion.span>
          </span>
        </motion.h2>

        <div className="mt-16 grid w-full grid-cols-1 gap-8 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <motion.div key={project.title} variants={riseUp} className="group relative">
              <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 rounded-3xl bg-[whitesmoke]/5 transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3" />
              <div className="relative rounded-3xl border border-[whitesmoke]/25 bg-[#0a0a0a] p-8">
                <span className="serif-heading text-5xl text-[whitesmoke]/10">
                  0{i + 1}
                </span>
                <h3 className="serif-heading mt-4 text-2xl">{project.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[whitesmoke]/60">
                  {project.desc}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[whitesmoke]/20 px-4 py-1.5 text-[11px] uppercase tracking-widest text-[whitesmoke]/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}