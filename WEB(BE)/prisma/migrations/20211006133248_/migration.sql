/*
  Warnings:

  - You are about to drop the column `admin_type` on the `User` table. All the data in the column will be lost.
  - Added the required column `user_type` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('NONE', 'ADMIN', 'SUPER_ADMIN');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "admin_type",
ADD COLUMN     "user_type" "UserType" NOT NULL;

-- DropEnum
DROP TYPE "AdminType";
