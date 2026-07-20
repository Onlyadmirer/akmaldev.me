interface HeaderProps {
  title: string;
  description: string;
}

function HeaderSection({ title, description }: HeaderProps) {
  return (
    <div className='mb-16'>
      <h1 className='font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl'>
        {title}
      </h1>
      <p className='mt-3 max-w-lg text-base text-foreground-secondary'>
        {description}
      </p>
    </div>
  );
}

export default HeaderSection;
