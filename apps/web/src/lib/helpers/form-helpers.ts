import { z } from "zod";

export const loginFormSchema = z.object({
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(10, { message: "Phone number must not exceed 10 digits" }),
  password: z
    .string()
    .min(6, { message: "Password should be at least 6 characters" }),
});
