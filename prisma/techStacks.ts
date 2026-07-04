
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';


const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {

  await prisma.techStacks.createMany({
    data: [
      { name: 'Nextjs' },
      { name: 'Prisma' },
      { name: 'TailwindCSS' },
      { name: 'Postgres' },
      { name: 'Neon' }
    ]
  })

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