/*
  Warnings:

  - You are about to drop the column `techStacksId` on the `Projects` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `TechStacks` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Projects" DROP CONSTRAINT "Projects_techStacksId_fkey";

-- AlterTable
ALTER TABLE "Projects" DROP COLUMN "techStacksId";

-- CreateTable
CREATE TABLE "_ProjectsToTechStacks" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ProjectsToTechStacks_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ProjectsToTechStacks_B_index" ON "_ProjectsToTechStacks"("B");

-- CreateIndex
CREATE UNIQUE INDEX "TechStacks_name_key" ON "TechStacks"("name");

-- AddForeignKey
ALTER TABLE "_ProjectsToTechStacks" ADD CONSTRAINT "_ProjectsToTechStacks_A_fkey" FOREIGN KEY ("A") REFERENCES "Projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectsToTechStacks" ADD CONSTRAINT "_ProjectsToTechStacks_B_fkey" FOREIGN KEY ("B") REFERENCES "TechStacks"("id") ON DELETE CASCADE ON UPDATE CASCADE;
