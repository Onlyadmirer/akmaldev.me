"use client";

import { useContact } from "./useContact";
import { useFormSection } from "./useFormSection";

function FormSection() {
  const { register, handleSubmit, errors } = useContact();
  const { onSubmit } = useFormSection();

  return (
    <div className='py-6 space-y-4'>
      <h1 className='font-medium text-lg text-primary'>Or send me a message</h1>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='grid space-y-4 md:gap-4 grid-cols-1 md:grid-cols-2'
        >
          <div className='flex flex-col w-full row-start-1 gap-1 md:col-span-1'>
            <input
              type='text'
              placeholder='Name'
              required
              {...register("name")}
              className='rounded-lg px-4 py-2 border-3 w-full border-neutral-500'
            />
            {errors.name && (
              <div>
                <p className='text-xs pl-1 text-red-500'>
                  {errors.name.message}
                </p>
              </div>
            )}
          </div>
          <div className='felx flex-col row-start-2 md:row-start-1 w-full gap-1 md:col-span-1'>
            <input
              type='email'
              placeholder='Email'
              required
              {...register("email")}
              className='rounded-lg px-4 py-2 border-3 w-full border-neutral-500'
            />
            {errors.email && (
              <div>
                <p className='text-xs pl-1 text-red-500'>
                  {errors.email.message}
                </p>
              </div>
            )}
          </div>
          <div className='felx flex-col row-start-3 w-full md:row-start-2 md:col-span-2 '>
            <textarea
              placeholder='Message'
              required
              {...register("message")}
              className='rounded-lg px-4 py-2 border-3 w-full border-neutral-500'
            />
            {errors.email && (
              <div>
                <p className='text-xs pl-1 text-red-500'>
                  {errors.email.message}
                </p>
              </div>
            )}
          </div>
          <button
            type='submit'
            className='rounded-lg w-full py-2 text-neutral-200 cursor-pointer focus:ring-2 ring-neutral-500 focus:ring-offset-2  dark:text-neutral-800 font-medium bg-neutral-600 transition-all duration-300 ease-in-out hover:bg-neutral-400 dark:bg-neutral-300 col-span-2'
          >
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormSection;
