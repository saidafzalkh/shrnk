-- DropForeignKey
ALTER TABLE "Analytics" DROP CONSTRAINT "Analytics_urlId_fkey";

-- AddForeignKey
ALTER TABLE "Analytics" ADD CONSTRAINT "Analytics_urlId_fkey" FOREIGN KEY ("urlId") REFERENCES "Url"("id") ON DELETE CASCADE ON UPDATE CASCADE;
