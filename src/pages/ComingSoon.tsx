import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import cadldLogo from "@/assets/cadld-logo.png";

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Coming Soon | Concepts and Design Learning Development";
    const meta = document.querySelector('meta[name="description"]');
    const desc = "We're launching soon. Sign up to be notified when our learning platform goes live.";
    if (meta) {
      meta.setAttribute("content", desc);
    } else {
      const tag = document.createElement("meta");
      tag.name = "description";
      tag.content = desc;
      document.head.appendChild(tag);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    toast({
      title: "You're on the list!",
      description: "We'll email you the moment we launch.",
    });
    setEmail("");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-hero-gradient flex items-center justify-center px-4 py-16">
      {/* Decorative circles */}
      <div className="absolute top-20 left-20 w-16 h-16 rounded-full border-2 border-primary-foreground/10" />
      <div className="absolute top-40 right-40 w-8 h-8 rounded-full bg-primary-foreground/10" />
      <div className="absolute bottom-40 left-1/3 w-12 h-12 rounded-full border-2 border-primary-foreground/10" />
      <div className="absolute top-32 right-1/4 w-6 h-6 rounded-full bg-primary-foreground/15" />
      <div className="absolute bottom-20 right-20 w-20 h-20 rounded-full border-2 border-primary-foreground/10" />

      <div className="relative z-10 w-full max-w-3xl text-center animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-sans font-semibold leading-tight mb-10 text-[#0c3e83] lg:text-8xl">
          Coming Soon
        </h1>

        {/* Company logo */}
        <img
          src={cadldLogo}
          alt="Concepts and Design Learning Development logo"
          className="w-full max-w-md mx-auto h-auto object-contain mb-6"
        />

        <p className="text-lg font-medium text-primary-foreground/90 max-w-xl mx-auto mb-12 md:text-xl">
          We're crafting something exceptional. In the meantime, follow us on other platforms or submit your email address below to join our mailing list for news and updates.
        </p>

        {/* Email signup */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <div className="relative flex-1">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 h-12 bg-background"
              aria-label="Email address"
            />
          </div>
          <Button type="submit" size="lg" className="h-12">
            Notify Me
          </Button>
        </form>

        <p className="mt-10 text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} Concepts and Design Learning Development
        </p>
      </div>
    </main>
  );
};

export default ComingSoon;
