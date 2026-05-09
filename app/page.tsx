import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import Trusted from "../components/home/Trusted";
import Features from "../components/home/Features";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <Trusted />
      <Features />
    </main>
  );
}