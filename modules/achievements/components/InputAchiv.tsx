"use client";

import Button from "@/common/components/ui/Button";
import { Input } from "@/common/components/ui/input";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { AchivAdd, addAchiv } from "../services/addAchiv";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

function InputAchiv() {
  const { data: session } = useSession();

  const { register, handleSubmit } = useForm<AchivAdd>();

  const onSubmit = async (formData: AchivAdd) => {
    if (!session?.user) {
      return "login dulu bro";
    }

    const dataLengkap: AchivAdd = {
      ...formData,
      userId: session.user.id as string,
    };

    const response = await addAchiv(dataLengkap);

    if (response.success) {
      toast.success("Add data successfully");
    } else {
      toast.error(response.error);
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
        <Input {...register("title")} placeholder='Title' type='text' />
        <Input {...register("url")} placeholder='Url' type='text' />
        <Input {...register("issuedOn")} placeholder='Issued on' type='text' />
        <Input {...register("publisher")} placeholder='Publisher' type='text' />
        <Button
          type='submit'
          className='flex items-center justify-center hover:bg-neutral-800 dark:hover:bg-neutral-400 bg-neutral-900 text-neutral-300 dark:bg-neutral-300 dark:text-neutral-900'
        >
          <div className=' flex -translate-x-2 flex-row justify-center items-center gap-2'>
            <FaPlus />
            <p>Add</p>
          </div>
        </Button>
      </form>
    </div>
  );
}

export default InputAchiv;
