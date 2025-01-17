/*
  Warnings:

  - You are about to drop the `comments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `comments_reactions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `posts_reactions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "comments";

-- DropTable
DROP TABLE "comments_reactions";

-- DropTable
DROP TABLE "posts_reactions";

-- DropEnum
DROP TYPE "EnumTypeReaction";
