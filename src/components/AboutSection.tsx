import { Check } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              We help students reach their full potential
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              In the history of modern astronomy, there is probably no one greater
              leap forward than the building and launch of the space telescope
              known as the Hubble. During its deployment in 1990, the Hubble gave us 
              an unprecedented view of the cosmos.
            </p>
            <ul className="space-y-3">
              {["Expert instructors with real-world experience", "Flexible learning schedules", "Industry-recognized certifications", "Hands-on projects and assignments"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="w-full aspect-square bg-accent rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-gradient mb-2">10+</div>
                <p className="text-muted-foreground font-medium">Years of Experience</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
