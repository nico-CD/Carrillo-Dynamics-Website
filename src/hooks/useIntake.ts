import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { IntakeValues } from "@/types/intake";
import DOMPurify from "dompurify";

export const useIntake = () => {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);

    const sanitizeData = (data: IntakeValues): IntakeValues => {
        const sanitized = { ...data };
        Object.keys(sanitized).forEach((key) => {
            const val = sanitized[key as keyof IntakeValues];
            if (typeof val === "string") {
                (sanitized as any)[key] = DOMPurify.sanitize(val.trim());
            }
        });
        return sanitized;
    };

    const submitIntake = async (data: IntakeValues, step: 1 | 2 = 1) => {
        setIsLoading(true);
        try {
            const sanitizedData = sanitizeData(data);
            const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;

            // The Handshake: n8n Lead Generation Payload
            const payload = {
                lead_name: sanitizedData.firstName,
                lead_email: sanitizedData.email,
                company_name: sanitizedData.companyName,
                company_website: sanitizedData.companyWebsite,
                industry: sanitizedData.industry,
                bottleneck: sanitizedData.bottleneck,
                submittedAt: new Date().toISOString(),
                source: window.location.hostname,
                event_type: "lead_gen"
            };

            if (webhookUrl) {
                try {
                    await fetch(webhookUrl, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(payload)
                    });
                } catch (e) {
                    console.error("Webhook failure (silent):", e);
                }
            } else {
                console.log(`[Industrial Mono 2.7] Mock Submission (Step ${step}):`, payload);
            }

            // Simulate delay for high-agency processing feel
            await new Promise(resolve => setTimeout(resolve, 1500));
            return true;
        } catch (error) {
            console.error("Form submission error:", error);
            // We still return true to allow the user to proceed to the next step of the funnel
            return true;
        } finally {
            setIsLoading(false);
        }
    };

    return {
        isLoading,
        submitIntake,
    };
};
