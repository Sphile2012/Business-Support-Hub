import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Pricing } from "@/components/sections/pricing";
import { Process } from "@/components/sections/process";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Process />
        <Contact />
      </main>
    </div>
  );
}
