
import { createSlug } from '@/lib/utils';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';


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
      role: 'Admin',
      achievements: {
        create: [
          {
            title: 'Bootcamp: Belajar React.js dari Dasar Hingga Mahir',
            url: 'https://res.cloudinary.com/drldcq7wa/image/upload/wpucourse-certificate-9TR92KAN_xv5ucz',
            issuedOn: '25 July 2025',
            publisher: 'WPU Course'
          },
          {
            title: 'Belajar Dasar Pemrograman Web',
            url: 'https://res.cloudinary.com/drldcq7wa/image/upload/v1779015895/Screenshot_2026-05-17_190326_thj390.png',
            issuedOn: '17 May 2026',
            publisher: 'Dicoding Indonesia'
          },
          {
            title: 'Fundamental of Assistant Web Developer',
            url: 'https://res.cloudinary.com/drldcq7wa/image/upload/v1779016391/Screenshot_2026-05-17_191256_ipwjvd.png',
            issuedOn: '11 March 2026',
            publisher: 'Digitalent'
          },
          {
            title: 'Belajar Dasar Pemrograman Javascript',
            url: 'https://res.cloudinary.com/drldcq7wa/image/upload/v1779506295/Screenshot_2026-05-23_111615_oqk5jz.png',
            issuedOn: '22 May 2026',
            publisher: 'Dicoding Indonesia'
          }
        ]
      },
      projects: {
        create: [
          {
            title: 'akmaldev.my.id',
            url: 'https://akmaldev.my.id',
            description: 'Personal website & portfolio, built from scratch using Next.js, TypeScript, Tailwind',
            image: 'https://res.cloudinary.com/drldcq7wa/image/upload/Screenshot_2025-11-21_110728_dglyag',
            slug: createSlug('akmaldev-my-id'),
            github: 'https://github.com/onlyadmirer',
            techStacks: {
              connect: [
                { name: 'TailwindCSS' },
                { name: 'Nextjs' },
                { name: 'Neon' },
                { name: 'Prisma' }
              ]
            }
          },
          {
            title: 'Nada Upacara Bali – Cultural Web App',
            url: 'https://nada-upacara-bali.vercel.app/',
            description: 'A modern web project that digitizes traditional Balinese ceremonial music.',
            image: 'https://res.cloudinary.com/drldcq7wa/image/upload/v1783132809/Screenshot_2026-07-04_103657_mrilqn.png',
            slug: createSlug('nada-upacara-bali-cultural-web-app'),
            github: null,
            techStacks: {
              connect: [
                { name: 'Nextjs' },
                { name: 'TailwindCSS' }
              ]
            }
          },
          {
            title: 'VELO',
            url: '',
            description: 'On Update',
            image: 'https://res.cloudinary.com/drldcq7wa/image/upload/v1779608822/Screenshot_2026-05-24_154533_xpmrml.png',
            slug: createSlug('velo'),
            github: 'https://github.com/Onlyadmirer/VELO.git',
            techStacks: {
              connect: [
                { name: 'Nextjs' }
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