/*
  Warnings:

  - Made the column `description` on table `Projects` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Projects" ALTER COLUMN "description" SET NOT NULL;
