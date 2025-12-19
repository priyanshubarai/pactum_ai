import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { DemoScanner } from "@/components/sections/DemoScanner";
import { Waitlist } from "@/components/sections/Waitlist";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="grow">
        <Hero />
        <Features />
        <DemoScanner />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
