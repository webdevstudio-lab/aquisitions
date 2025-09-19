import { z } from 'zod';

export const signUpSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters long' })
    .max(225)
    .trim(),
  email: z
    .email({ message: 'Invalid email address' })
    .max(225)
    .toLowerCase()
    .trim(),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' })
    .max(50)
    .trim(),
  role: z.enum(['user', 'admin']).default('user'),
});

export const signInSchema = z.object({
  email: z
    .email({ message: 'Invalid email address' })
    .max(225)
    .toLowerCase()
    .trim(),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' })
    .max(50)
    .trim(),
});
