import Image from "next/image";
import signature from "@/public/images/profile/Akmal.svg";

function Intro() {
  return (
    <div className='mb-20'>
      <h1 className='font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl'>
        About
      </h1>
      <div className='mt-10 grid gap-10 md:grid-cols-[300px_1fr] md:gap-16'>
        <div className='relative aspect-3/4 w-full overflow-hidden bg-surface'>
          <Image
            src='/images/profile/akmal.jpg'
            alt='Akmal'
            fill
            className='object-cover'
            sizes='300px'
            priority
          />
        </div>
        <div className='space-y-5'>
          <p className='text-base leading-relaxed text-foreground-secondary'>
            Hello! I&apos;m Akmal, a Full-Stack Developer based in Indonesia
            with a passion for building impactful digital products. I specialize
            in modern frontend technologies like Next.js, React, and TypeScript,
            while also crafting reliable backend services.
          </p>
          <p className='text-base leading-relaxed text-foreground-secondary'>
            I&apos;m currently pursuing a degree in Information Systems at
            Hasanuddin University, Makassar. My approach combines clean,
            performant code with thoughtful user experiences because great
            software is both functional and enjoyable to use.
          </p>
          <p className='text-base leading-relaxed text-foreground-secondary'>
            I thrive in collaborative environments and believe that the best
            products emerge from clear communication and shared vision. Whether
            it&apos;s architecting a backend API or fine-tuning a frontend
            interface, I bring the same level of care and attention to detail.
          </p>
          <div className='pt-4'>
            <p className='text-sm text-foreground-secondary'>All the best,</p>
            <Image
              src={signature}
              alt='signature'
              width={100}
              height={100}
              className='mt-2 h-10 w-auto opacity-80'
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
