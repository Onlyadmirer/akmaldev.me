"use client";

import { useContact } from "./useContact";
import { useFormSection } from "./useFormSection";

function FormSection() {
  const { register, handleSubmit, errors } = useContact();
  const { onSubmit } = useFormSection();

  return (
    <div>
      <h2 className='font-heading text-lg font-semibold tracking-tight text-foreground'>
        Send a message
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-6 space-y-5'>
        <div>
          <input
            type='text'
            placeholder='Name'
            {...register("name")}
            className='w-full border-b border-border bg-transparent pb-2 text-sm text-foreground placeholder-foreground-secondary/60 outline-none transition-colors duration-200 focus:border-foreground'
          />
          {errors.name && (
            <p className='mt-1 text-xs text-red-500'>{errors.name.message}</p>
          )}
        </div>
        <div>
          <input
            type='email'
            placeholder='Email'
            {...register("email")}
            className='w-full border-b border-border bg-transparent pb-2 text-sm text-foreground placeholder-foreground-secondary/60 outline-none transition-colors duration-200 focus:border-foreground'
          />
          {errors.email && (
            <p className='mt-1 text-xs text-red-500'>{errors.email.message}</p>
          )}
        </div>
        <div>
          <textarea
            placeholder='Message'
            rows={4}
            {...register("message")}
            className='w-full resize-none border-b border-border bg-transparent pb-2 text-sm text-foreground placeholder-foreground-secondary/60 outline-none transition-colors duration-200 focus:border-foreground'
          />
          {errors.message && (
            <p className='mt-1 text-xs text-red-500'>
              {errors.message.message}
            </p>
          )}
        </div>
        <button
          type='submit'
          className='inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-foreground transition-colors duration-200 hover:text-foreground-secondary'
        >
          Send Message
          <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
            <path
              d='M2 8H14M14 8L9 3M14 8L9 13'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default FormSection;
