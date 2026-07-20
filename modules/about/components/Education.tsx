function Education() {
  return (
    <div>
      <h2 className='font-heading text-xl font-semibold tracking-tight text-foreground'>
        Education
      </h2>
      <div className='mt-6 space-y-8'>
        <div className='border-l border-border pl-6'>
          <div className='flex items-baseline gap-3'>
            <span className='font-heading text-sm font-medium text-foreground-secondary'>
              2021 — 2024
            </span>
          </div>
          <h3 className='mt-2 font-heading text-lg font-medium tracking-tight text-foreground'>
            SMAN 3 Enrekang
          </h3>
          <p className='mt-1 text-sm text-foreground-secondary'>
            Senior High School · Science Major
          </p>
          <p className='mt-0.5 text-sm text-foreground-secondary/60'>
            Enrekang, South Sulawesi, Indonesia
          </p>
        </div>
        <div className='border-l border-border pl-6'>
          <div className='flex items-baseline gap-3'>
            <span className='font-heading text-sm font-medium text-foreground-secondary'>
              2024 — Present
            </span>
          </div>
          <h3 className='mt-2 font-heading text-lg font-medium tracking-tight text-foreground'>
            Hasanuddin University
          </h3>
          <p className='mt-1 text-sm text-foreground-secondary'>
            Bachelor&apos;s in Information Systems
          </p>
          <p className='mt-0.5 text-sm text-foreground-secondary/60'>
            Makassar, South Sulawesi, Indonesia
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
