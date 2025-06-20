/*
  Warnings:

  - Added the required column `content` to the `Habit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Record` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Habit" ADD COLUMN     "completed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "content" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Record" ADD COLUMN     "title" TEXT NOT NULL;
