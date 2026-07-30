import { useState } from "react";
import DOMPurify from "dompurify";

export const useVideoGate = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isUnlocked, setIsUnlocked] = useState(false);

    const submitEmail = async (email: string) => {
        setIsLoading(true);
        try {
            const sanitizedEmail = DOMPurify.sanitize(email.trim());
            const webhookUrl = import.meta.env.VITE_FORMSPREE_URL || "https://formspree.io/f/mzdnwklv";

            const payload = {
                Email: sanitizedEmail,
                Source: window.location.hostname,
                Context: "Zero-Spam Video Gate",
                SubmittedAt: new Date().toISOString(),
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
            await new Promise(resolve => setTimeout(resolve, 800));
            setIsUnlocked(true);
            return true;
        } catch (error) {
            console.error("Video gate submission error:", error);
            // Even if it fails, unlock the video so the user isn't stuck
            setIsUnlocked(true);
            return true;
        } finally {
            setIsLoading(false);
        }
    };

    return {
        isLoading,
        isUnlocked,
        submitEmail,
    };
};
