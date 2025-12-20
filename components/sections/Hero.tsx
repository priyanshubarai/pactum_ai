import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SignUpButton, SignInButton, SignedOut } from "@clerk/nextjs";
import Orb from "@/components/Orb";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden h-screen flex items-center">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-250 h-125 bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-200 h-150 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />
      {/* Background */}

      <div className="right-20 h-screen w-screen" >
      <Orb
        hoverIntensity={0.5}
        rotateOnHover={true}
        hue={0}
        forceHoverState={false}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center absolute z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-foreground2 animate-pulse" />
            <span className="text-xs font-medium text-foreground/80 tracking-wide uppercase">
              AI Contract Intelligence v1.0
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-linear-to-b from-white to-white/60 bg-clip-text text-transparent max-w-4xl mx-auto leading-[1.1]"
          >
            Contract review for <br />
            <span className="text-gradient-primary">non-lawyers.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Identify risks, vulnerabilities, and unfair clauses in seconds.
            Enterprise-grade legal analysis powered by advanced AI.
          </motion.p>

          <SignedOut>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <SignInButton>
                <Button
                  variant={"premium"}
                  size="lg"
                  className="w-full sm:w-auto bg-background border hover:bg-secondary text-base  text-foreground rounded"
                >
                  Login <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button
                  variant="premium"
                  size="lg"
                  className="w-full bg-button sm:w-auto text-base backdrop-blur-sm rounded hover:bg-background2"
                >
                  Sign up <ArrowUpRight className="ml-2 w-4 h-4" />
                </Button>
              </SignUpButton>
            </motion.div>
          </SignedOut>
        </div>
    </section>
  );
}
