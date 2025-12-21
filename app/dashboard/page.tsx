import DashboardClient from "@/components/DashboardClient"
import sampleResponse from "@/sample_response"
import type { Issue } from "@/components/ContentRender"
// import { ClerkProvider } from "@clerk/nextjs"

const issues = sampleResponse.data[0].analysis.issues as Issue[]

export default function Dashboard() {
  return(
    // <ClerkProvider>
      <DashboardClient />
    // </ClerkProvider>
  ) 
}