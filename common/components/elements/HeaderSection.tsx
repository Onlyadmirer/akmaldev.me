interface HeaderProps {
  title: string;
  description: string;
}

function HeaderSection({ title, description }: HeaderProps) {
  return (
    <div className='space-y-2 border-b pb-6 border-primary/50 border-dashed'>
      <h1 className='text-2xl md:text-3xl font-medium text-primary'>{title}</h1>
      <h2 className='text-muted-foreground md:text-lg'>{description}</h2>
    </div>
  );
}

export default HeaderSection;
