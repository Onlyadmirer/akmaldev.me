interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className='mb-10'>
      <h2 className='font-heading text-2xl font-semibold tracking-tight text-foreground'>
        {title}
      </h2>
      {subtitle && (
        <p className='mt-1 text-sm text-foreground-secondary'>{subtitle}</p>
      )}
    </div>
  );
}

export default SectionHeading;
