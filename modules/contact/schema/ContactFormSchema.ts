import z from "zod"

export const ContactFormSchema = z.object({
  name: z.string("name is required").min(3, "at least 3 characters"),
  email: z.string("email is required").email("invalid email"),
  message: z.string().min(1, "Email is required")
})

export type ContactType = z.infer<typeof ContactFormSchema>