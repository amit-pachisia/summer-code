import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
});

const signupSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(), 
  password: z.string().min(6),
});

export { loginSchema, signupSchema };
