import { ContactType } from "@/modules/contact/schema/ContactFormSchema";

export function emailTemplate(data: ContactType): string {
    const { name, email, message } = data;

    return `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333333; padding: 20px; border: 1px solid #dddddd; border-radius: 8px;">
            
            <h2 style="color: #0056b3; border-bottom: 2px solid #eeeeee; padding-bottom: 10px;">
                Pemberitahuan Pesan Kontak Baru 🔔
            </h2>
            
            <p style="margin-bottom: 20px;">
                Anda telah menerima pesan baru melalui formulir kontak dari website Anda. Berikut detail lengkapnya:
            </p>
            
            <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #0056b3; margin-bottom: 20px;">
                <p style="margin: 0 0 10px 0;">
                    <strong>Nama Pengirim:</strong> ${name}
                </p>
                <p style="margin: 0 0 10px 0;">
                    <strong>Alamat Email:</strong> <a href="mailto:${email}" style="color: #0056b3; text-decoration: none;">${email}</a>
                </p>
                <p style="margin: 0;">
                    <strong>Subjek:</strong> Pesan baru dari ${name}
                </p>
            </div>
            
            <h3 style="color: #333333; border-bottom: 1px solid #eeeeee; padding-bottom: 5px;">
                Isi Pesan:
            </h3>
            <p style="white-space: pre-wrap; margin-top: 10px;">
                ${message}
            </p>

            <p style="margin-top: 30px; font-size: 0.9em; color: #777777; border-top: 1px solid #eeeeee; padding-top: 15px;">
                ---
                Ini adalah pesan otomatis dari sistem formulir kontak Anda.
            </p>
        </div>
    `;
}