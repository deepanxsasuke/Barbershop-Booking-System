export interface Appointment {
  id: string;
  service: string;
  duration: string;
  price: string;
  barber: string;
  barberRole: string;
  date: string;
  time: string;
  status: "upcoming" | "completed";
}

export interface UserProfile {
  name: string;
  avatar: string;
  loyaltyPoints: number;
  tier: string;
  pointsToNext: number;
  nextTier: string;
  tierProgress: number;
}

export const defaultUser: UserProfile = {
  name: "Alexander",
  avatar:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBp3BwplxeuDQJNCaFH_64SrEUo_QDuE7yyMeaxrNLbRbul3fJukz5PsOqqjHirRorM-Q7gYDIuodR1v1BFac_4YYmlQ5RTcoEocjZKzD9pLeN08FcuENR7zy5OGSyBJKBV_Go5vSVBP7YIp2J97la4FmU_f0cV_j7npLbFY6wltDPQU6hXXUexPWWbVY7W-EFxkObtQ9yfKoVUa8XqLkbdHhabYYDI1bx4C52u-Lu5QRQYs99LDMyybCGznPDqP_1ViGkr3z7a9rva",
  loyaltyPoints: 0,
  tier: "Silver",
  pointsToNext: 500,
  nextTier: "Gold",
  tierProgress: 0,
};

export const APPOINTMENTS_KEY = "starsaloon_appointments";

export function getAppointments(): Appointment[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(APPOINTMENTS_KEY) ?? "[]");
  } catch {
    return [];
  }
}

export function saveAppointment(appt: Appointment): void {
  const all = getAppointments();
  // mark any previous upcoming as completed when a new one is booked
  const updated = all.map((a) =>
    a.status === "upcoming" ? { ...a, status: "completed" as const } : a
  );
  localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify([...updated, appt]));
}

export interface Service {
  id: number;
  title: string;
  price: string;
  duration: string;
  description: string;
  image: string;
  objectPosition?: string;
}

export const services: Service[] = [
  {
    id: 0,
    title: "Haircut + Beard Trimming",
    price: "₹200",
    duration: "45 mins",
    description: "Complete signature haircut and detailed beard shaping with precision line-up.",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 1,
    title: "Haircut + Clean Shave",
    price: "₹170",
    duration: "45 mins",
    description: "Tailored luxury cut paired with a classic smooth hot towel clean shave.",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Haircut + Shave + Hair Dye",
    price: "₹300",
    duration: "60 mins",
    description: "Full transformation package with precision cut, clean shave, and natural hair color.",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Haircut Only",
    price: "₹120",
    duration: "30 mins",
    description: "Classic or modern haircut customized to suit your unique style.",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Clean Shave",
    price: "₹70",
    duration: "20 mins",
    description: "Traditional razor-smooth clean shave with warm foam and post-shave balm.",
    image: "/images/clean_shave.jpg",
  },
  {
    id: 5,
    title: "Beard Trimming",
    price: "₹100",
    duration: "20 mins",
    description: "Expert beard shaping, edging, line-up, and nourishing beard oil finish.",
    image: "/images/beard_trimming.jpg",
  },
  {
    id: 6,
    title: "Children's Haircut (Below 10 Years)",
    price: "₹100",
    duration: "30 mins",
    description: "Fun, gentle, and stylish haircut session for young boys under 10 years.",
    image: "/images/children_haircut.jpg",
    objectPosition: "65% top",
  },
  {
    id: 7,
    title: "Baby Haircut",
    price: "₹150",
    duration: "30 mins",
    description: "Ultra-careful and calm first haircuts for toddlers and infants.",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    title: "Facial",
    price: "₹800",
    duration: "45 mins",
    description: "Deep cleansing facial, steam exfoliation, scrub, and hydrating face massage.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 9,
    title: "Bleaching",
    price: "₹200",
    duration: "30 mins",
    description: "Skin brightening and dark spot reduction treatment for a radiant complexion.",
    image: "/images/bleaching.jpg",
  },
  {
    id: 10,
    title: "Hair Color / Hair Dye",
    price: "₹300",
    duration: "45 mins",
    description: "Premium rich grey coverage and vibrant color transformation.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 11,
    title: "Head Massage",
    price: "₹150 / ₹200",
    duration: "30 mins",
    description: "Relaxing stress-relief head massage with aromatic herbal or coconut oils.",
    image: "/images/head_massage.jpg",
  },
  {
    id: 12,
    title: "Face Wash / Face Cleansing",
    price: "₹100",
    duration: "20 mins",
    description: "Instant dirt & oil removal face wash with botanical cleansing foam.",
    image: "https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&w=600&q=80",
  },
];
