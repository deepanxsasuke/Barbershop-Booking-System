import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Star Saloon A/C",
  description: "Terms of Service and Store Rules for Star Saloon A/C Master Ananth Barber Shop.",
};

export default function TermsPage() {
  return (
    <div className="pb-32 md:pb-24 px-6 max-w-[900px] mx-auto w-full pt-12">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-3">
          Star Saloon A/C Policies
        </p>
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
          Terms of Service
        </h1>
        <p className="font-montserrat text-sm text-white/60">
          Last Updated: July 2026 • Master Barber Ananth
        </p>
      </div>

      {/* Main Document Content */}
      <div className="glassmorphism rounded-3xl p-8 md:p-12 border border-white/10 space-y-8 font-montserrat text-white/80 leading-relaxed">
        <section>
          <h2 className="font-playfair text-2xl font-bold text-primary mb-3">
            1. Appointment & Booking Policy
          </h2>
          <p className="text-sm text-white/70">
            Appointments at Star Saloon A/C can be booked online via our website or directly through WhatsApp. 
            Please ensure you arrive 5 minutes before your scheduled time slot so Master Ananth can deliver the best quality service without delay.
          </p>
        </section>

        <section>
          <h2 className="font-playfair text-2xl font-bold text-primary mb-3">
            2. Shop Timing & Break Hours
          </h2>
          <p className="text-sm text-white/70 mb-3">
            Our daily operating hours and slot timings are strictly followed as below:
          </p>
          <div className="bg-[#121317] p-5 rounded-2xl border border-white/5 space-y-2 text-xs">
            <div className="flex justify-between py-1 border-b border-white/5">
              <span className="text-white font-semibold">Morning Session:</span>
              <span className="text-primary font-bold">8:00 AM – 11:00 AM</span>
            </div>
            <div className="flex justify-between py-1 border-b border-white/5 text-amber-400">
              <span className="font-semibold">Morning Break:</span>
              <span>11:00 AM – 12:00 PM</span>
            </div>
            <div className="flex justify-between py-1 border-b border-white/5">
              <span className="text-white font-semibold">Afternoon Session:</span>
              <span className="text-primary font-bold">12:00 PM – 3:00 PM</span>
            </div>
            <div className="flex justify-between py-1 border-b border-white/5 text-amber-400">
              <span className="font-semibold">Afternoon Break:</span>
              <span>3:00 PM – 5:00 PM</span>
            </div>
            <div className="flex justify-between py-1 border-b border-white/5">
              <span className="text-white font-semibold">Evening Session:</span>
              <span className="text-primary font-bold">5:00 PM – 8:00 PM</span>
            </div>
            <div className="flex justify-between py-1 text-red-400 font-bold">
              <span>Closing Time:</span>
              <span>8:00 PM</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-playfair text-2xl font-bold text-primary mb-3">
            3. Pricing & Services
          </h2>
          <p className="text-sm text-white/70">
            All prices listed on our website are transparent and fixed in Indian Rupees (₹). 
            Any add-on treatment requested during the session will be charged accordingly as per our active rate menu.
          </p>
        </section>

        <section>
          <h2 className="font-playfair text-2xl font-bold text-primary mb-3">
            4. Hygiene & Safety Standards
          </h2>
          <p className="text-sm text-white/70">
            We adhere to strict hygiene protocols. All razor blades are 100% single-use and disposable. 
            Tools, capes, and chairs are sanitized after every single customer.
          </p>
        </section>

        <section>
          <h2 className="font-playfair text-2xl font-bold text-primary mb-3">
            5. Store Location & Contact
          </h2>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-sm">
            <p className="font-semibold text-white">Star Saloon A/C — Master Ananth</p>
            <p className="text-white/70 mt-1">100 Ft Road, Anna Nagar 2nd Street (Nearby Kalyani Car Pattarai)</p>
            <p className="text-primary font-bold mt-2">Phone: +91 90473 18761</p>
          </div>
        </section>

        <div className="pt-6 border-t border-white/10 flex justify-between items-center">
          <Link href="/" className="text-primary font-semibold text-sm hover:underline flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Home
          </Link>
          <Link href="/book" className="bg-primary text-[#0a0a0a] font-bold px-6 py-2.5 rounded-lg text-xs uppercase tracking-wider hover:opacity-90">
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
