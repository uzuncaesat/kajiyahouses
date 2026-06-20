import {
  Bed,
  Bath,
  Waves,
  Flame,
  Wind,
  Thermometer,
  UtensilsCrossed,
  ChefHat,
  Home,
  TreePine,
  Sofa,
  Users,
  type LucideIcon,
} from "lucide-react";

export const site = {
  name: "Kajiya Houses Sapanca",
  shortName: "Kajiya Houses",
  tagline: "Sapanca ormanında, doğayla iç içe özel havuzlu bungalov",
  description:
    "Sapanca'nın merkezinde, tamamen müstakil ve korunaklı bahçesiyle, ısıtmalı özel havuzlu, doğayla iç içe bir kaçış. Aileler, kız grupları ve erkek grupları için huzur ve konfor.",
  phoneDisplay: "0533 930 43 79",
  phoneRaw: "905339304379",
  location: "Sapanca, Sakarya",
  capacity: 6,
  checkIn: "14:00",
  checkOut: "11:00",
} as const;

export type Feature = {
  icon: LucideIcon;
  title: string;
  detail: string;
};

export const features: Feature[] = [
  { icon: Bed, title: "2 Yatak Odası", detail: "Dinlendiren, ferah konaklama" },
  { icon: Bath, title: "2 Banyo", detail: "1 Ebeveyn, 1 Ortak kullanım" },
  { icon: Waves, title: "Isıtmalı Özel Havuz", detail: "Korunaklı ve size özel" },
  { icon: Flame, title: "Şömine", detail: "Sıcacık akşamlar için" },
  { icon: Wind, title: "Klima", detail: "Her mevsim ideal sıcaklık" },
  { icon: Thermometer, title: "Yerden Isıtma", detail: "Tabandan yükselen sıcaklık" },
  { icon: UtensilsCrossed, title: "BBQ Alanı", detail: "Açık havada mangal keyfi" },
  { icon: ChefHat, title: "Tam Donanımlı Mutfak", detail: "İhtiyacınız olan her şey" },
  { icon: Home, title: "Müstakil & Korunaklı Bahçe", detail: "Tamamen size ait bir alan" },
  { icon: TreePine, title: "Bahçe Oturma Alanı", detail: "Doğanın içinde mola" },
  { icon: Sofa, title: "2 Adet Açılır Koltuk", detail: "Oturma odasında ek yatak" },
  { icon: Users, title: "Max 6 Kişi Kapasiteli", detail: "Aileler ve gruplar için" },
];

export const rules = [
  "Sadece aile, kız grupları ve erkek grupları kabul edilmektedir.",
  "Rezervasyonlar minimum 2 gece olarak alınmaktadır.",
  "Rezervasyon onayı için %50 kapora talep edilmektedir.",
  "Maksimum konaklama kapasitesi 6 kişidir.",
] as const;

// 22 gallery photos copied into /public/images
export const galleryImages = Array.from({ length: 22 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  return {
    src: `/images/gallery-${num}.jpg`,
    alt: `${site.name} — fotoğraf ${i + 1}`,
  };
});

export type MediaCategory =
  | "İç Mekan"
  | "Havuz"
  | "Bahçe"
  | "Drone Görüntüsü"
  | "Videolar";

export type MediaItem = {
  id: number;
  type: "image" | "video";
  category: MediaCategory;
  src: string;
  title: string;
  thumbnail?: string;
};

export const galleryFilters = [
  "Tümü",
  "İç Mekan",
  "Havuz",
  "Bahçe",
  "Drone Görüntüsü",
  "Videolar",
] as const;

export const galleryMedia: MediaItem[] = [
  { id: 1, type: "image", category: "İç Mekan", src: "/images/bedroom-1.jpg", title: "Ana Yatak Odası" },
  { id: 2, type: "image", category: "İç Mekan", src: "/images/bedroom-2.jpg", title: "İkinci Yatak Odası" },
  { id: 3, type: "image", category: "İç Mekan", src: "/images/living-room.jpg", title: "Oturma Odası" },
  { id: 4, type: "image", category: "İç Mekan", src: "/images/kitchen.jpg", title: "Tam Donanımlı Mutfak" },
  { id: 5, type: "image", category: "Havuz", src: "/images/pool-1.jpg", title: "Isıtmalı Özel Havuz" },
  { id: 6, type: "image", category: "Havuz", src: "/images/pool-night.jpg", title: "Gece Havuz" },
  { id: 7, type: "image", category: "Bahçe", src: "/images/garden.jpg", title: "Korunaklı Bahçe" },
  { id: 8, type: "image", category: "Bahçe", src: "/images/bbq.jpg", title: "BBQ Alanı" },
  { id: 9, type: "video", category: "Drone Görüntüsü", src: "/videos/drone-1.mp4", thumbnail: "/images/drone-thumb.jpg", title: "Drone Turu" },
  { id: 10, type: "video", category: "Videolar", src: "/videos/interior-tour.mp4", thumbnail: "/images/interior-thumb.jpg", title: "İç Mekan Turu" },
];

export const featureImages = [
  { src: "/images/feature-01.jpg", alt: "Kajiya Houses — özel havuz" },
  { src: "/images/feature-02.jpg", alt: "Kajiya Houses — bahçe" },
  { src: "/images/feature-03.jpg", alt: "Kajiya Houses — bungalov" },
  { src: "/images/feature-04.jpg", alt: "Kajiya Houses — iç mekan" },
];

export const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/galeri", label: "Galeri" },
  { href: "/rezervasyon", label: "Rezervasyon" },
];
