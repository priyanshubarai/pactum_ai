const ContractsOfUser={
    "success": "true",
    "contract": [
        {
            "_id": "69470462e9c602a7748c53d1",
            "user_id": "12345",
            "filename": "test.txt",
            "text": "TERMS AND CONDITIONS\r\n\r\nLast updated: [DATE]\r\n\r\nWelcome to [WEBSITE / APP NAME] (\"Service\", \"we\", \"our\", \"us\"). By accessing or using this Service, you agree to be bound by these Terms and Conditions (\"Terms\"). If you do not agree, do not use the Service.\r\n\r\nELIGIBILITY\r\nYou must be at least 18 years old to use this Service. By using the Service, you confirm that you meet this requirement.\r\n\r\nUSE OF THE SERVICE\r\nYou agree to use the Service only for lawful purposes and in accordance with these Terms. You must not:\r\n\r\nViolate any applicable laws or regulations\r\n\r\nAttempt to gain unauthorized access to systems or data\r\n\r\nUpload or distribute malware, viruses, or harmful code\r\n\r\nAbuse, harass, or harm other users\r\n\r\nWe reserve the right to suspend or terminate access if you violate these rules.\r\n\r\nUSER CONTENT\r\nYou are solely responsible for any content you submit, upload, or share through the Service.\r\n\r\nBy submitting content, you grant us a non-exclusive, worldwide, royalty-free license to use, store, and display your content for the purpose of operating and improving the Service.\r\n\r\nWe do not endorse or take responsibility for user-generated content.\r\n\r\nINTELLECTUAL PROPERTY\r\nAll content, features, and functionality of the Service, excluding user content, are the property of [COMPANY NAME] and are protected by intellectual property laws.\r\n\r\nYou may not copy, modify, distribute, or exploit any part of the Service without prior written permission.\r\n\r\nTHIRD-PARTY SERVICES\r\nThe Service may include links or integrations with third-party services. We are not responsible for their content, policies, or practices. Use them at your own risk.\r\n\r\nTERMINATION\r\nWe may suspend or terminate your access to the Service at any time, without notice, if you violate these Terms or misuse the Service.\r\n\r\nTermination does not eliminate obligations incurred before termination.\r\n\r\nDISCLAIMER OF WARRANTIES\r\nThe Service is provided \"as is\" and \"as available\" without warranties of any kind, express or implied. We do not guarantee accuracy, reliability, availability, or fitness for a particular purpose.\r\n\r\nLIMITATION OF LIABILITY\r\nTo the maximum extent permitted by law, [COMPANY NAME] shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service.\r\n\r\nINDEMNIFICATION\r\nYou agree to indemnify and hold harmless [COMPANY NAME] from any claims, damages, losses, or expenses arising from your use of the Service or violation of these Terms.\r\n\r\nCHANGES TO TERMS\r\nWe may update these Terms at any time. Continued use of the Service after changes means you accept the revised Terms.\r\n\r\nGOVERNING LAW\r\nThese Terms are governed by the laws of [COUNTRY / STATE], without regard to conflict of law principles.\r\n\r\nCONTACT INFORMATION\r\nFor questions regarding these Terms, contact us at:\r\nEmail: [SUPPORT EMAIL]",
            "analysis": {
                "riskLevel": "high",
                "executiveSummary": "Summary based on contract analysis.",
                "issues": [
                    {
                        "category": "ip",
                        "severity": "medium",
                        "title": "Broad User Content License",
                        "explanation": "The user grants a non-exclusive, worldwide, royalty-free license to use, store, and display their content for 'operating and improving the Service.' The term 'improving the Service' is vague and could be interpreted broadly, allowing uses beyond the user's reasonable expectation. The license duration is not specified, implying it is perpetual, and it's unclear if it survives termination.",
                        "suggestion": "Specify the duration of the license (e.g., limited to the term of use) and provide a more precise definition of 'improving the Service' to ensure content use is aligned with user expectations. Clarify if the license survives termination and, if so, for what limited purposes.",
                        "clauseSnippet": "By submitting content, you grant us a non-exclusive, worldwide, royalty-free license to use, store, and display your content for the purpose of operating and improving the Service."
                    },
                    {
                        "category": "termination",
                        "severity": "high",
                        "title": "Unilateral and Unspecified Termination Rights",
                        "explanation": "The service provider can terminate or suspend access 'at any time, without notice' for violating terms or 'misusing the Service.' The term 'misuse' is undefined, giving the provider broad, unilateral discretion without any corresponding rights for the user to terminate, receive notice, or retrieve data upon termination.",
                        "suggestion": "Include a reciprocal right for the user to terminate their account. Define 'misuse of the Service' clearly. Specify a reasonable notice period for termination by the service provider, especially for non-critical breaches, and outline data retrieval options for users upon termination.",
                        "clauseSnippet": "We may suspend or terminate your access to the Service at any time, without notice, if you violate these Terms or misuse the Service."
                    },
                    {
                        "category": "liability",
                        "severity": "high",
                        "title": "Broad Disclaimer of Warranties",
                        "explanation": "The Service is provided 'as is' and 'as available,' with no warranties regarding accuracy, reliability, availability, or fitness for purpose. This places all risk of service performance and quality on the user, without any guaranteed level of service.",
                        "suggestion": "Consider adding specific, limited warranties for critical functionalities or minimum service level commitments, particularly if the service is paid or essential to user operations.",
                        "clauseSnippet": "The Service is provided 'as is' and 'as available' without warranties of any kind, express or implied. We do not guarantee accuracy, reliability, availability, or fitness for a particular purpose."
                    },
                    {
                        "category": "liability",
                        "severity": "high",
                        "title": "Exclusion of Indirect and Consequential Damages",
                        "explanation": "The clause explicitly excludes liability for indirect, incidental, special, or consequential damages. This significantly limits the service provider's financial exposure, shifting the burden of such potential losses entirely to the user, even if caused by the service provider's actions or negligence. There is no mention of exceptions for gross negligence or willful misconduct.",
                        "suggestion": "Negotiate for exceptions to the limitation of liability for direct damages, gross negligence, willful misconduct, or breaches of specific obligations (e.g., data security).",
                        "clauseSnippet": "To the maximum extent permitted by law, [COMPANY NAME] shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service."
                    },
                    {
                        "category": "liability",
                        "severity": "high",
                        "title": "One-Sided and Broad Indemnification",
                        "explanation": "The user is required to indemnify the service provider for any claims, damages, losses, or expenses arising from their use of the Service or violation of the Terms. This clause is broad, lacks any limits (e.g., monetary caps), and is entirely one-sided, with no reciprocal indemnity from the service provider for potential issues like IP infringement by the service itself.",
                        "suggestion": "Seek to limit the scope of indemnification to direct damages resulting from the user's proven material breach or willful misconduct. Propose a reciprocal indemnification clause from the service provider for issues such as IP infringement or gross negligence.",
                        "clauseSnippet": "You agree to indemnify and hold harmless [COMPANY NAME] from any claims, damages, losses, or expenses arising from your use of the Service or violation of these Terms."
                    },
                    {
                        "category": "other",
                        "severity": "medium",
                        "title": "Unilateral Right to Amend Terms",
                        "explanation": "The service provider reserves the right to update terms at any time, with continued use constituting acceptance. This means terms can change without explicit user consent or adequate notice, potentially introducing new obligations or restrictions without the user being fully aware.",
                        "suggestion": "Request a reasonable notice period (e.g., 30 days) for any material changes to the Terms, allowing users to review and decide whether to continue using the service. Consider an opt-out mechanism for significant changes.",
                        "clauseSnippet": "We may update these Terms at any time. Continued use of the Service after changes means you accept the revised Terms."
                    },
                    {
                        "category": "other",
                        "severity": "medium",
                        "title": "Incomplete Governing Law Clause",
                        "explanation": "The Governing Law clause contains a placeholder '[COUNTRY / STATE]', meaning the applicable jurisdiction is not specified. This creates ambiguity regarding which laws would govern disputes, making legal interpretation difficult.",
                        "suggestion": "Replace the placeholder '[COUNTRY / STATE]' with a specific, complete jurisdiction to ensure clarity on the governing law.",
                        "clauseSnippet": "These Terms are governed by the laws of [COUNTRY / STATE], without regard to conflict of law principles."
                    },
                    {
                        "category": "other",
                        "severity": "low",
                        "title": "Incomplete Contact Information Clause",
                        "explanation": "The Contact Information clause contains a placeholder '[SUPPORT EMAIL]', meaning the specific email address for questions is not provided. This makes it impossible for users to contact the service provider as intended.",
                        "suggestion": "Replace the placeholder '[SUPPORT EMAIL]' with a specific, active email address for support inquiries.",
                        "clauseSnippet": "Email: [SUPPORT EMAIL]"
                    },
                    {
                        "category": "ip",
                        "severity": "medium",
                        "title": "Broad User Content License",
                        "explanation": "The user grants a non-exclusive, worldwide, royalty-free license to use, store, and display their content for 'operating and improving the Service.' The term 'improving the Service' is vague and could be interpreted broadly, allowing uses beyond the user's reasonable expectation. The license duration is not specified, implying it is perpetual, and it's unclear if it survives termination.",
                        "suggestion": "Specify the duration of the license (e.g., limited to the term of use) and provide a more precise definition of 'improving the Service' to ensure content use is aligned with user expectations. Clarify if the license survives termination and, if so, for what limited purposes.",
                        "clauseSnippet": "By submitting content, you grant us a non-exclusive, worldwide, royalty-free license to use, store, and display your content for the purpose of operating and improving the Service."
                    },
                    {
                        "category": "termination",
                        "severity": "high",
                        "title": "Unilateral and Unspecified Termination Rights",
                        "explanation": "The service provider can terminate or suspend access 'at any time, without notice' for violating terms or 'misusing the Service.' The term 'misuse' is undefined, giving the provider broad, unilateral discretion without any corresponding rights for the user to terminate, receive notice, or retrieve data upon termination.",
                        "suggestion": "Include a reciprocal right for the user to terminate their account. Define 'misuse of the Service' clearly. Specify a reasonable notice period for termination by the service provider, especially for non-critical breaches, and outline data retrieval options for users upon termination.",
                        "clauseSnippet": "We may suspend or terminate your access to the Service at any time, without notice, if you violate these Terms or misuse the Service."
                    },
                    {
                        "category": "liability",
                        "severity": "high",
                        "title": "Broad Disclaimer of Warranties",
                        "explanation": "The Service is provided 'as is' and 'as available,' with no warranties regarding accuracy, reliability, availability, or fitness for purpose. This places all risk of service performance and quality on the user, without any guaranteed level of service.",
                        "suggestion": "Consider adding specific, limited warranties for critical functionalities or minimum service level commitments, particularly if the service is paid or essential to user operations.",
                        "clauseSnippet": "The Service is provided 'as is' and 'as available' without warranties of any kind, express or implied. We do not guarantee accuracy, reliability, availability, or fitness for a particular purpose."
                    },
                    {
                        "category": "liability",
                        "severity": "high",
                        "title": "Exclusion of Indirect and Consequential Damages",
                        "explanation": "The clause explicitly excludes liability for indirect, incidental, special, or consequential damages. This significantly limits the service provider's financial exposure, shifting the burden of such potential losses entirely to the user, even if caused by the service provider's actions or negligence. There is no mention of exceptions for gross negligence or willful misconduct.",
                        "suggestion": "Negotiate for exceptions to the limitation of liability for direct damages, gross negligence, willful misconduct, or breaches of specific obligations (e.g., data security).",
                        "clauseSnippet": "To the maximum extent permitted by law, [COMPANY NAME] shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service."
                    },
                    {
                        "category": "liability",
                        "severity": "high",
                        "title": "One-Sided and Broad Indemnification",
                        "explanation": "The user is required to indemnify the service provider for any claims, damages, losses, or expenses arising from their use of the Service or violation of the Terms. This clause is broad, lacks any limits (e.g., monetary caps), and is entirely one-sided, with no reciprocal indemnity from the service provider for potential issues like IP infringement by the service itself.",
                        "suggestion": "Seek to limit the scope of indemnification to direct damages resulting from the user's proven material breach or willful misconduct. Propose a reciprocal indemnification clause from the service provider for issues such as IP infringement or gross negligence.",
                        "clauseSnippet": "You agree to indemnify and hold harmless [COMPANY NAME] from any claims, damages, losses, or expenses arising from your use of the Service or violation of these Terms."
                    },
                    {
                        "category": "other",
                        "severity": "medium",
                        "title": "Unilateral Right to Amend Terms",
                        "explanation": "The service provider reserves the right to update terms at any time, with continued use constituting acceptance. This means terms can change without explicit user consent or adequate notice, potentially introducing new obligations or restrictions without the user being fully aware.",
                        "suggestion": "Request a reasonable notice period (e.g., 30 days) for any material changes to the Terms, allowing users to review and decide whether to continue using the service. Consider an opt-out mechanism for significant changes.",
                        "clauseSnippet": "We may update these Terms at any time. Continued use of the Service after changes means you accept the revised Terms."
                    },
                    {
                        "category": "other",
                        "severity": "medium",
                        "title": "Incomplete Governing Law Clause",
                        "explanation": "The Governing Law clause contains a placeholder '[COUNTRY / STATE]', meaning the applicable jurisdiction is not specified. This creates ambiguity regarding which laws would govern disputes, making legal interpretation difficult.",
                        "suggestion": "Replace the placeholder '[COUNTRY / STATE]' with a specific, complete jurisdiction to ensure clarity on the governing law.",
                        "clauseSnippet": "These Terms are governed by the laws of [COUNTRY / STATE], without regard to conflict of law principles."
                    },
                    {
                        "category": "other",
                        "severity": "low",
                        "title": "Incomplete Contact Information Clause",
                        "explanation": "The Contact Information clause contains a placeholder '[SUPPORT EMAIL]', meaning the specific email address for questions is not provided. This makes it impossible for users to contact the service provider as intended.",
                        "suggestion": "Replace the placeholder '[SUPPORT EMAIL]' with a specific, active email address for support inquiries.",
                        "clauseSnippet": "Email: [SUPPORT EMAIL]"
                    }
                ],
                "missingClauses": [],
                "recommendedActions": []
            },
            "createdAt": "2025-12-20T20:17:38.995Z",
            "updatedAt": "2025-12-20T20:17:38.995Z",
            "__v": 0
        },
        {
            "_id": "69470462e9c602a7748c53d2",
            "user_id": "12345",
            "filename": "privacy_policy.txt",
            "text": "PRIVACY POLICY\n\nThis Privacy Policy explains how we collect, use, and protect your personal data...\n\nWe may collect personal information including name, email address, IP address, and usage data.\n\nDATA SHARING\nWe may share your data with third-party service providers for analytics and service improvement.\n\nDATA RETENTION\nWe retain personal data for as long as necessary to fulfill the purposes outlined in this policy.\n\nUSER RIGHTS\nYou may request access, correction, or deletion of your personal data.",
            "analysis": {
                "riskLevel": "medium",
                "executiveSummary": "The privacy policy outlines data collection practices but lacks specificity in key areas.",
                "issues": [
                    {
                        "category": "privacy",
                        "severity": "high",
                        "title": "Vague Data Sharing Practices",
                        "explanation": "The policy states data may be shared with third parties but does not identify categories of recipients or safeguards.",
                        "suggestion": "Specify third-party categories and include contractual or technical safeguards.",
                        "clauseSnippet": "We may share your data with third-party service providers for analytics and service improvement."
                    }
                ],
                "missingClauses": [
                    "GDPR compliance details",
                    "Data breach notification"
                ],
                "recommendedActions": [
                    "Clarify third-party sharing",
                    "Add compliance references"
                ]
            },
            "createdAt": "2025-12-20T20:20:00.000Z",
            "updatedAt": "2025-12-20T20:20:00.000Z",
            "__v": 0
        },
        {
            "_id": "69470462e9c602a7748c53d3",
            "user_id": "12345",
            "filename": "nda.txt",
            "text": "NON-DISCLOSURE AGREEMENT\n\nThis Agreement is entered into between the Disclosing Party and the Receiving Party...\n\nCONFIDENTIAL INFORMATION\nIncludes all non-public business, technical, or financial information.\n\nOBLIGATIONS\nThe Receiving Party shall not disclose confidential information to any third party.\n\nTERM\nThis Agreement remains in effect indefinitely.",
            "analysis": {
                "riskLevel": "high",
                "executiveSummary": "The NDA is overly restrictive and favors the disclosing party.",
                "issues": [
                    {
                        "category": "termination",
                        "severity": "high",
                        "title": "Indefinite Confidentiality Obligation",
                        "explanation": "The agreement imposes confidentiality obligations with no end date, which is commercially unreasonable.",
                        "suggestion": "Introduce a fixed confidentiality period (e.g., 2–5 years).",
                        "clauseSnippet": "This Agreement remains in effect indefinitely."
                    }
                ],
                "missingClauses": [
                    "Exclusions to confidential information"
                ],
                "recommendedActions": [
                    "Limit duration",
                    "Add standard exclusions"
                ]
            },
            "createdAt": "2025-12-20T20:22:00.000Z",
            "updatedAt": "2025-12-20T20:22:00.000Z",
            "__v": 0
        },
        {
            "_id": "69470462e9c602a7748c53d4",
            "user_id": "12345",
            "filename": "saas_agreement.txt",
            "text": "SOFTWARE AS A SERVICE AGREEMENT\n\nThe Provider grants the Customer a limited license to use the software...\n\nPAYMENTS\nFees are billed monthly and are non-refundable.\n\nSERVICE AVAILABILITY\nNo uptime guarantees are provided.\n\nLIMITATION OF LIABILITY\nLiability is capped at fees paid in the last 30 days.",
            "analysis": {
                "riskLevel": "high",
                "executiveSummary": "The agreement heavily limits customer remedies and service guarantees.",
                "issues": [
                    {
                        "category": "liability",
                        "severity": "high",
                        "title": "Extremely Low Liability Cap",
                        "explanation": "Capping liability to 30 days of fees severely restricts customer recovery.",
                        "suggestion": "Increase the cap to at least 6–12 months of fees.",
                        "clauseSnippet": "Liability is capped at fees paid in the last 30 days."
                    }
                ],
                "missingClauses": [
                    "Service level agreement (SLA)"
                ],
                "recommendedActions": [
                    "Add uptime commitments",
                    "Rebalance liability cap"
                ]
            },
            "createdAt": "2025-12-20T20:24:00.000Z",
            "updatedAt": "2025-12-20T20:24:00.000Z",
            "__v": 0
        },
        {
            "_id": "69470462e9c602a7748c53d5",
            "user_id": "12345",
            "filename": "employment_contract.txt",
            "text": "EMPLOYMENT AGREEMENT\n\nThe Employee agrees to perform duties as assigned...\n\nNON-COMPETE\nThe Employee shall not engage in competing business for 3 years after termination.\n\nTERMINATION\nThe Employer may terminate employment at any time without cause.\n\nGOVERNING LAW\nThis Agreement is governed by the laws of India.",
            "analysis": {
                "riskLevel": "high",
                "executiveSummary": "The contract imposes excessive post-employment restrictions.",
                "issues": [
                    {
                        "category": "employment",
                        "severity": "high",
                        "title": "Overly Broad Non-Compete Clause",
                        "explanation": "A 3-year non-compete is likely unenforceable and restricts future employment.",
                        "suggestion": "Reduce duration and limit scope geographically and functionally.",
                        "clauseSnippet": "The Employee shall not engage in competing business for 3 years after termination."
                    }
                ],
                "missingClauses": [
                    "Severance terms"
                ],
                "recommendedActions": [
                    "Narrow non-compete",
                    "Add severance protections"
                ]
            },
            "createdAt": "2025-12-20T20:26:00.000Z",
            "updatedAt": "2025-12-20T20:26:00.000Z",
            "__v": 0
        }
    ]
}

export default ContractsOfUser;