import { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import heroImage from "@/assets/hero-main.jpg";

const HeroSection = () => {
  const [hovered, setHovered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlightX = useSpring(useTransform(mouseX, [0, 1], ["0%", "100%"]), { stiffness: 80, damping: 20 });
  const spotlightY = useSpring(useTransform(mouseY, [0, 1], ["0%", "100%"]), { stiffness: 80, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden grain-overlay"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease: [0.23, 1, 0.32, 1] }}
        className="absolute inset-0"
      >
        <img
          src={heroImage}
          alt="TheBossipGirl editorial"
          className="h-full w-full object-cover object-center transition-all duration-1000 ease-in-out"
          style={{ filter: hovered ? "grayscale(0%) contrast(105%)" : "grayscale(100%) contrast(115%)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/10 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
      </motion.div>

      {/* Mouse spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: useTransform(
            [spotlightX, spotlightY],
            ([x, y]) => `radial-gradient(600px circle at ${x} ${y}, rgba(255,255,255,0.03) 0%, transparent 70%)`
          ),
        }}
      />

      {/* Decorative vertical line right */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 2, duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
        className="absolute right-12 top-24 bottom-24 w-px bg-foreground/10 origin-top hidden md:block"
      />

      {/* Side label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 -rotate-90 hidden md:block"
      >
        <span className="text-label text-muted-foreground tracking-[0.4em]">SCROLL TO EXPLORE</span>
      </motion.div>

      {/* Hero Text */}
      <div className="relative z-10 flex h-full flex-col justify-end px-6 md:px-12 pb-[12vh]">

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-8 h-px bg-primary" />
          <span className="font-ui text-xs md:text-sm tracking-[0.35em] uppercase text-foreground/80">
            Digital Blueprints for the Elite
          </span>
        </motion.div>

        {/* Main headline */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.9, duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            className="font-display text-foreground leading-[0.82] tracking-tighter"
            style={{ fontSize: "clamp(3.5rem, 11vw, 15rem)" }}
          >
            THE UPGRADE
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 1.0, duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            className="font-display text-foreground leading-[0.82] tracking-tighter italic"
            style={{ fontSize: "clamp(3.5rem, 11vw, 15rem)" }}
          >
            IS NOT
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 1.1, duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            className="font-display text-foreground leading-[0.82] tracking-tighter"
            style={{ fontSize: "clamp(3.5rem, 11vw, 15rem)" }}
          >
            OPTIONAL
          </motion.h1>
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mt-10 flex items-center justify-between"
        >
          <div className="flex items-center gap-10">
            <a href="#arsenal" className="text-label text-foreground hover-underline group flex items-center gap-3">
              <span>EXPLORE THE ARSENAL</span>
              <motion.span
                className="inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                ↓
              </motion.span>
            </a>
            <div className="w-px h-4 bg-foreground/20 hidden md:block" />
            <span className="text-label text-muted-foreground hidden md:block">98% DISCIPLINE RETENTION</span>
          </div>

          {/* Mini stats */}
          <div className="hidden md:flex items-center gap-8">
            <div className="text-right">
              <div className="font-display text-2xl tracking-tighter text-foreground">2K+</div>
              <div className="text-label text-muted-foreground mt-0.5">WOMEN UPGRADED</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
