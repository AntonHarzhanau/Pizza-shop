import { z } from 'zod';

export const passwordSchema = z
  .string()
  .min(4, { message: 'The password must be at least 4 characters long.' });

export const formLoginSchema = z.object({
  email: z.string().email({ message: 'Enter correct email' }),
  password: passwordSchema,
});

export const formRegisterSchema = formLoginSchema
  .merge(
    z.object({
      fullname: z
        .string()
        .min(2, { message: 'Enter your first and last name' }),
      confirmPassword: passwordSchema,
    })
  )
  .refine((data) => data.password === data.confirmPassword, {
    message: "The passwords don't match",
    path: ['confirmPassword'],
  });

export type TFormLoginValues = z.infer<typeof formLoginSchema>;
export type TFormRegisterValues = z.infer<typeof formRegisterSchema>;
