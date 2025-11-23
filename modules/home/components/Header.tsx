function Header() {
  return (
    <div className='pb-6 space-y-4 border-b border-primary/50'>
      <div className='space-y-2'>
        <h1 className='text-3xl font-semibold'>Hi I{"'"}m Akmal</h1>
        <ul className='flex flex-col ml-5 list-disc gap-1 lg:gap-12 text-muted-foreground lg:flex-row'>
          <li>Based in Enrekang, Indonesia ID</li>
          <li>Onsite</li>
        </ul>
      </div>
      <div>
        <p className='leading-loose text-primary'>
          I’m an experienced and dedicated Fullstack Developer with a strong
          focus on building scalable and high quality digital products. I craft
          responsive and accessible user interfaces using Next.js, TypeScript,
          and Tailwind CSS, while developing reliable backend services with Node
          js. I’m a collaborative engineer with attention to detail, committed
          to delivering clean, efficient, and high-performance solutions across
          platforms.
        </p>
      </div>
    </div>
  );
}

export default Header;
