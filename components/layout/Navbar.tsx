import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowUpRight } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { SignedIn } from "@clerk/clerk-react";
import { redirect } from "next/navigation";

export function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md opacity-80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="bg-background2/20 p-2 rounded-lg group-hover:bg-primary/30 transition-colors">
              <ShieldCheck className="w-5 h-5 text-foreground2" />
            </div>
            <span className="font-bold text-lg tracking-tight text-foreground">
              Pactum<span className="text-foreground2">AI</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <button
              onClick={() => scrollToSection("features")}
              className="hover:text-foreground transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("demo")}
              className="hover:text-foreground transition-colors"
            >
              How it Works
            </button>
            <button
              onClick={() => scrollToSection("waitlist")}
              className="hover:text-foreground transition-colors"
            >
              Feedback
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button
              className="bg-secondary text-primary rounded hover:bg-background outline flex flex-row h-7 w-22 sm:text-wrap justify-center items-center text-sm"
              // variant="outline"
              // size="sm"
              onClick={() => redirect("/dashboard")}
            >
              Try Now <ArrowUpRight size={"18"}/>
            </button>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}
