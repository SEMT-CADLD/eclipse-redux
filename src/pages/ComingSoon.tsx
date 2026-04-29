import { useEffect, useState } from "react";
import { Mail, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const LinkedinFull = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/>
  </svg>
);
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
        {/* Company logo */}
        <img
          src={cadldLogo}
          alt="Concepts and Design Learning Development logo"
          className="w-full max-w-md mx-auto h-auto object-contain mb-10"
        />

        <h1 className="text-5xl md:text-7xl font-sans font-semibold leading-tight mb-6 text-[#0c3e83] lg:text-8xl">
          Coming Soon
        </h1>

        <p className="text-lg font-medium text-primary-foreground/90 max-w-xl mx-auto mb-8 md:text-xl">
          We're crafting something exceptional. In the meantime, follow us on LinkedIn for news and updates.
        </p>

        {/* Social media links */}
        <div className="flex items-center justify-center gap-4 mb-10">
          {[
            // Temporarily hidden — re-enable by setting hidden: false
            { Icon: Facebook, label: "Facebook", href: "#", hidden: true },
            { Icon: Instagram, label: "Instagram", href: "#", hidden: true },
            { Icon: LinkedinFull, label: "LinkedIn", href: "https://www.linkedin.com/company/conceptsanddesign", hidden: false },
            { Icon: Youtube, label: "YouTube", href: "#", hidden: true },
          ].filter(({ hidden }) => !hidden).map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-20 h-20 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground flex items-center justify-center transition-colors opacity-100"
            >
              <Icon className="w-10 h-10" />
            </a>
          ))}
        </div>

        {/* Email signup — temporarily hidden */}
        <form
          onSubmit={handleSubmit}
          className="hidden flex-col sm:flex-row gap-3 max-w-md mx-auto"
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
