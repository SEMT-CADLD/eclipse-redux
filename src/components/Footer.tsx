import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-background mb-4">Eclipse</h3>
            <p className="text-sm leading-relaxed text-background/60">
              The best online learning platform to boost your skills and advance your career.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["About", "Courses", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-background/60 hover:text-background transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-background mb-4">Courses</h4>
            <ul className="space-y-2 text-sm">
              {["Web Development", "UI/UX Design", "Data Science", "Marketing"].map((course) => (
                <li key={course}>
                  <a href="#courses" className="text-background/60 hover:text-background transition-colors">
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-background mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-background/60">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                123 Learning St, Education City
              </li>
              <li className="flex items-center gap-2 text-background/60">
                <Phone className="w-4 h-4 flex-shrink-0" />
                +1 234 567 890
              </li>
              <li className="flex items-center gap-2 text-background/60">
                <Mail className="w-4 h-4 flex-shrink-0" />
                info@eclipse.edu
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm text-background/40">
          © 2026 Eclipse. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
