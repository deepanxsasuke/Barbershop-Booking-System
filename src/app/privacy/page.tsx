import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Star Saloon A/C",
  description: "Privacy Policy for Star Saloon A/C Master Ananth Barber Shop.",
};

export default function PrivacyPage() {
  return (
    <div className="pb-32 md:pb-24 px-6 max-w-[900px] mx-auto w-full pt-12">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-3">
          Star Saloon A/C Protection
        </p>
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
          Privacy Policy
        </h1>
        <p className="font-montserrat text-sm text-white/60">
          Last Updated: July 2026 • Master Barber Ananth
        </p>
      </div>

      {/* Main Document Content */}
      <div className="glassmorphism rounded-3xl p-8 md:p-12 border border-white/10 space-y-8 font-montserrat text-white/80 leading-relaxed">
        <section>
          <h2 className="font-playfair text-2xl font-bold text-primary mb-3">
            1. Information We Collect
          </h2>
          <p className="text-sm text-white/70">
            When you schedule an appointment with Star Saloon A/C, we collect basic contact information such as your name 
            and phone number. This information is purely used to format and send your appointment booking request to 
            Master Ananth via WhatsApp.
          </p>
        </section>

        <section>
          <h2 className="font-playfair text-2xl font-bold text-primary mb-3">
            2. How Your Data Is Used
          </h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-white/70">
            <li>To confirm appointment slots and communicate schedule changes.</li>
            <li>To provide personalized grooming consultations with Master Ananth.</li>
            <li>To ensure smooth check-in when you arrive at our shop.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-playfair text-2xl font-bold text-primary mb-3">
            3. Data Sharing & Security
          </h2>
          <p className="text-sm text-white/70">
            We respect your privacy completely. Your phone number and name are never sold, rented, or shared 
            with third-party advertisers. All booking communication is encrypted end-to-end via official WhatsApp channels.
          </p>
        </section>

        <section>
          <h2 className="font-playfair text-2xl font-bold text-primary mb-3">
            4. Local Storage & Preferences
          </h2>
          <p className="text-sm text-white/70">
            Our web application uses browser Local Storage to save your past appointment history locally on your device 
            so you can track your preferred services and visits seamlessly.
          </p>
        </section>

        <section>
          <h2 className="font-playfair text-2xl font-bold text-primary mb-3">
            5. Contact Us
          </h2>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-sm">
            <p className="font-semibold text-white">Star Saloon A/C — Master Ananth Barber Shop</p>
            <p className="text-white/70 mt-1">100 Ft Road, Anna Nagar 2nd Street (Nearby Kalyani Car Pattarai)</p>
            <p className="text-primary font-bold mt-2">WhatsApp / Call: +91 90473 18761</p>
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
