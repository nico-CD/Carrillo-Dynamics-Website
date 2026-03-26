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
            
            // Industrial Mono 2.2: Mock Submission to prevent garbage data
            console.log(`[Industrial Mono 2.2] Mock Submission (Step ${step}):`, {
                ...sanitizedData,
                submittedAt: new Date().toISOString(),
                source: window.location.hostname,
            });

            // Simulate 1.5s delay for high-agency processing feel
            await new Promise(resolve => setTimeout(resolve, 1500));

            return true;
        } catch (error) {
            console.error("Form submission error:", error);
            toast({
                variant: "destructive",
                title: "Submission Failed",
                description: "There was a problem sending your application. Please try again or email us directly.",
            });
            return false;
        } finally {
            setIsLoading(false);
        }
    };

    return {
        isLoading,
        submitIntake,
    };
};
