
import { createSlug } from "@/lib/utils";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";


const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  await prisma.user.create({
    data: {
      name: 'Akmal',
      email: 'akmalrbc6@gmail.com',
      role: "Admin",
      achievements: {
        create: [
          {
            title: "Bootcamp: Belajar React.js dari Dasar Hingga Mahir",
            url: "https://res.cloudinary.com/drldcq7wa/image/upload/wpucourse-certificate-9TR92KAN_xv5ucz",
            issuedOn: "25 July 2025",
            publisher: "WPU Course"
          }
        ]
      },
      projects: {
        create: [
          {
            title: "akmaldev.my.id",
            url: "https://akmaldev.my.id",
            description: "Personal website & portfolio, built from scratch using Next.js, TypeScript, Tailwind",
            image: "https://res.cloudinary.com/drldcq7wa/image/upload/Screenshot_2025-11-21_110728_dglyag",
            slug: createSlug("akmaldev-my-id"),
            stack: {
              create: [
                { name: "TailwindCSS" },
                { name: "Nextjs" }
              ]
            }
          }
        ]
      }
    },
  });
  console.log('Seeding done!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });