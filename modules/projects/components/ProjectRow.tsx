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
      className='group block py-5 transition-all duration-200 md:py-6'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='flex items-center justify-between gap-4'>
        <div className='flex items-baseline gap-4 min-w-0 md:gap-6'>
          <span className='font-heading text-xs font-medium tabular-nums text-foreground-secondary/60 md:text-sm'>
            {String(index).padStart(2, "0")}
          </span>
          <h2 className='font-heading text-lg font-medium tracking-tight text-foreground transition-colors duration-200 truncate group-hover:text-foreground-secondary md:text-2xl'>
            {title}
          </h2>
        </div>

        {/* Thumbnail always visible */}
        <div className='relative h-10 w-16 shrink-0 overflow-hidden bg-surface ring-1 ring-border md:h-12 md:w-20'>
          <Image
            src={image}
            alt={title}
            fill
            className='object-cover transition-transform duration-300 group-hover:scale-105'
            sizes='80px'
          />
        </div>
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
            <div className='pt-3 pb-1 pl-10 md:pl-14'>
              <p className='text-sm leading-relaxed text-foreground-secondary'>
                {description}
              </p>
              <div className='mt-2 flex flex-wrap gap-x-3 gap-y-1'>
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className='text-xs px-4 border py-1 border-border rounded-full text-foreground-secondary'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  );
}

export default ProjectRow;
