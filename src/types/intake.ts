import * as z from "zod";

export const intakeSchema = z.object({
    firstName: z.string().min(1, "Required"),
    email: z.string().email("Valid email required"),
    companyName: z.string().min(1, "Required"),
    companyWebsite: z.string().min(1, "Required"),
    industry: z.enum([
        "HVAC / Plumbing / Electrical",
        "Restoration / Contracting",
        "Property Management / Real Estate",
        "Logistics / Fleet",
        "Healthcare / Clinics",
        "Other"
    ]),
    bottleneck: z.enum([
        "Missed Calls & Lost Leads",
        "Too Much Paperwork",
        "Scheduling Nightmares",
        "Slow Follow-ups",
        "Other"
    ]),
    consent: z.boolean().refine(val => val === true, "Must consent to process data"),
});

export type IntakeValues = z.infer<typeof intakeSchema>;
