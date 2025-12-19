"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Loader2, AlertTriangle, CheckCircle2 } from "lucide-react";

export function DemoScanner() {
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);

  const startDemo = () => {
    if (isScanning || scanComplete) return;
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
    }, 4000);
  };

  const riskyWords = [
    { text: "indemnify", risk: "high", reason: "Uncapped liability exposure" },
    { text: "immediate termination", risk: "medium", reason: "Lack of cure period" },
    { text: "arbitration", risk: "low", reason: "Limits legal recourse" },
  ];

  return (
    <section id="demo" className="py-24 relative overflow-hidden bg-zinc-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">See it in action</h2>
            <p className="text-muted-foreground">
              Our advanced AI Model reads contracts like a senior attorney.
            </p>
          </div>

          <div 
            className="relative bg-zinc-950 border border-white/10 rounded-xl shadow-2xl overflow-hidden aspect-4/3 md:aspect-video cursor-pointer group"
            onClick={startDemo}
          >
            {/* Window Header */}
            <div className="h-10 bg-zinc-900 border-b border-white/5 flex items-center px-4 gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/20" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                <div className="w-3 h-3 rounded-full bg-green-500/20" />
              </div>
              <div className="ml-4 text-xs text-zinc-500 font-mono">master_service_agreement_v2.pdf</div>
            </div>

            {/* Document Content */}
            <div className="p-8 md:p-12 font-mono text-xs md:text-sm text-zinc-400 leading-relaxed relative h-full">
              {!isScanning && !scanComplete && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-[2px] z-20 group-hover:bg-black/50 transition-colors">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-background2/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                      <FileText className="w-8 h-8 text-foreground2" />
                    </div>
                    <p className="text-white font-medium">Click to scan document</p>
                  </div>
                </div>
              )}

              <p className="mb-4">
                This MASTER SERVICES AGREEMENT (the "Agreement") is entered into as of January 1, 2024...
              </p>
              <p className="mb-4">
                1. INDEMNIFICATION. Provider agrees to <span className={scanComplete ? "bg-red-500/20 text-red-200 px-1 rounded transition-colors duration-500" : ""}>indemnify</span> and hold harmless Client from any and all claims, damages, and expenses...
              </p>
              <p className="mb-4">
                2. TERMINATION. Client reserves the right of <span className={scanComplete ? "bg-yellow-500/20 text-yellow-200 px-1 rounded transition-colors duration-500" : ""}>immediate termination</span> without cause upon written notice...
              </p>
              <p className="mb-4">
                3. DISPUTE RESOLUTION. Any dispute arising under this Agreement shall be resolved via binding <span className={scanComplete ? "bg-blue-500/20 text-blue-200 px-1 rounded transition-colors duration-500" : ""}>arbitration</span> in the state of Delaware...
              </p>
              <p className="opacity-50">
                [... Rest of document content redacted for brevity ...]
              </p>

              {/* Scanning Beam */}
              <AnimatePresence>
                {isScanning && (
                  <motion.div
                    initial={{ top: 0, opacity: 0 }}
                    animate={{ top: "100%", opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 3.5, ease: "linear" }}
                    className="absolute left-0 right-0 h-1 bg-primary shadow-[0_0_50px_20px_rgba(124,58,237,0.3)] z-10"
                  />
                )}
              </AnimatePresence>

              {/* Scan Results Overlay */}
              <AnimatePresence>
                {scanComplete && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="absolute top-20 right-8 w-64 bg-zinc-900/90 backdrop-blur border border-white/10 rounded-lg p-4 shadow-2xl z-30"
                  >
                    <div className="flex items-center gap-2 mb-4 text-green-400">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="text-sm font-bold">Analysis Complete</span>
                    </div>
                    <div className="space-y-3">
                      {riskyWords.map((item, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-3 p-2 rounded bg-white/5"
                        >
                          <AlertTriangle className={`w-4 h-4 mt-0.5 ${
                            item.risk === 'high' ? 'text-red-500' : 
                            item.risk === 'medium' ? 'text-yellow-500' : 'text-blue-500'
                          }`} />
                          <div>
                            <p className="text-xs text-zinc-200 font-medium capitalize">{item.risk} Risk</p>
                            <p className="text-[10px] text-zinc-500">{item.reason}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setScanComplete(false);
                      }}
                      className="mt-4 text-xs text-center w-full text-zinc-500 hover:text-white transition-colors"
                    >
                      Reset Demo
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
