import { Injectable } from '@nestjs/common';
import { nanoid } from 'nanoid';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UrlService {
  constructor(private readonly prisma: PrismaService) {}

  async shortenUrl(originalUrl: string) {
    const shortUrl = nanoid(6);
    const baseUrl = 'http://localhost:4000';

    const data = await this.prisma.url.create({
      data: {
        originalUrl,
        shortUrl,
      },
    });

    return {
      shortUrl: `${baseUrl}/${data.shortUrl}`,
    };
  }

  async redirect(shortUrl: string) {
    const data = await this.prisma.url.update({
      where: { shortUrl },
      data: { clickCount: { increment: 1 } },
    });

    return data.originalUrl;
  }

  async getInfo(shortUrl: string) {
    return await this.prisma.url.findUnique({
      where: { shortUrl },
      select: { clickCount: true, createdAt: true, originalUrl: true },
    });
  }

  async delete(shortUrl: string) {
    return this.prisma.url.delete({ where: { shortUrl } });
  }
}
