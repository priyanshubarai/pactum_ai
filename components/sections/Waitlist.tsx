"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Mail } from "lucide-react";

export function Waitlist() {
  const [email, setEmail] = useState("");

  return (
    <section id="waitlist" className="py-24 relative overflow-hidden ">
      {/* Background glow */}
      <div className="absolute inset-0 bg-primary/5 -z-10" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-primary/20 blur-[100px] rounded-full -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded shadow-2xl">
          <Mail className="w-12 h-12 text-foreground2 mx-auto mb-6" />

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to send a Feedback?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            We're currently working on our AI model. Enter your email to
            request features or issues.
          </p>

          <form
            onSubmit={() => {
              console.log("form isnt configured");
            }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="work@company.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-zinc-950 border-white/10 focus:border-primary rounded"
            />
            <Button
              type="submit"
              size="lg"
              disabled={false}
              className="w-full sm:w-auto bg-button text-foreground h-12 rounded"
            >
              Send
            </Button>
          </form>

          <p className="mt-6 text-xs text-zinc-500">
            Try our platform for free. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
