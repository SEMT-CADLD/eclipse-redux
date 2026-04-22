import { Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks: { label: string; to: string }[] = [
  { label: "HOME", to: "/" },
  { label: "ABOUT", to: "/#about" },
  { label: "COURSES", to: "/courses" },
  { label: "PAGES", to: "/" },
  { label: "BLOG", to: "/" },
  { label: "CONTACTS", to: "/" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-5 px-4">
        
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="font-medium transition-colors uppercase tracking-wider text-base text-[#031e45]"
            >
              {link.label}
            </Link>
          ))}
          <button className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            <Search className="w-4 h-4 text-[#031e45]" />
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-current" />
            <span className="block w-6 h-0.5 bg-current" />
            <span className="block w-6 h-0.5 bg-current" />
          </div>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-primary/95 backdrop-blur-sm px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="block py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground uppercase tracking-wider"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
