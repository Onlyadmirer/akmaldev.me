/*
  Warnings:

  - You are about to drop the column `projectId` on the `TechStacks` table. All the data in the column will be lost.
  - Added the required column `techStacksId` to the `Projects` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TechStacks" DROP CONSTRAINT "TechStacks_projectId_fkey";

-- AlterTable
ALTER TABLE "Projects" ADD COLUMN     "techStacksId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "TechStacks" DROP COLUMN "projectId";

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_techStacksId_fkey" FOREIGN KEY ("techStacksId") REFERENCES "TechStacks"("id") ON DELETE CASCADE ON UPDATE CASCADE;
