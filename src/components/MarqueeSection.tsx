const MarqueeSection = () => {
  const text = "IDENTITY · DISCIPLINE · CONFIDENCE · WEALTH · POWER · SOVEREIGNTY · ";

  return (
    <div className="py-12 border-y border-foreground/10 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex">
        <span className="font-display text-6xl md:text-8xl tracking-tighter text-foreground/10 mr-4">
          {text}{text}
        </span>
        <span className="font-display text-6xl md:text-8xl tracking-tighter text-foreground/10 mr-4">
          {text}{text}
        </span>
      </div>
    </div>
  );
};

export default MarqueeSection;
