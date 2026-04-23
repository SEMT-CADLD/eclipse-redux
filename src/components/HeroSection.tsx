import heroIllustration from "@/assets/hero-illustration.png";
import { useState } from "react";

const HeroSection = () => {
  const [headlineLine1, setHeadlineLine1] = useState("Trusted Advisor for");
  const [headlineLine2, setHeadlineLine2] = useState("Learning Development Programs");
  return (
    <section className="relative bg-hero-gradient min-h-[90vh] flex items-center overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 left-20 w-16 h-16 rounded-full border-2 border-primary-foreground/10" />
      <div className="absolute top-40 right-40 w-8 h-8 rounded-full bg-primary-foreground/10" />
      <div className="absolute bottom-40 left-1/3 w-12 h-12 rounded-full border-2 border-primary-foreground/10" />
      <div className="absolute top-32 right-1/4 w-6 h-6 rounded-full bg-primary-foreground/15" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl leading-tight mb-6 font-sans font-semibold text-[#033668] lg:text-8xl">
              {headlineLine1}<br />{headlineLine2}
            </h1>
            <p className="text-xl leading-relaxed max-w-md mb-8 font-medium font-sans text-left text-[#ebd8fd]">
              Delivering learning projects that drive professional development and channel growth.
            </p>
          </div>
          <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <img
              src={heroIllustration}
              alt="Online learning illustration"
              width={800}
              height={640}
              className="w-full max-w-lg"
            />
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120C240 180 480 200 720 160C960 120 1200 40 1440 80V200H0V120Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
