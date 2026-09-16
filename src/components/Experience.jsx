
import { motion } from "motion/react";

const TIMELINE = [
  {
    date: "July 2026",
    title: "Full Stack Development Intern",
    org: "EDU TANTR",
    desc: "Completed a hands-on offline internship covering front-end, back-end, database management, and RESTful APIs. Applied learning to build a scalable, secure, user-friendly web application.",
  },
  {
    date: "2023 — 2027",
    title: "B.E. Computer Science and Engineering",
    org: "Annai Vailankanni College of Engineering",
    desc: "Currently pursuing my degree with a CGPA of 8.28.",
  },
  {
    date: "2022 — 2023",
    title: "Higher Secondary (HSC-II)",
    org: "N.V.C. Govt. Hr. Sec. School",
    desc: "Completed higher secondary education with 72.7%.",
  },
];

const CERTS = [
  "Full Stack Development Offline Internship Certificate — EDU TANTR",
  "Certificate of Participation, Career Advancement Program — EDU TANTR",
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

export default function Experience() {
  return (
   <section id="experience" className="relative w-full bg-[#0a0a0a] text-[whitesmoke] overflow-hidden py-24 md:py-32">
      <style>{`
        .serif-heading { font-family: "Fraunces", "Georgia", serif; font-weight: 600; }
        .pill-tag { font-family: "Space Grotesk", "Inter", sans-serif; letter-spacing: 0.3em; }
      `}</style>

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]"
        viewBox="0 0 1200 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d="M-50 100 Q 250 40 500 140 T 1000 110 T 1300 190" stroke="whitesmoke" strokeWidth="1" fill="none" />
        <path d="M-50 500 Q 280 430 530 530 T 1000 510 T 1300 580" stroke="whitesmoke" strokeWidth="1" fill="none" />
      </svg>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-start px-6 md:px-12 lg:px-20"
      >
        <motion.span
          variants={riseUp}
          className="pill-tag mb-8 inline-block rounded-full border border-[whitesmoke]/25 px-5 py-2.5 text-[11px] uppercase text-[whitesmoke]/70"
        >
          Experience
        </motion.span>

        <motion.h2
          variants={titleLine}
          className="serif-heading text-4xl leading-[1.12] sm:text-5xl lg:text-[3.6rem]"
        >
          <span className="block overflow-hidden">
            <motion.span variants={titleWord} className="inline-block">Where I've</motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span variants={titleWord} className="inline-block">Been</motion.span>
          </span>
        </motion.h2>

        <div className="relative mt-16 w-full">
          <div className="absolute left-0 top-2 h-[calc(100%-1rem)] w-px bg-[whitesmoke]/15 sm:left-[140px]" />

          <div className="flex flex-col gap-12">
            {TIMELINE.map((item) => (
              <motion.div
                key={item.title}
                variants={riseUp}
                className="relative flex flex-col gap-2 pl-8 sm:flex-row sm:gap-10 sm:pl-0"
              >
                <div className="shrink-0 sm:w-[140px]">
                  <span className="text-xs uppercase tracking-widest text-[whitesmoke]/50">
                    {item.date}
                  </span>
                </div>
                <div className="absolute -left-[3px] top-1.5 h-2 w-2 rounded-full bg-[whitesmoke] sm:left-[136px]" />
                <div className="flex-1 rounded-2xl border border-[whitesmoke]/10 p-6">
                  <h3 className="serif-heading text-lg sm:text-xl">{item.title}</h3>
                  <p className="mt-1 text-sm text-[whitesmoke]/50">{item.org}</p>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-[whitesmoke]/60">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div variants={riseUp} className="mt-20 w-full border-t border-[whitesmoke]/15 pt-10">
          <h3 className="mb-6 text-xs uppercase tracking-wider text-[whitesmoke]/50">
            Certifications
          </h3>
          <div className="flex flex-col gap-3">
            {CERTS.map((cert) => (
              <div
                key={cert}
                className="rounded-2xl border border-[whitesmoke]/20 px-6 py-4 text-sm text-[whitesmoke]/70"
              >
                {cert}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}