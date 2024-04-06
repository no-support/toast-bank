-- CreateTable
CREATE TABLE "Card" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "corpName" TEXT NOT NULL,
    "tags" TEXT[],
    "benefit" TEXT[],
    "promotionTitle" TEXT,
    "promotionTerms" TEXT,
    "payback" TEXT,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);
