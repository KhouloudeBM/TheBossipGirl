import { motion } from "framer-motion";
import { useState } from "react";

const InnerCircleSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="circle"
      className="relative py-[20vh] md:py-[30vh] px-6 md:px-12 grain-overlay"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-label-gold"
        >
          APPLICATION ONLY
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="font-display text-5xl md:text-8xl tracking-tighter text-foreground mt-6 leading-[0.85]"
        >
          THE INNER
          <br />
          <span className="italic">CIRCLE</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-label text-muted-foreground mt-8 max-w-md mx-auto leading-relaxed normal-case tracking-normal"
        >
          Early access to new blueprints. Private resources. Intelligence briefings on wealth, identity, and power. This is not a newsletter — it&apos;s an application.
        </motion.p>

        {!submitted ? (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col sm:flex-row gap-0 max-w-lg mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="YOUR EMAIL ADDRESS"
              required
              className="flex-1 bg-secondary border border-foreground/10 px-6 py-4 text-label text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <button
              type="submit"
              className="bg-crimson px-8 py-4 text-label text-foreground hover:opacity-90 transition-opacity cursor-pointer"
            >
              APPLY NOW
            </button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12"
          >
            <p className="font-display text-2xl text-gold italic">
              You&apos;re in. Welcome to the circle.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default InnerCircleSection;
