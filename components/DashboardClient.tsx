"use client";

import { useEffect, useState } from "react";
import { Sidebar } from "./sidebar";
import FileUpload from "./ui/file-upload";
import { ContentRenderer } from "./ContentRender";
import { Button } from "@/components/ui/button";
import { Issue } from "@/components/ContentRender";
import { LoaderOne } from "./ui/loader";
import { error } from "console";

export default function DashboardClient() {
  const [issues, setIssues] = useState<Issue[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleAnalyze = async () => {
    setLoading(true);
    const formData = new FormData();
    if(!file){
      throw new Error("NO FILE SELECTED")
    } 
    formData.append("File", file);
    try {
      <LoaderOne />;
      const res = await fetch("http://localhost:3000/api/contract", {
        method: "POST",
        body : formData
      });
      const dataJson = await res.json();
      setIssues(dataJson[0].analysis.issues);
      console.log("ANALYSIS : ",dataJson[0].analysis)
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
                <FileUpload file={file} setfile={setFile} />
                <Button
                  variant="premium"
                  size="lg"
                  text={loading ? "Analyzing..." : "Analyze"}
                  onClick={handleAnalyze}
                  disabled={loading || !file}
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
