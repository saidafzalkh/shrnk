import { PrismaService } from 'src/prisma/prisma.service';
export declare class UrlService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    shortenUrl(originalUrl: string): Promise<{
        shortUrl: string;
    }>;
    redirect(shortUrl: string): Promise<string>;
    getInfo(shortUrl: string): Promise<{
        originalUrl: string;
        createdAt: Date;
        clickCount: number;
    }>;
    delete(shortUrl: string): Promise<{
        id: string;
        shortUrl: string;
        originalUrl: string;
        createdAt: Date;
        clickCount: number;
    }>;
}
