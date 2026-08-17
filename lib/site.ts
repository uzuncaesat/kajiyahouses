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

export type MediaCategory = "İç Mekan" | "Havuz" | "Bahçe";

export type MediaItem = {
  id: number;
  category: MediaCategory;
  src: string;
  title: string;
  tall?: boolean; // dikey (portrait) — masonry'de 2 kat yükseklik
  wide?: boolean; // öne çıkan — masonry'de 2 kat genişlik
};

export const galleryFilters = ["Tümü", "İç Mekan", "Havuz", "Bahçe"] as const;

// Yenifotovideolar klasöründen optimize edilip /public/images/gallery içine alındı
export const galleryMedia: MediaItem[] = [
  { id: 1, category: "Bahçe", src: "/images/gallery/g01.jpg", title: "Müstakil Bungalov", tall: true },
  { id: 2, category: "Bahçe", src: "/images/gallery/g02.jpg", title: "BBQ & Mangal Alanı" },
  { id: 3, category: "İç Mekan", src: "/images/gallery/g03.jpg", title: "Yatak Odası" },
  { id: 4, category: "Bahçe", src: "/images/gallery/g04.jpg", title: "Bahçe Oturma Alanı", tall: true },
  { id: 5, category: "İç Mekan", src: "/images/gallery/g05.jpg", title: "Tam Donanımlı Mutfak" },
  { id: 6, category: "Havuz", src: "/images/gallery/g06.jpg", title: "Gece Havuz Keyfi", wide: true },
  { id: 7, category: "İç Mekan", src: "/images/gallery/g07.jpg", title: "Mutfak & Yaşam Alanı" },
  { id: 8, category: "Havuz", src: "/images/gallery/g08.jpg", title: "Havuz & Şezlonglar", tall: true },
  { id: 9, category: "İç Mekan", src: "/images/gallery/g09.jpg", title: "Oturma Odası" },
  { id: 10, category: "İç Mekan", src: "/images/gallery/g10.jpg", title: "Banyo" },
  { id: 11, category: "Havuz", src: "/images/gallery/g11.jpg", title: "Aydınlatmalı Havuz", wide: true },
  { id: 12, category: "Havuz", src: "/images/gallery/g12.jpg", title: "Özel Havuz", tall: true },
  { id: 13, category: "Havuz", src: "/images/gallery/g13.jpg", title: "Havuz Manzarası" },
  { id: 14, category: "Havuz", src: "/images/gallery/g14.jpg", title: "Bungalov & Havuz", tall: true },
  { id: 15, category: "İç Mekan", src: "/images/gallery/g15.jpg", title: "İç Koridor" },
  { id: 16, category: "İç Mekan", src: "/images/gallery/g16.jpg", title: "İkinci Yatak Odası" },
  { id: 17, category: "Havuz", src: "/images/gallery/g17.jpg", title: "Güneşlenme Alanı", tall: true },
  { id: 18, category: "İç Mekan", src: "/images/gallery/g18.jpg", title: "Ebeveyn Banyo" },
  { id: 19, category: "İç Mekan", src: "/images/gallery/g19.jpg", title: "Şömineli Oturma Odası" },
  { id: 20, category: "Havuz", src: "/images/gallery/g20.jpg", title: "Havuz Başı", tall: true },
  { id: 21, category: "Havuz", src: "/images/gallery/g21.jpg", title: "Gündüz Havuz", tall: true },
  { id: 22, category: "Havuz", src: "/images/gallery/g22.jpg", title: "Havuz & Dinlenme" },
  { id: 23, category: "Bahçe", src: "/images/gallery/g23.jpg", title: "Akşam Bahçe Keyfi" },
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
