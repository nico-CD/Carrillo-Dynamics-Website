import * as z from "zod";

export const intakeSchema = z.object({
    firstName: z.string().min(1, "Required"),
    email: z.string().email("Valid email required"),
    howCanWeHelp: z.string().min(1, "Required"),
});

export type IntakeValues = z.infer<typeof intakeSchema>;
