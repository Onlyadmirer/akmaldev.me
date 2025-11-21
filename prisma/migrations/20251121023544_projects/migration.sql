/*
  Warnings:

  - You are about to drop the column `role` on the `Projects` table. All the data in the column will be lost.
  - Added the required column `authorId` to the `Projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Projects" DROP COLUMN "role",
ADD COLUMN     "authorId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
