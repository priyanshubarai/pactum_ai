import Section from "./Section";
import { Badge } from "./ui/badge";

export interface Issue {
    category: string;
    severity: "low" | "medium" | "high" | String;
    title: string;
    explanation: string;
    suggestion: string;
    clauseSnippet: string;
    referencedArticle : Array<string>
}

export interface Analysis {
    riskLevel: "low" | "medium" | "high";
    executiveSummary: string;
    issues: Issue[];
}

interface ContentRendererProps {
    issues: Issue[];
}

export function ContentRenderer({ issues }: ContentRendererProps) {

    return (
        <div className=" w-full px-12 max-h-screen overflow-y-auto py-16 space-y-8">
            <p className="font-mono text-5xl font-white">
                Summary based on contract analysis.
            </p>
            <div className="flex gap-4 items-center">
                <p className="font-bold">
                    Risk level
                </p>
                <Badge variant="high" >High</Badge>
            </div>

            {issues.map((issue: any, index: number) => (
                <div
                    key={index}
                    className="space-y-6 border-b border-white/10 pb-10 last:border-none"
                >
                    {/* Category */}
                    <h2 className="text-3xl font-bold text-white uppercase tracking-wide">
                        {issue.category}
                    </h2>

                    {/* Severity */}
                    <div className="flex items-center gap-3">
                        <span className="text-md font-semibold text-gray-300 uppercase tracking-wide">
                            Severity
                        </span>
                        <Badge variant={issue.severity}>
                            {issue.severity}
                        </Badge>
                    </div>

                    {/* Title / Explanation */}
                    <Section
                        title={
                            <span className="uppercase tracking-wide">
                                {issue.title}
                            </span>
                        }
                    >
                        <p className="text-gray-300 leading-relaxed">
                            {issue.explanation}
                        </p>
                    </Section>

                    {/* Suggestion */}
                    <Section title="Suggestion">
                        <p className="text-gray-300 leading-relaxed">
                            {issue.suggestion}
                        </p>
                    </Section>

                    {/* Clause Snippet */}
                    <Section title="Clause Snippet">
                        <p className="bg-white/5 rounded-lg p-4 text-sm text-gray-200 overflow-x-auto">
                            {issue.clauseSnippet}
                        </p>
                    </Section>
                </div>
            ))}



        </div>
    );
}