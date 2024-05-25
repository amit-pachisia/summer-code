import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
});

export { loginSchema };
