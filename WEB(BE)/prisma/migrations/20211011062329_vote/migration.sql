/*
  Warnings:

  - You are about to drop the column `downvote` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `upvote` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `downvote` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `upvote` on the `Comment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Article" DROP COLUMN "downvote",
DROP COLUMN "upvote";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "downvote",
DROP COLUMN "upvote";

-- CreateTable
CREATE TABLE "Vote" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "article_id" INTEGER NOT NULL,
    "comment_id" INTEGER,
    "is_upvote" BOOLEAN NOT NULL,

    CONSTRAINT "Vote_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_article_id_fkey" FOREIGN KEY ("article_id") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_comment_id_fkey" FOREIGN KEY ("comment_id") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
