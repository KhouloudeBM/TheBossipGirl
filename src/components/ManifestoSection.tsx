import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const manifestoLines = [
  "You were not born to blend in.",
  "You were designed to dominate.",
  "Discipline is your currency.",
  "Identity is your weapon.",
  "The old version of you is dead.",
  "Welcome to the upgrade.",
];

const ManifestoSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={ref}
      id="manifesto"
      className="relative py-[20vh] md:py-[30vh] px-6 md:px-12 grain-overlay"
    >
      <div className="mb-16">
        <span className="text-label-gold">THE MANIFESTO</span>
      </div>

      <div className="max-w-5xl space-y-4">
        {manifestoLines.map((line, i) => {
          const start = i / manifestoLines.length;
          const end = (i + 1) / manifestoLines.length;
          return (
            <ManifestoLine
              key={i}
              text={line}
              progress={scrollYProgress}
              start={start * 0.6}
              end={end * 0.6}
            />
          );
        })}
      </div>

      <div className="mt-20 flex gap-16 md:gap-24">
        <div>
          <span className="font-display text-5xl md:text-7xl tracking-tighter text-foreground">2K+</span>
          <p className="text-label text-muted-foreground mt-2">WOMEN UPGRADED</p>
        </div>
        <div>
          <span className="font-display text-5xl md:text-7xl tracking-tighter text-foreground">98%</span>
          <p className="text-label text-muted-foreground mt-2">RETENTION RATE</p>
        </div>
        <div>
          <span className="font-display text-5xl md:text-7xl tracking-tighter text-gold">∞</span>
          <p className="text-label text-muted-foreground mt-2">POTENTIAL</p>
        </div>
      </div>
    </section>
  );
};

const ManifestoLine = ({
  text,
  progress,
  start,
  end,
}: {
  text: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
}) => {
  const opacity = useTransform(progress, [start, end], [0.12, 1]);

  return (
    <motion.p
      style={{ opacity }}
      className="font-display text-3xl md:text-6xl lg:text-7xl tracking-tighter text-foreground leading-[0.95]"
    >
      {text}
    </motion.p>
  );
};

export default ManifestoSection;
