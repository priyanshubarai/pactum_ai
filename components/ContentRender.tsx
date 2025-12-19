import Section from "./Section";
import { Badge } from "./ui/badge";
import { Deleteicon } from "@/public/DeleteIcon";
import { Button } from "./ui/button";
export default function ContentRenderer() {
    // mock data for now
    const data = {
        category: "ip",
        severity: "medium",
        title: "Broad User Content License",
        explanation:
            "Users grant a 'non-exclusive, worldwide, royalty-free license to use, store, and display your content for the purpose of operating and improving the Service.' While common for user-generated content platforms, this license is broad, perpetual (as no end date is specified), and 'operating and improving the Service' could be interpreted extensively, potentially allowing for broader use than a user might expect.",
        suggestion:
            "Clarify or consider limiting the scope and duration of the user content license. For example, specify that the license terminates upon account deletion, or provide more specific examples of what 'operating and improving the Service' entails regarding user content.",
        clauseSnippet:
            "By submitting content, you grant us a non-exclusive, worldwide, royalty-free license to use, store, and display your content for the purpose of operating and improving the Service."
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <p className="font-mono text-5xl font-white">
                Summary based on contract analysis.
            </p>
            <div className="flex gap-4 items-center">
                <p className="font-bold">
                    Risk level
                </p>
                <Badge variant="high" >High</Badge>
            </div>

 
            {/* category */}
                <p className="text-3xl font-bold text-white">
                    Termination
                </p>
                <div className="flex gap-2 items-center ">
                    <p className="text-md font-bold">Severity </p>
                    <Badge variant="high" >High</Badge>
                </div>
            

            {/* Title */}
            <Section title={data.title}>
                {data.explanation}


            </Section>

            {/* Explanation */}
            <p className="text-md text-neutral-300 leading-relaxed">
            </p>

            {/* Suggestion */}
            <Section title="Suggestion">
                {data.suggestion}
            </Section>

            {/* Clause Snippet */}
            <Section title="Clause Snippet">
                {data.clauseSnippet}
            </Section>
                <p className="text-3xl font-bold text-white">
                    Termination
                </p>
                <div className="flex gap-2 items-center ">
                    <p className="text-md font-bold">Severity </p>
                    <Badge variant="high" >High</Badge>
                </div>
            

            {/* Title */}
            <Section title={data.title}>
                {data.explanation}


            </Section>

            {/* Explanation */}
            <p className="text-md text-neutral-300 leading-relaxed">
            </p>

            {/* Suggestion */}
            <Section title="Suggestion">
                {data.suggestion}
            </Section>

            {/* Clause Snippet */}
            <Section title="Clause Snippet">
                {data.clauseSnippet}
            </Section>
        </div>
    );
}