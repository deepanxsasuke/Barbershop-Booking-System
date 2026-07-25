import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] w-full flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Cinematic luxury barber shop interior"
            className="w-full h-full object-cover opacity-40"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPogDOQaWlMZ3RxQ5XSgAurML0bDWiiOIYqOgDG3fTqVf1fgJ6XNx8YAFRwevWCM-evQ_lNapfKguZa5DM5g26rL2CGXgQ6Rg3O39S0955YZQ8mvJw5SQc9vb408NmTIu7zjsYEBGKIAo5Z7DeMm1infPAEvgTjpgoAfhoo4RurdYQPynWM3I6J0iYsJQC77q-krWWub8hEVl4FY-dfkL0-fw1oJ4YMznmcgyR1m4P25DKNnXaFacpSArVqZy-zEMRARU8q5MHTHqx"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-[1280px] mx-auto flex flex-col items-center">
          <span className="font-montserrat text-sm font-semibold text-primary tracking-[0.2em] uppercase mb-4">
            Welcome to Star Saloon A/C
          </span>
          <h1 className="font-playfair text-4xl md:text-7xl font-bold text-white mb-6 max-w-4xl drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">
            Master Barber Ananth
          </h1>
          <p className="font-montserrat text-lg text-white/80 max-w-2xl mb-10 leading-relaxed">
            Where tradition meets modern luxury. Experience precision haircuts, beard sculpting, facials, and expert dye by Master Barber Ananth in an A/C atmosphere.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Button href="/book" className="!px-10 !py-4 text-base">
              Book Appointment
            </Button>
            <Button href="/services" variant="secondary" className="!px-10 !py-4 text-base">
              View Services & Rates
            </Button>
          </div>
        </div>
      </section>

      {/* Master Barber Showcase Section */}
      <section className="py-20 px-6 relative bg-[#0f0f13] border-y border-white/5">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* Master Photo */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden border-2 border-primary/40 shadow-[0_0_50px_rgba(212,175,55,0.2)] group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/anand.jpg"
                  alt="Master Barber Ananth"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-center">
                  <span className="inline-block px-4 py-1.5 bg-primary text-[#0a0a0a] font-montserrat font-bold text-xs rounded-full uppercase tracking-wider mb-2">
                    Exclusive Master Barber
                  </span>
                  <h3 className="font-playfair text-3xl font-bold text-white">Ananth</h3>
                </div>
              </div>
            </div>

            {/* Master Info & Shop Details */}
            <div className="md:col-span-7 flex flex-col gap-6">
              <span className="font-montserrat text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Craftsmanship & Perfection
              </span>
              <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white leading-tight">
                Meet Master Barber Ananth
              </h2>
              <p className="font-montserrat text-white/70 text-base leading-relaxed">
                Dedicated to providing precision grooming, luxury hot towel shaves, trend-setting haircuts, face cleansing, and custom hair coloring tailored to your profile. Every customer receives dedicated personal care.
              </p>

              {/* Address Banner */}
              <div className="p-6 rounded-2xl glassmorphism border border-primary/30 flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-3xl shrink-0 mt-1">
                  location_on
                </span>
                <div>
                  <h4 className="font-playfair text-xl font-bold text-white">Shop Location</h4>
                  <p className="font-montserrat text-sm text-white/80 mt-1">
                    100 Ft Road, Anna Nagar 2nd Street <br />
                    <span className="text-primary font-semibold">(Nearby Kalyani Car Pattarai)</span>
                  </p>
                </div>
              </div>

              {/* Operating Hours / Session Schedule */}
              <div className="p-6 rounded-2xl bg-[#16171c] border border-white/10">
                <h4 className="font-playfair text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">schedule</span>
                  Daily Session & Slot Schedule
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-montserrat">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                    <span className="text-primary font-bold block mb-1">Morning Session</span>
                    <span className="text-white font-medium block">08:00 AM – 11:00 AM</span>
                    <span className="text-white/40 block text-[10px] mt-1">Slots: 8-8:45, 9-9:45, 10-10:45</span>
                    <span className="text-amber-400 font-semibold block mt-2 pt-2 border-t border-white/5">Break: 11:00 AM – 12:00 PM</span>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                    <span className="text-primary font-bold block mb-1">Afternoon Session</span>
                    <span className="text-white font-medium block">12:00 PM – 03:00 PM</span>
                    <span className="text-white/40 block text-[10px] mt-1">Slots: 12-12:45, 1-1:45, 2-2:45</span>
                    <span className="text-amber-400 font-semibold block mt-2 pt-2 border-t border-white/5">Break: 03:00 PM – 05:00 PM</span>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                    <span className="text-primary font-bold block mb-1">Evening Session</span>
                    <span className="text-white font-medium block">05:00 PM – 08:00 PM</span>
                    <span className="text-white/40 block text-[10px] mt-1">Slots: 5-5:45, 6-6:45, 7-7:45</span>
                    <span className="text-red-400 font-semibold block mt-2 pt-2 border-t border-white/5">Closing Time: 8:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Button href="/book" className="!px-8 !py-3.5 text-sm uppercase tracking-wider">
                  Book Slot with Ananth
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services Quick Menu */}
      <section className="py-24 px-6 relative bg-[#121317]">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <span className="font-montserrat text-xs font-semibold uppercase tracking-[0.3em] text-primary block mb-2">
                Transparent Rates
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white">
                Featured Grooming Services
              </h2>
            </div>
            <Link
              href="/services"
              className="flex items-center text-primary font-montserrat font-semibold hover:underline"
            >
              View Full Menu ({services.length} Services){" "}
              <span className="material-symbols-outlined ml-2 text-xl">
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white">
              Customer Reviews for Ananth
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glassmorphism rounded-2xl p-8 relative">
              <div className="flex text-primary mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="material-symbols-outlined fill-current text-sm">star</span>
                ))}
              </div>
              <p className="font-montserrat text-white/80 text-sm mb-6 leading-relaxed">
                "Ananth is an absolute master! The haircut and beard trimming for ₹200 is incredible value and precision work."
              </p>
              <h4 className="font-montserrat font-bold text-white text-sm">Karthik R.</h4>
              <span className="font-montserrat text-xs text-primary">Regular Client</span>
            </div>

            <div className="glassmorphism rounded-2xl p-8 relative">
              <div className="flex text-primary mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="material-symbols-outlined fill-current text-sm">star</span>
                ))}
              </div>
              <p className="font-montserrat text-white/80 text-sm mb-6 leading-relaxed">
                "Very clean A/C shop at Anna Nagar 2nd street. The facial and head massage was super relaxing."
              </p>
              <h4 className="font-montserrat font-bold text-white text-sm">Suresh Kumar</h4>
              <span className="font-montserrat text-xs text-primary">Anna Nagar Resident</span>
            </div>

            <div className="glassmorphism rounded-2xl p-8 relative">
              <div className="flex text-primary mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="material-symbols-outlined fill-current text-sm">star</span>
                ))}
              </div>
              <p className="font-montserrat text-white/80 text-sm mb-6 leading-relaxed">
                "Brought my 5 year old for a haircut. Ananth was so gentle and patient. Best baby/children haircut in town."
              </p>
              <h4 className="font-montserrat font-bold text-white text-sm">Venkatesh P.</h4>
              <span className="font-montserrat text-xs text-primary">Happy Parent</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
