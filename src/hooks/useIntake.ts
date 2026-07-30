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
            // Use Formspree URL from env or fallback to the provided one
            const webhookUrl = import.meta.env.VITE_FORMSPREE_URL || "https://formspree.io/f/mzdnwklv";

            const payload = {
                Name: sanitizedData.firstName,
                Email: sanitizedData.email,
                Company: sanitizedData.companyName,
                Website: sanitizedData.companyWebsite,
                Industry: sanitizedData.industry,
                Bottleneck: sanitizedData.bottleneck,
                SubmittedAt: new Date().toISOString(),
                Source: window.location.hostname
            };

            try {
                await fetch(webhookUrl, {
                    method: "POST",
                    headers: { 
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(payload)
                });
            } catch (e) {
                console.error("Formspree submission failure:", e);
            }

            // Simulate slight delay for UX
            await new Promise(resolve => setTimeout(resolve, 1000));
            return true;
        } catch (error) {
            console.error("Form submission error:", error);
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
