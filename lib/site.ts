import {
  BookOpenCheck,
  Building2,
  Compass,
  DoorOpen,
  FileText,
  Globe2,
  HandHeart,
  HeartHandshake,
  Landmark,
  LifeBuoy,
  MapPin,
  Network,
  ShieldCheck,
  UsersRound
} from "lucide-react";
import type { Publication } from "@/types/content";

export const site = {
  name: "ADIF Organization",
  legalName: "Action for Integration, Development & Impact",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.adiforganization.org",
  email: "info@adiforganization.org",
  phones: ["+256794844444", "+256761610000"],
  address: "Uganda - Kampala - Arua Park Plaza - C3-490",
  description:
    "A regional integrated platform combining humanitarian action, development systems, research, policy, and institutional transformation."
};

export const navItems = [
  { label: "About", href: "/about" },
  { label: "CHANCE & DOORS", href: "/chance-doors" },
  { label: "Programs", href: "/programs" },
  { label: "Publications", href: "/publications" },
  { label: "Regional Presence", href: "/regional-presence" },
  { label: "Media", href: "/media" },
  { label: "Donate", href: "/donate" },
  { label: "Contact", href: "/contact" }
];

export const framework = [
  {
    title: "Respond",
    text: "Rapid humanitarian action, protection, and field coordination for communities facing acute pressure.",
    icon: LifeBuoy
  },
  {
    title: "Recover",
    text: "Recovery pathways that restore services, livelihoods, local capacity, and institutional confidence.",
    icon: HandHeart
  },
  {
    title: "Transform",
    text: "Research, policy, and systems change that convert crisis response into durable regional impact.",
    icon: Network
  }
];

export const pillars = [
  {
    title: "CHANCE",
    subtitle: "Community for Hope, Advancement, and New Civic Engagement",
    href: "/chance-doors#chance",
    icon: ShieldCheck,
    items: ["Humanitarian response", "Peace and rights", "Recovery", "Sustainable development"]
  },
  {
    title: "DOORS",
    subtitle: "Training, research, advisory, and knowledge platform",
    href: "/chance-doors#doors",
    icon: DoorOpen,
    items: ["Knowledge production", "Capacity building", "Advisory services", "Quality and impact"]
  },
  {
    title: "ADIF Platform",
    subtitle: "Integration platform for long-term institutional impact",
    href: "/about",
    icon: Compass,
    items: ["Partnerships", "Governance", "Systems integration", "Regional learning"]
  }
];

export const stats = [
  { value: 3, suffix: "", label: "Regional operating hubs" },
  { value: 5, suffix: "+", label: "Integrated practice areas" },
  { value: 24, suffix: "/7", label: "Response readiness model" },
  { value: 1, suffix: "", label: "Unified impact platform" }
];

export const locations = [
  {
    city: "Nairobi",
    role: "Strategic donor hub",
    detail: "Partnership engagement, regional coordination, and institutional diplomacy.",
    top: "29%",
    left: "55%"
  },
  {
    city: "Kampala",
    role: "Operations center",
    detail: "Program management, administration, training, and implementation support.",
    top: "45%",
    left: "50%"
  },
  {
    city: "Nyala",
    role: "Field implementation core",
    detail: "Community proximity, protection practice, and field learning loops.",
    top: "30%",
    left: "36%"
  }
];

export const publications: Publication[] = [
  {
    title: "From Response to Transformation: Regional Practice Notes",
    type: "Policy Brief",
    date: "2026",
    topic: "Systems change",
    excerpt:
      "A concise framework for aligning emergency action, recovery, research, and institutional development."
  },
  {
    title: "Operational Access and Community Protection in Fragile Settings",
    type: "Research Paper",
    date: "2026",
    topic: "Protection",
    excerpt:
      "Evidence-informed guidance for field teams working across humanitarian and development mandates."
  },
  {
    title: "Training Local Institutions for Durable Recovery",
    type: "Report",
    date: "2025",
    topic: "Capacity building",
    excerpt:
      "Lessons for strengthening public, civil society, and community systems after acute crisis."
  }
];

export const programs = [
  { title: "Emergency Response", icon: LifeBuoy },
  { title: "Recovery and Livelihoods", icon: HandHeart },
  { title: "Protection Systems", icon: ShieldCheck },
  { title: "Peace, Rights, and Transitional Justice", icon: Landmark },
  { title: "Policy and Research", icon: FileText },
  { title: "Institutional Transformation", icon: Landmark },
  { title: "Training and Capacity", icon: BookOpenCheck }
];

export const credibility = [
  { title: "Donor-facing governance", icon: Building2 },
  { title: "Evidence-led programming", icon: FileText },
  { title: "Regional field intelligence", icon: Globe2 },
  { title: "Community-centered delivery", icon: UsersRound },
  { title: "Operational access", icon: MapPin }
];

export const donationPriorities = [
  {
    title: "Emergency response readiness",
    text: "Support rapid assessment, protection referrals, field coordination, and accountable response capacity.",
    icon: LifeBuoy
  },
  {
    title: "Recovery and livelihoods",
    text: "Help communities restore stability through practical recovery, skills, and local livelihood pathways.",
    icon: HandHeart
  },
  {
    title: "Research and capacity building",
    text: "Invest in DOORS research, training, policy learning, and stronger local institutions.",
    icon: HeartHandshake
  }
];

export const donationBands = [
  { amount: "$50", label: "Field readiness contribution" },
  { amount: "$250", label: "Community recovery support" },
  { amount: "$1,000", label: "Institutional impact partner" }
];
