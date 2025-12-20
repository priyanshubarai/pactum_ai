import DashboardClient from "@/components/DashboardClient"
import sampleResponse from "@/sample_response.json"
import type { Issue } from "@/components/ContentRender"

const issues = sampleResponse.data[0].analysis.issues as Issue[]

export default function Dashboard() {
  return <DashboardClient />
}