
import { motion } from "motion/react";
import ContactForm from "./ContactForm";

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

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-[#0a0a0a] text-[whitesmoke] overflow-hidden py-24 md:py-32">
      <style>{`
        .serif-heading { font-family: "Fraunces", "Georgia", serif; font-weight: 600; }
        .pill-tag { font-family: "Space Grotesk", "Inter", sans-serif; letter-spacing: 0.3em; }
      `}</style>

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]"
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d="M-50 120 Q 250 60 500 160 T 1000 130 T 1300 210" stroke="whitesmoke" strokeWidth="1" fill="none" />
        <path d="M-50 420 Q 280 350 530 450 T 1000 430 T 1300 500" stroke="whitesmoke" strokeWidth="1" fill="none" />
      </svg>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-start px-6 md:px-12 lg:px-20"
      >
        <motion.span
          variants={riseUp}
          className="pill-tag mb-8 inline-block rounded-full border border-[whitesmoke]/35 px-5 py-2.5 text-[11px] uppercase text-[whitesmoke]/70"
        >
          Contact
        </motion.span>

        <motion.h2
          variants={titleLine}
          className="serif-heading text-4xl leading-[1.12] sm:text-5xl lg:text-[3.6rem]"
        >
          <span className="block overflow-hidden">
            <motion.span variants={titleWord} className="inline-block">Let's Build</motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span variants={titleWord} className="inline-block">Something</motion.span>
          </span>
        </motion.h2>

        <motion.p
          variants={riseUp}
          className="mt-7 max-w-md text-base leading-relaxed text-[whitesmoke]/55 sm:text-lg"
        >
          Open to internships, entry-level roles, and collaborative
          projects. Reach out and I'll get back to you.
        </motion.p>

        <motion.div
          variants={riseUp}
          className="mt-12 flex w-full flex-col gap-4 sm:flex-row sm:flex-wrap"
        >
          <motion.a
            href="mailto:kumaravelr320@gmail.com"
            whileHover={{ y: -3 }}
            className="flex flex-1 min-w-[220px] items-center justify-between rounded-2xl border border-[whitesmoke]/35 px-6 py-5"
          >
            <div>
              <p className="text-[11px] uppercase tracking-widest text-[whitesmoke]/50">Email</p>
              <p className="mt-1 text-sm sm:text-base">kumaravelr320@gmail.com</p>
            </div>
          </motion.a>

          <motion.a
            href="tel:+919047470295"
            whileHover={{ y: -3 }}
            className="flex flex-1 min-w-[220px] items-center justify-between rounded-2xl border border-[whitesmoke]/35 px-6 py-5"
          >
            <div>
              <p className="text-[11px] uppercase tracking-widest text-[whitesmoke]/50">Phone</p>
              <p className="mt-1 text-sm sm:text-base">+91 90474 70295</p>
            </div>
          </motion.a>
        </motion.div>

        <ContactForm />

        <motion.div
          variants={riseUp}
          className="mt-14 flex w-full items-center gap-4 text-sm text-[whitesmoke]/50"
        >
          <span>Find me at:</span>
          <div className="flex items-center gap-3">
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
          </div>
        </motion.div>

        <motion.div
          variants={riseUp}
          className="mt-10 flex w-full items-center justify-between border-t border-[whitesmoke]/15 pt-8 text-xs uppercase tracking-widest text-[whitesmoke]/40"
        >
          <span>Tamil · English</span>
          <span>© {new Date().getFullYear()} Kumaravel R</span>
        </motion.div>
      </motion.div>
    </section>
  );
}