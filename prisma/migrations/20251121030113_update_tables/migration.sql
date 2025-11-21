/*
  Warnings:

  - Added the required column `image` to the `Projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Projects" ADD COLUMN     "image" TEXT NOT NULL;
