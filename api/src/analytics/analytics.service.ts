import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AnalyticsService {
  constructor(private readonly prisma: PrismaService) {}

  async analytics(shortUrl: string) {
    return this.prisma.url.findUnique({
      where: { shortUrl },
      select: {
        analytics: {
          orderBy: { accessedAt: 'desc' },
          take: 5,
          select: { ipAddress: true },
        },
        clickCount: true,
      },
    });
  }
}
