import SectionHeading from "@/common/components/elements/SectionHeading";

const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Go",
  "Tailwind CSS",
  "Prisma",
  "PostgreSQL",
  "Git",
  "Docker",
];

function Skills() {
  return (
    <section className='mx-auto max-w-6xl px-6 py-20 border-t border-border'>
      <SectionHeading title='Stack' subtitle='Technologies I work with' />
      <div className='flex flex-wrap gap-x-2 gap-y-2'>
        {skills.map((skill, i) => (
          <span key={skill} className='text-sm text-foreground-secondary'>
            {skill}
            {i < skills.length - 1 && (
              <span className='mx-2 text-foreground-secondary/30'>·</span>
            )}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
