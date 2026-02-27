import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border bg-foreground text-background">
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="grid gap-8 md:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="mb-4">
            <img src={logo} alt="Physio Plus Agartala" className="h-10 w-auto brightness-0 invert" />
          </div>
          <p className="text-sm opacity-70 leading-relaxed">
            Expert physiotherapy care in Agartala. Personalized, evidence-based treatment for a pain-free life.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-sm font-semibold mb-4 uppercase tracking-wider opacity-60">Quick Links</h4>
          <nav className="flex flex-col gap-2">
            {[
              { to: "/about", label: "About Us" },
              { to: "/our-team", label: "Our Experts" },
              { to: "/services", label: "Services" },
              { to: "/book-appointment", label: "Book Appointment" },
              { to: "/blog", label: "Blog" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-sm font-semibold mb-4 uppercase tracking-wider opacity-60">Contact</h4>
          <div className="flex flex-col gap-3 text-sm opacity-70">
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <span>Dhaleswar Road No. 8/9, Near Swarup Marriage Hall, Agartala, West Tripura</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              <a href="tel:+916033497168" className="hover:opacity-100">+91 60334 97168</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              <a href="mailto:physioplusagartala@gmail.com" className="hover:opacity-100">physioplusagartala@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-heading text-sm font-semibold mb-4 uppercase tracking-wider opacity-60">Working Hours</h4>
          <div className="flex flex-col gap-2 text-sm opacity-70">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0" />
              <span>Mon – Sat: 9:00 AM – 8:00 PM</span>
            </div>
            <span className="ml-6">Sunday: 10:00 AM – 2:00 PM</span>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-background/20 pt-8 md:flex-row">
        <p className="text-xs opacity-50">© {new Date().getFullYear()} Physio Plus Agartala. All rights reserved.</p>
        <div className="flex gap-4 text-xs opacity-50">
          <Link to="/privacy-policy" className="hover:opacity-100">Privacy Policy</Link>
          <Link to="/terms" className="hover:opacity-100">Terms & Conditions</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
