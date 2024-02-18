interface MarqueeProps {
  children: React.ReactNode;
  speed: "Slow" | "Medium" | "Fast";
}

const Marquee: React.FC<MarqueeProps> = ({ children, speed }) => {
  function animateSpeed() {
    if (speed === "Slow") {
      return "animate-marqueeSlow";
    }
    if (speed === "Medium") {
      return "animate-marqueeMedium";
    }
    if (speed === "Fast") {
      return "animate-marqueeFast";
    }
    return "animate-marquee";
  }

  return (
    <div className="overflow-x-hidden border border-white">
      <div className={`flex gap-4 ${animateSpeed()} whitespace-nowrap`}>
        {children}
      </div>
    </div>
  );
};

export default Marquee;
