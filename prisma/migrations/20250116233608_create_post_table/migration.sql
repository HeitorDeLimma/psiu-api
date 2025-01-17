/*
  Warnings:

  - You are about to drop the column `studentId` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `posts` table. All the data in the column will be lost.
  - Added the required column `type` to the `comments_reactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner_id` to the `posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `published_at` to the `posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `posts_reactions` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "EnumTypeReaction" AS ENUM ('APOIO', 'ENTENDO_VOCE', 'FORCA', 'TRISTEZA', 'ESTAMOS_JUNTOS');

-- DropIndex
DROP INDEX "posts_studentId_key";

-- AlterTable
ALTER TABLE "comments_reactions" ADD COLUMN     "type" "EnumTypeReaction" NOT NULL;

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "studentId",
DROP COLUMN "updated_at",
ADD COLUMN     "owner_id" TEXT NOT NULL,
ADD COLUMN     "published_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "posts_reactions" ADD COLUMN     "type" "EnumTypeReaction" NOT NULL;

-- AlterTable
ALTER TABLE "students" ALTER COLUMN "birthdate" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "students"("id") ON DELETE CASCADE ON UPDATE CASCADE;
