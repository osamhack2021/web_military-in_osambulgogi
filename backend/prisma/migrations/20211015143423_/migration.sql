/*
  Warnings:

  - You are about to drop the column `date` on the `Work` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Work` table. All the data in the column will be lost.
  - You are about to drop the `FacilityTime` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `open_end` to the `Facility` table without a default value. This is not possible if the table is not empty.
  - Added the required column `open_start` to the `Facility` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weekend_open_end` to the `Facility` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weekend_open_start` to the `Facility` table without a default value. This is not possible if the table is not empty.
  - Added the required column `group_id` to the `Work` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "FacilityTime" DROP CONSTRAINT "FacilityTime_facility_id_fkey";

-- DropForeignKey
ALTER TABLE "Work" DROP CONSTRAINT "Work_user_id_fkey";

-- AlterTable
ALTER TABLE "Facility" ADD COLUMN     "open_end" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "open_start" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "weekend_open_end" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "weekend_open_start" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Work" DROP COLUMN "date",
DROP COLUMN "user_id",
ADD COLUMN     "group_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "FacilityTime";

-- CreateTable
CREATE TABLE "Worksheet" (
    "id" SERIAL NOT NULL,
    "work_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "date" DATE NOT NULL,

    CONSTRAINT "Worksheet_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Work" ADD CONSTRAINT "Work_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Worksheet" ADD CONSTRAINT "Worksheet_work_id_fkey" FOREIGN KEY ("work_id") REFERENCES "Work"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Worksheet" ADD CONSTRAINT "Worksheet_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
