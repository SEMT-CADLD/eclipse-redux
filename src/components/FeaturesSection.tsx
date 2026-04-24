import { BookOpen, Trophy, BookMarked } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "TBD",
    description: "The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.",
  },
  {
    icon: Trophy,
    title: "TBD",
    description: "The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.",
  },
  {
    icon: BookMarked,
    title: "TBD",
    description: "The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title + index}
              className="flex gap-4 p-6 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex-shrink-0">
                <feature.icon className="w-10 h-10 text-primary/40 group-hover:text-primary transition-colors" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="mb-2 font-semibold font-sans text-[#2576da] text-2xl">{feature.title}</h3>
                <p className="leading-relaxed text-base font-sans font-medium text-[#0c3e83]">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
