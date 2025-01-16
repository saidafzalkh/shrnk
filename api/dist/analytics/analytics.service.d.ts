import { PrismaService } from 'src/prisma/prisma.service';
export declare class AnalyticsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    analytics(shortUrl: string): Promise<{
        clickCount: number;
        analytics: {
            ipAddress: string;
        }[];
    }>;
}
