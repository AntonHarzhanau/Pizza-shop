import { z } from 'zod';

export const checkoutFormSchema = z.object({
  firstName: z.string().nonempty({ message: 'Enter your name' }),
  lastName: z.string().nonempty({ message: 'Enter your last name' }),
  email: z.string().trim().email({ message: 'Entre correct email' }),
  phone: z.string().min(10, { message: 'Entre correct phone number' }),
  address: z.string().min(5, { message: 'Entre correct address' }),
  comment: z.string().optional(),
});

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;
