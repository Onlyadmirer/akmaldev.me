'use server'

import { ContactFormSchema, ContactType } from "./schema/ContactFormSchema";
import { Resend } from "resend"
import { emailTemplate } from "./utils/emailTemplate";


export async function submitForm(data: ContactType) {

  const validation = ContactFormSchema.safeParse(data);
  if (!validation.success) {
    const fieldErrors = validation.error.flatten().fieldErrors;
    return {
      validationErrors: fieldErrors,
      error: "Input tidak valid. Periksa kembali form Anda."
    }
  }

  const { name } = data;

  const resend = new Resend(process.env.RESEND_API_KEY);

  const emailHtml = emailTemplate(data)

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "",
      to: process.env.RESEND_TO_EMAIL || "",
      subject: `Pesan baru dari ${name}`,
      html: emailHtml
    })
    return { success: "Email berhasil dikirim" }
  } catch (error) {
    console.error(error)
    return { error: "gagal mengirim email coba lagi" }
  }
}