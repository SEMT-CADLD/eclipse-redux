import { Check } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-semibold uppercase tracking-widest mb-4 block text-[#2576da] text-2xl font-sans">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-[#0c3e83]">
              ​Tagline that grabs attention ─
            </h2>
            <p className="leading-relaxed mb-8 text-[#0c3e83] text-lg font-sans">
              The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. 
            </p>
            <ul className="space-y-3">
              {["This is here for info at a glance.", "This is here for info at a glance.", "This is here for info at a glance.", "This is here for info at a glance."].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <span className="text-base font-sans">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative w-full rounded-2xl overflow-hidden bg-accent flex items-center justify-center">
            <img
              src="/be15b946-0e47-4153-8fb5-7efa7947fc72.jpg"
              alt="About us"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
