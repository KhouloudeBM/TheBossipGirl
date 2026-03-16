import { motion } from "framer-motion";
import heroImage from "@/assets/hero-main.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden grain-overlay">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.23, 1, 0.32, 1] }}
        className="absolute inset-0"
      >
        <img
          src={heroImage}
          alt="TheBossipGirl editorial"
          className="h-full w-full object-cover"
          style={{ filter: "grayscale(100%) contrast(110%)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
      </motion.div>

      {/* Hero Text */}
      <div className="relative z-10 flex h-full flex-col justify-end px-6 md:px-12 pb-[15vh]">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-label-gold mb-6"
        >
          DIGITAL BLUEPRINTS FOR THE ELITE
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="font-display text-foreground leading-[0.85] tracking-tighter"
          style={{ fontSize: "clamp(3rem, 10vw, 14rem)" }}
        >
          THE UPGRADE
          <br />
          <span className="italic">IS NOT</span>
          <br />
          OPTIONAL
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-10 flex items-center gap-12"
        >
          <a href="#arsenal" className="text-label text-foreground hover-underline">
            EXPLORE THE ARSENAL ↓
          </a>
          <span className="text-label text-muted-foreground">
            98% DISCIPLINE RETENTION
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
