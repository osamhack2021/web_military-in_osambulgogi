/*
  Warnings:

  - Added the required column `use_timetable` to the `Facility` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Facility" ADD COLUMN     "use_timetable" BOOLEAN NOT NULL;
