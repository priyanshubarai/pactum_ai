"use client";

import { useEffect, useState } from "react";
import { Sidebar } from "./sidebar";
import FileUpload from "./ui/file-upload";
import { ContentRenderer } from "./ContentRender";
import { Button } from "@/components/ui/button";
import { Issue } from "@/components/ContentRender";
import { LoaderOne } from "./ui/loader";

export default function DashboardClient() {
  const [issues, setIssues] = useState<Issue[] | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    setLoading(true);
    try {
      <LoaderOne />;
      const res = await fetch("/api/contract", {
        method: "POST",
      });
      const dataJson = await res.json();
      setIssues(dataJson[0].analysis.issues);
    } catch (err) {
      console.error("Analysis failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#0d0d0d] text-gray-300">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <main className="flex-1 p-6">
          <div className="flex items-center justify-center h-full">
            {!issues ? (
              <div className="flex flex-col items-center gap-5">
                <FileUpload />
                <Button
                  variant="premium"
                  size="lg"
                  text={loading ? "Analyzing..." : "Analyze"}
                  onClick={handleAnalyze}
                  disabled={loading}
                />
              </div>
            ) : (
              <ContentRenderer issues={issues} />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
