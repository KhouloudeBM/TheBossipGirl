const MarqueeSection = () => {
  const text = "IDENTITY · DISCIPLINE · CONFIDENCE · WEALTH · POWER · SOVEREIGNTY · ";

  return (
    <div className="py-8 border-y border-foreground/10 overflow-hidden">
      {/* Row 1 — left to right */}
      <div className="animate-marquee whitespace-nowrap flex mb-3">
        <span className="font-display text-6xl md:text-8xl tracking-tighter text-foreground mr-4">
          {text}{text}
        </span>
        <span className="font-display text-6xl md:text-8xl tracking-tighter text-foreground mr-4">
          {text}{text}
        </span>
      </div>
      {/* Row 2 — right to left, muted */}
      <div className="animate-marquee-reverse whitespace-nowrap flex">
        <span className="font-display text-4xl md:text-5xl tracking-tighter text-foreground/25 italic mr-4">
          {text}{text}
        </span>
        <span className="font-display text-4xl md:text-5xl tracking-tighter text-foreground/25 italic mr-4">
          {text}{text}
        </span>
      </div>
    </div>
  );
};

export default MarqueeSection;
