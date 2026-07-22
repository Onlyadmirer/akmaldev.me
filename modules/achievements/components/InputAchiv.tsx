"use client";

import Button from "@/common/components/ui/Button";
import { Input } from "@/common/components/ui/input";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { AchivAdd } from "@/types/userTypes";
import { useTranslations } from "next-intl";

function InputAchiv() {
  const t = useTranslations("AchievementsPage");
  const { data: session } = useSession();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<AchivAdd>();

  const onSubmit = async (formData: AchivAdd) => {
    if (!session?.user) {
      toast.error(t("toast.loginFirst"));
      return;
    }
    const dataLengkap: AchivAdd = {
      ...formData,
      userId: session?.user.id as string,
    };
    try {
      await fetch("/api/achievements", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataLengkap),
      });
      reset();
      toast.success(t("toast.success"));
    } catch (error) {
      console.log(error);
      toast.error(t("toast.failed"));
    }
  };

  return (
    <div
      className='w-full
     h-full flex items-center justify-center'
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='p-4 gap-4 flex flex-col'
      >
        <Input
          {...register("achiv.title")}
          placeholder={t("inputTitle")}
          type='text'
          disabled={isSubmitting}
        />
        <Input
          {...register("achiv.url")}
          placeholder={t("inputUrl")}
          type='text'
          disabled={isSubmitting}
        />
        <Input
          {...register("achiv.issuedOn")}
          placeholder={t("inputIssuedOn")}
          type='text'
          disabled={isSubmitting}
        />
        <Input
          {...register("achiv.publisher")}
          placeholder={t("inputPublisher")}
          type='text'
          disabled={isSubmitting}
        />
        <Button
          type='submit'
          disabled={isSubmitting}
          className='flex items-center justify-center hover:bg-neutral-800 dark:hover:bg-neutral-400 bg-neutral-900 text-neutral-300 dark:bg-neutral-300 dark:text-neutral-900'
        >
          <div className=' flex -translate-x-2 flex-row justify-center items-center gap-2'>
            <FaPlus />
            <p>{t("add")}</p>
          </div>
        </Button>
      </form>
    </div>
  );
}

export default InputAchiv;
