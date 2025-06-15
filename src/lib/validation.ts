import { z } from "zod";

export const registerSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email"),
    password: z
        .string()
        .min(8, "Minimum 8 characters")
        .regex(/[A-Z]/, "Must contain uppercase letter")
        .regex(/\d/, "Must contain a digit"),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
