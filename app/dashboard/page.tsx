"use client"
import FileUpload from "@/components/ui/file-upload"
import { Sidebar } from "@/components/ui/sidebar"
import ContentRenderer from "@/components/ContentRender"
export default function Dashboard() {
  return (<>
    {/* COntent Area */}
    <div className="flex h-full bg-[#0d0d0d] text-gray-300">
    <Sidebar/>
      <div className=" flex flex-col flex-1">

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="ml-30 flex items-center justify-center h-full">
            {/* <FileUpload /> */}
            <ContentRenderer/>
          </div>
        </main>
      </div>
    </div>
  </>
  )
}