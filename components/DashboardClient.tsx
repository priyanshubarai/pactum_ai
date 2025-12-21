"use client";

import { useEffect, useState } from "react";
import { Sidebar } from "./sidebar/sidebar";
import { ContentRenderer } from "./ContentRender";
import { Button } from "@/components/ui/button";
import { Issue } from "@/components/ContentRender";
import { LoaderOne } from "./ui/loader";
import { error } from "console";
import sampleResponse from "@/sample_response";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileUploadDemo } from "@/components/fileUpload/file-upload-demo";

export default function DashboardClient() {
  const [issues, setIssues] = useState<Issue[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const handleAnalyze = async () => {
    // setLoading(true);
    // const formData = new FormData();
    // if(files.length<1){
    //   throw new Error("NO FILE SELECTED")
    // }
    // formData.append("File", files[0]);
    // try {
    //   <LoaderOne />;
    //   const res = await fetch("http://localhost:3000/api/contract", {
    //     method: "POST",
    //     body : formData
    //   });
    //   const dataJson = await res.json();
    //   console.log("ANALYSIS RECEIVED : ",dataJson.analysis.issues);
    //   setIssues(dataJson.analysis.issues);
    //   // console.log("ANALYSIS : ",dataJson[0].analysis)
    // } catch (err) {
    //   console.error("Analysis failed", err);
    // } finally {
    //   setLoading(false);
    // }
    setIssues(sampleResponse.data[0].analysis.issues);
  };

  return (
    <div className="flex flex-row min-h-screen bg-[#0d0d0d] text-gray-300">
      <Sidebar />
      <div className="flex flex-col flex-1 ">
        {/* <main className="flex-1 p-6"> */}
        <div className="flex items-center justify-center h-full">
          {!issues ? (

            <div className="flex flex-col items-center gap-5">
              {/* <FileUpload /> */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Basic</CardTitle>
                    <CardDescription>
                      Basic controlled file upload.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <FileUploadDemo files={files} setFiles={setFiles} />
                  </CardContent>
                </Card>
              </div>
              <Button
                variant="premium"
                size="lg"
                onClick={handleAnalyze}
                disabled={loading || files.length == 0}
              >
                {loading ? "Analyzing..." : "Analyze"}
              </Button>
            </div>

          ) : (
            <ContentRenderer issues={issues} />
          )}
        </div>
        {/* </main> */}
      </div>
    </div>
  );
}
