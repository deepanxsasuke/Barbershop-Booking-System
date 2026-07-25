import Link from "next/link";

export function Footer() {
  return (
    <footer id="contact" className="mt-auto border-t border-white/5 bg-[#0a0a0a] pt-16 pb-24 md:pb-8">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary text-2xl">content_cut</span>
              <span className="font-playfair text-3xl font-bold text-gradient-gold">Star Saloon A/C</span>
            </div>
            <p className="text-sm text-white/50 font-montserrat max-w-sm leading-relaxed">
              Exclusivity, Meticulous Detail, and Cinematic Elegance. We provide
              premium grooming services tailored for the individual.
            </p>
            <div className="flex gap-3 mt-6">
              {["instagram", "twitter", "facebook"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-10 h-10 rounded-full glassmorphism flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/30 transition-all text-sm font-montserrat font-bold uppercase"
                >
                  {s[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-montserrat font-bold text-white mb-6 uppercase tracking-widest text-xs">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-white/50 font-montserrat">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/book" className="hover:text-primary transition-colors">Book Appointment</Link></li>
              <li><Link href="/#contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-montserrat font-bold text-white mb-6 uppercase tracking-widest text-xs">
              Contact & Hours
            </h4>
            <ul className="space-y-4 text-sm text-white/50 font-montserrat">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-base mt-0.5">location_on</span>
                <span>100 Ft Road, Anna Nagar 2nd Street<br /><span className="text-primary/80 font-medium">(Nearby Kalyani Car Pattarai)</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-base mt-0.5">schedule</span>
                <div>
                  <span className="text-white font-medium">8:00 AM – 8:00 PM</span>
                  <p className="text-xs text-white/40 mt-0.5">Breaks: 11AM-12PM & 3PM-5PM</p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-base">phone</span>
                +91 90473 18761
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 font-montserrat">
          <span>© {new Date().getFullYear()} Star Saloon A/C — Master Ananth Barber Shop. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
