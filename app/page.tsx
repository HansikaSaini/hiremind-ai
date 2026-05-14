import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import Trusted from "../components/home/Trusted";
import Features from "../components/home/Features";
import HowItWorks from "../components/home/HowItWorks";
import DashboardPreview from "../components/home/Dashboard";
import Testimonials from "../components/home/Testimonials";
import Footer from "../components/shared/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <Trusted />
      <Features />
      <HowItWorks />
      <DashboardPreview />
      <Testimonials/>      
      <Footer />
    </main>
  );
}