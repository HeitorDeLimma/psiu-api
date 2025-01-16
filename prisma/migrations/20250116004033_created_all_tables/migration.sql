-- CreateTable
CREATE TABLE "posts" (
    "id" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comments" (
    "id" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "posts_reactions" (
    "id" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "reacted_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "posts_reactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comments_reactions" (
    "id" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,
    "reacted_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "comments_reactions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "posts_studentId_key" ON "posts"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "comments_studentId_key" ON "comments"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "comments_postId_key" ON "comments"("postId");

-- CreateIndex
CREATE UNIQUE INDEX "posts_reactions_studentId_key" ON "posts_reactions"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "posts_reactions_postId_key" ON "posts_reactions"("postId");

-- CreateIndex
CREATE UNIQUE INDEX "comments_reactions_studentId_key" ON "comments_reactions"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "comments_reactions_commentId_key" ON "comments_reactions"("commentId");
