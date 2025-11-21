
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
      achievements: {
        create: [
          {
            title: "Bootcamp: Belajar React.js dari Dasar Hingga Mahir",
            url: "https://learn.wpucourse.id/certificate/9TR92KAN",
            issuedOn: "25 July 2025",
            publisher: "WPU Course"
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