"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "./Home";


const page = () => {
  return (
    
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Home />
        </TooltipProvider>
      </QueryClientProvider>
    
  );
};

export default page;
