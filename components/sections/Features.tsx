import { Shield, Search,Zap } from "lucide-react";
import { motion } from "framer-motion";

// const features = [
//   {
//     icon: Shield,
//     title: "Instant Risk Scoring",
//     description: "Get a comprehensive risk score (0-100) for every document based on your company's playbook."
//   },
//   {
//     icon: Search,
//     title: "Clause Analysis",
//     description: "Deep semantic search identifies dangerous clauses even when they're hidden in complex legalese."
//   },
//   {
//     icon: Lock,
//     title: "Bank-Grade Security",
//     description: "SOC2 Type II compliant infrastructure ensures your sensitive legal data never leaks."
//   },
//   {
//     icon: MessageSquareText,
//     title: "Plain English Summaries",
//     description: "Translate complex legal jargon into clear, actionable summaries for business stakeholders."
//   }
// ];

const features = [
              {
                icon: <Zap className="w-6 h-6 text-amber-400" />,
                title: "Upload",
                desc: "Drag & drop any PDF or paste text directly into the secure editor."
              },
              {
                icon: <Search className="w-6 h-6 text-indigo-400" />,
                title: "Analyze",
                desc: "Our AI scans for 50+ types of risks, liabilities, and unusual clauses."
              },
              {
                icon: <Shield className="w-6 h-6 text-emerald-400" />,
                title: "De-risk",
                desc: "Get actionable recommendations to negotiate better terms."
              }
            ];

export function Features() {
  return (
    <section id="features" className="py-24 bg-zinc-900/30 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Risk analysis in three steps</h2>
            <p className="text-zinc-400">Simple enough for freelancers, powerful enough for enterprises.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-8 rounded bg-black border border-white/10 hover:border-white/20 transition-all group"
              >
                <div className="w-12 h-12 rounded bg-zinc-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
}
