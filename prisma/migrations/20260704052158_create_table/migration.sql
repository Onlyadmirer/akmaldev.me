/*
  Warnings:

  - The primary key for the `Achievements` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Projects` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `TechStacks` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `_ProjectsToTechStacks` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "_ProjectsToTechStacks" DROP CONSTRAINT "_ProjectsToTechStacks_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProjectsToTechStacks" DROP CONSTRAINT "_ProjectsToTechStacks_B_fkey";

-- AlterTable
ALTER TABLE "Achievements" DROP CONSTRAINT "Achievements_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Achievements_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Achievements_id_seq";

-- AlterTable
ALTER TABLE "Projects" DROP CONSTRAINT "Projects_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Projects_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Projects_id_seq";

-- AlterTable
ALTER TABLE "TechStacks" DROP CONSTRAINT "TechStacks_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "TechStacks_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "TechStacks_id_seq";

-- AlterTable
ALTER TABLE "_ProjectsToTechStacks" DROP CONSTRAINT "_ProjectsToTechStacks_AB_pkey",
ALTER COLUMN "A" SET DATA TYPE TEXT,
ALTER COLUMN "B" SET DATA TYPE TEXT,
ADD CONSTRAINT "_ProjectsToTechStacks_AB_pkey" PRIMARY KEY ("A", "B");

-- AddForeignKey
ALTER TABLE "_ProjectsToTechStacks" ADD CONSTRAINT "_ProjectsToTechStacks_A_fkey" FOREIGN KEY ("A") REFERENCES "Projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectsToTechStacks" ADD CONSTRAINT "_ProjectsToTechStacks_B_fkey" FOREIGN KEY ("B") REFERENCES "TechStacks"("id") ON DELETE CASCADE ON UPDATE CASCADE;
