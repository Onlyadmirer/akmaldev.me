interface sectionHeaderProps {
  className?: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
}

function SubHeaderSection({ icon, title, description }: sectionHeaderProps) {
  return (
    <div className='space-y-2'>
      <div className='flex flex-row items-center gap-2'>
        {icon ? <i>{icon}</i> : null}
        <h1 className='text-2xl font-medium text-primary capitalize'>
          {title}
        </h1>
      </div>
      <p className='text-muted-foreground font-medium'>{description}</p>
    </div>
  );
}

export default SubHeaderSection;
