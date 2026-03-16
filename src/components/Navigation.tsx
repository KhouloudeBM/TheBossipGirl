import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const navLinks = [
  { label: "MANIFESTO", href: "#manifesto" },
  { label: "THE ARSENAL", href: "#arsenal" },
  { label: "INNER CIRCLE", href: "#circle" },
  { label: "CONTACT", href: "#contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="scroll-progress w-full"
        style={{ scaleX }}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 transition-all duration-700 ${
          scrolled ? "backdrop-blur-md bg-background/60 border-b border-foreground/5" : ""
        }`}
      >
        <motion.a
          href="#"
          className="font-display text-xl tracking-tight text-foreground"
          whileHover={{ letterSpacing: "0.08em" }}
          transition={{ duration: 0.4 }}
        >
          THEBOSSIPGIRL
        </motion.a>

        <button
          onClick={() => setIsOpen(true)}
          className="text-label text-foreground hover-underline cursor-none group flex items-center gap-3"
        >
          <span className="flex flex-col gap-[5px] w-5">
            <span className="block h-px bg-foreground transition-all duration-300 group-hover:w-3/4" />
            <span className="block h-px bg-foreground" />
            <span className="block h-px bg-foreground transition-all duration-300 group-hover:w-1/2" />
          </span>
          [ MENU ]
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-[100] bg-background grain-overlay flex flex-col justify-center items-center"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 md:right-12 text-label text-foreground hover-underline cursor-none"
            >
              [ CLOSE ]
            </button>

            {/* Decorative vertical lines */}
            <div className="absolute left-12 top-0 bottom-0 w-px bg-foreground/5" />
            <div className="absolute right-12 top-0 bottom-0 w-px bg-foreground/5" />

            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <div key={link.label} className="overflow-hidden">
                  <motion.a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{
                      delay: 0.1 + i * 0.07,
                      duration: 0.6,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                    className="font-display text-5xl md:text-8xl tracking-tighter text-foreground hover-underline block"
                    whileHover={{ x: 12 }}
                  >
                    <span className="text-label-gold mr-4 align-middle">0{i + 1}</span>
                    {link.label}
                  </motion.a>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-8 left-0 right-0 flex justify-between px-12 text-label text-muted-foreground"
            >
              <span>EST. 2024</span>
              <span>THEBOSSIPGIRL.COM</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
