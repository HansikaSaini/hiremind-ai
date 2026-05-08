import Navbar from "../components/home/navbar";
import Hero from "../components/home/hero";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
    </main>
  );
}