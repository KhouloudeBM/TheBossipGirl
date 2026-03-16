import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "MANIFESTO", href: "#manifesto" },
  { label: "THE ARSENAL", href: "#arsenal" },
  { label: "INNER CIRCLE", href: "#circle" },
  { label: "CONTACT", href: "#contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6">
        <a href="#" className="font-display text-xl tracking-tight text-foreground">
          THEBOSSIPGIRL
        </a>
        <button
          onClick={() => setIsOpen(true)}
          className="text-label text-foreground hover-underline cursor-pointer"
        >
          [ MENU ]
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-[100] bg-background grain-overlay flex flex-col justify-center items-center"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 md:right-12 text-label text-foreground hover-underline cursor-pointer"
            >
              [ CLOSE ]
            </button>

            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 + i * 0.08,
                    duration: 0.6,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  className="font-display text-5xl md:text-7xl tracking-tighter text-foreground hover-underline"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-8 text-label text-muted-foreground"
            >
              EST. 2024 — THEBOSSIPGIRL.COM
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
