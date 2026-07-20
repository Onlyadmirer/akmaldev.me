import Image from "next/image";

function Education() {
  return (
    <div>
      <h2 className='text-xl font-semibold tracking-tight font-heading text-foreground'>
        Education
      </h2>
      <div className='mt-8 space-y-10'>
        <div className='flex flex-col items-center gap-2 text-center md:text-start md:flex-row md:gap-6'>
          <div className='relative w-24 h-24 overflow-hidden shrink-0'>
            <Image
              src='/images/about/sman3ekg.png'
              alt='SMAN 3 Enrekang'
              fill
              className='object-contain p-1.5'
              sizes='56px'
            />
          </div>
          <div>
            <h3 className='mt-1 text-lg font-medium tracking-tight font-heading text-foreground'>
              SMAN 3 Enrekang
            </h3>
            <span className='text-xs font-medium font-heading text-foreground-secondary/60'>
              2021 - 2024
            </span>
            <p className='mt-0.5 text-sm text-foreground-secondary'>
              Senior High School · Science Major
            </p>
            <p className='text-sm text-foreground-secondary/60'>
              Enrekang, South Sulawesi, Indonesia
            </p>
          </div>
        </div>
        <hr />
        <div className='flex flex-col items-center gap-2 text-center md:text-start md:flex-row md:gap-6'>
          <div className='relative w-24 h-24 overflow-hidden shrink-0'>
            <Image
              src='/images/about/hasanuddin.PNG'
              alt='Hasanuddin University'
              fill
              className='object-contain p-1.5'
              sizes='56px'
            />
          </div>
          <div>
            <span className='text-xs font-medium font-heading text-foreground-secondary/60'>
              2024 - Present
            </span>
            <h3 className='mt-1 text-lg font-medium tracking-tight font-heading text-foreground'>
              Hasanuddin University
            </h3>
            <p className='mt-0.5 text-sm text-foreground-secondary'>
              Bachelor&apos;s in Information Systems
            </p>
            <p className='text-sm text-foreground-secondary/60'>
              Makassar, South Sulawesi, Indonesia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
