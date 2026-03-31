import { BookOpen, Trophy, BookMarked } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "New Classes",
    description: "In the history of modern astronomy, there is probably no one greater leap forward.",
  },
  {
    icon: Trophy,
    title: "Top Courses",
    description: "In the history of modern astronomy, there is probably no one greater leap forward.",
  },
  {
    icon: BookMarked,
    title: "Full E-Books",
    description: "In the history of modern astronomy, there is probably no one greater leap forward.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex gap-4 p-6 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex-shrink-0">
                <feature.icon className="w-10 h-10 text-primary/40 group-hover:text-primary transition-colors" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
