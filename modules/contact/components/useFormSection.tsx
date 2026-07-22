"use client";

import { submitForm } from "@/modules/contact/action";
import { ContactType } from "@/modules/contact/schema/ContactFormSchema";
import { toast } from "sonner";

export const useFormSection = (t?: (key: string) => string) => {
  const onSubmit = async (formData: ContactType) => {
    try {
      const result = await submitForm(formData);

      if (result?.success) {
        toast.success(t ? t("success") : "Successfully send email");
      } else {
        toast.error(result?.error || (t ? t("failed") : "Failed to send message."));
      }
    } catch (error) {
      console.error("Submission Error:", error);
      toast(t ? t("unexpectedError") : "An unexpected error occurred.");
    }
  };

  return { onSubmit };
};
