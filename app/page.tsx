import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DroneShowcase from "@/components/DroneShowcase";
import Gallery from "@/components/Gallery";
import HouseDetails from "@/components/HouseDetails";
import Rules from "@/components/Rules";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="grain">
      <Navbar />
      <Hero />
      <Features />
      <DroneShowcase />
      <HouseDetails />
      <Gallery preview />
      <Rules />
      <BookingCTA />
      <Footer />
    </main>
  );
}
