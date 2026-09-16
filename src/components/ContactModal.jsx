import { motion, AnimatePresence } from "motion/react";

const CONTACT_OPTIONS = [
  {
    label: "Email",
    value: "kumaravelr320@gmail.com",
    href: "mailto:kumaravelr320@gmail.com",
  },
  {
    label: "Call",
    value: "+91 90474 70295",
    href: "tel:+919047470295",
  },
  {
    label: "WhatsApp",
    value: "+91 90474 70295",
    href: "https://wa.me/919047470295",
  },
];

export default function ContactModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
          />

          {/* modal card */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            className="fixed left-1/2 top-1/2 z-[70] w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-[whitesmoke]/15 bg-[#0a0a0a] p-8 text-[whitesmoke]"
          >
            <style>{`
              .serif-heading { font-family: "Fraunces", "Georgia", serif; font-weight: 600; }
            `}</style>

            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-[whitesmoke]/20 text-sm text-[whitesmoke]/60 transition-colors hover:border-[whitesmoke] hover:text-[whitesmoke]"
            >
              ✕
            </button>

            <h3 className="serif-heading text-2xl">Let's Talk</h3>
            <p className="mt-2 text-sm text-[whitesmoke]/55">
              Pick whatever's easiest — I'll get back to you quickly.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              {CONTACT_OPTIONS.map((option) => (
                <motion.a
                  key={option.label}
                  href={option.href}
                  target={option.label === "WhatsApp" ? "_blank" : undefined}
                  rel={option.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                  whileHover={{ y: -2, borderColor: "whitesmoke" }}
                  className="flex items-center justify-between rounded-2xl border border-[whitesmoke]/20 px-5 py-4 transition-colors"
                >
                  <span className="text-xs uppercase tracking-widest text-[whitesmoke]/50">
                    {option.label}
                  </span>
                  <span className="text-sm text-[whitesmoke]/85">{option.value}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}