import Image from "next/image";

function Intro() {
  return (
    <div className='py-6 space-y-4 border-b border-dashed border-primary/50'>
      <div className='leading-loose text-primary space-y-4'>
        <p>
          Hello there! Thank you for visiting my personal website. I’m Akmal, a
          student majoring in Information Systems at Hasanuddin University,
          Makassar. I’m a Fullstack Developer with a passion for building
          impactful software products. My stack includes modern frontend
          technologies like Next.js, TypeScript, and Tailwind CSS.
        </p>
        <p>
          I enjoy creating solutions that are both user-friendly and performant.
          Whether it’s building intuitive interfaces or architecting backend
          services, I aim to bring efficiency and clarity into every layer of
          the application. I’m a fast learner who thrives in dynamic
          environments, and I enjoy solving complex problems collaboratively.
        </p>
        <p>
          I believe that great communication and team synergy are key to success
          in software development. My experience has strengthened my technical
          and analytical skills, as well as my leadership qualities. I’m always
          excited to work in teams, learn from others, and contribute to
          meaningful projects.
        </p>
      </div>
      <div className='space-y-4'>
        <p className='leading-loose font-medium text-primary'>All the best,</p>
        <Image
          src={"/signature/Akmal.svg"}
          alt='signature'
          width={100}
          height={100}
          className='w-38 md:w-40 h-auto'
          priority
        />
      </div>
    </div>
  );
}

export default Intro;
