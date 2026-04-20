import { Link } from "wouter";
import { Leaf, Mail, MapPin, Phone } from "lucide-react";
import { FaLinkedin, FaFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Leaf className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg text-background">Hot Beans Web</span>
            </div>
            <p className="text-sm leading-relaxed text-background/60 mb-6">
              A web development studio committed to building a greener, faster, and more
              accessible internet. We grow great developers from the ground up.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/hotbeansweb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center text-background/60 hover:bg-primary hover:text-white transition-all duration-200"
                data-testid="link-social-linkedin"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/hotbeansweb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center text-background/60 hover:bg-primary hover:text-white transition-all duration-200"
                data-testid="link-social-facebook"
                aria-label="Facebook"
              >
                <FaFacebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-background mb-4 text-sm uppercase tracking-wider">
              Careers
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/jobs", label: "Open Positions" },
                { href: "/team", label: "Meet the Team" },
                { href: "/courses", label: "Learning Resources" },
                { href: "/apply", label: "Apply Now" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-background mb-4 text-sm uppercase tracking-wider">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-background/60">
                <MapPin className="w-4 h-4 text-primary" />
                14 Shoreditch High Street, London, E1 6JJ
              </li>
              <li className="flex items-center gap-2 text-sm text-background/60">
                <Mail className="w-4 h-4 text-primary" />
                careers@hotbeansweb.co.uk
              </li>
              <li className="flex items-center gap-2 text-sm text-background/60">
                <Phone className="w-4 h-4 text-primary" />
                +44 117 496 0022
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40">
            &copy; {new Date().getFullYear()} Hot Beans Web Ltd. All rights reserved.
          </p>
          <p className="text-xs text-background/40 flex items-center gap-1">
            <Leaf className="w-3 h-3 text-primary" />
            This site runs on 100% renewable energy
          </p>
        </div>
      </div>
    </footer>
  );
}
