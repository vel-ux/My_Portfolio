import { useState } from "react";
import { motion } from "motion/react";

// Replace with your own Formspree endpoint.
// Get it from https://formspree.io -> New Form -> copy the endpoint URL.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/your_form_id";

const riseUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <motion.form
      variants={riseUp}
      onSubmit={handleSubmit}
      className="mt-12 flex w-full flex-col gap-4"
    >
      <style>{`
        .contact-input {
          font-family: "Space Grotesk", "Inter", sans-serif;
        }
        .contact-input::placeholder { color: rgba(245, 245, 245, 0.45); }
      `}</style>

      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          name="name"
          required
          placeholder="Your name"
          className="contact-input rounded-2xl border border-[whitesmoke]/35 bg-transparent px-5 py-4 text-sm text-[whitesmoke] outline-none transition-colors focus:border-[whitesmoke]/60"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your email"
          className="contact-input rounded-2xl border border-[whitesmoke]/35 bg-transparent px-5 py-4 text-sm text-[whitesmoke] outline-none transition-colors focus:border-[whitesmoke]/60"
        />
      </div>

      <textarea
        name="message"
        required
        rows={5}
        placeholder="What are you thinking of building?"
        className="contact-input resize-none rounded-2xl border border-[whitesmoke]/35 bg-transparent px-5 py-4 text-sm text-[whitesmoke] outline-none transition-colors focus:border-[whitesmoke]/60"
      />

      <motion.button
        type="submit"
        disabled={status === "sending"}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.97 }}
        className="mt-2 inline-flex w-fit items-center rounded-full bg-[whitesmoke] px-8 py-4 text-sm font-semibold text-[#0a0a0a] disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </motion.button>

      {status === "success" && (
        <p className="text-sm text-[whitesmoke]/70">
          Thanks — your message is in. I'll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400/80">
          Something went wrong. Try again, or email me directly.
        </p>
      )}
    </motion.form>
  );
}