"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

interface ProjectRowProps {
  index: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
}

function ProjectRow({
  index,
  slug,
  title,
  description,
  image,
  stack,
}: ProjectRowProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/projects/${slug}`}
      className='group block py-6 transition-all duration-200'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='flex items-center justify-between'>
        <div className='flex items-baseline gap-6'>
          <span className='font-heading text-sm font-medium tabular-nums text-foreground-secondary/40'>
            {String(index).padStart(2, "0")}
          </span>
          <h2 className='font-heading text-xl font-medium tracking-tight text-foreground transition-colors duration-200 group-hover:text-foreground-secondary md:text-2xl'>
            {title}
          </h2>
        </div>
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          className='text-foreground-secondary/40 transition-all duration-200 group-hover:translate-x-1 group-hover:text-foreground'
        >
          <path
            d='M7 4L13 10L7 16'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className='overflow-hidden'
          >
            <div className='pt-4 pb-2 grid gap-6 md:grid-cols-[1fr_200px]'>
              <div>
                <p className='text-sm leading-relaxed text-foreground-secondary'>
                  {description}
                </p>
                <div className='mt-3 flex flex-wrap gap-x-3 gap-y-1'>
                  {stack.map((tech) => (
                    <span
                      key={tech}
                      className='text-xs text-foreground-secondary/60'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className='relative aspect-16/10 w-full overflow-hidden bg-surface'>
                <Image
                  src={image}
                  alt={title}
                  fill
                  className='object-cover'
                  sizes='200px'
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  );
}

export default ProjectRow;
