import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-zinc-950">
      <div className="coentainer mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg text-foreground">
              Pactum<span className="text-primary">AI</span>
            </span>
          </div>

          <div className="flex gap-8 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="/" className="hover:text-foreground transition-colors">Twitter</Link>
            <Link href="/" className="hover:text-foreground transition-colors">LinkedIn</Link>
          </div>

          <div className="text-sm text-zinc-600">
            © 2025 Pactum AI Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
