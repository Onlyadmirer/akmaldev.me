/*
  Warnings:

  - You are about to drop the `_ProjectsToTechStacks` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `projectId` to the `TechStacks` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Achievements" DROP CONSTRAINT "Achievements_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Chat" DROP CONSTRAINT "Chat_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Projects" DROP CONSTRAINT "Projects_authorId_fkey";

-- DropForeignKey
ALTER TABLE "_ProjectsToTechStacks" DROP CONSTRAINT "_ProjectsToTechStacks_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProjectsToTechStacks" DROP CONSTRAINT "_ProjectsToTechStacks_B_fkey";

-- DropIndex
DROP INDEX "TechStacks_name_key";

-- AlterTable
ALTER TABLE "TechStacks" ADD COLUMN     "projectId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_ProjectsToTechStacks";

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Achievements" ADD CONSTRAINT "Achievements_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TechStacks" ADD CONSTRAINT "TechStacks_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;
