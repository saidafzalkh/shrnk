import { UrlService } from './url.service';
import { Response } from 'express';
import { ShortenDto } from './dto/shorten.dto';
export declare class UrlController {
    private readonly service;
    constructor(service: UrlService);
    shortenUrl(shortenDto: ShortenDto): Promise<{
        shortUrl: string;
    }>;
    redirectUrl(res: Response, shortUrl: string): Promise<void>;
    getInfoUrl(shortUrl: string): Promise<{
        originalUrl: string;
        createdAt: Date;
        clickCount: number;
    }>;
    deleteUrl(shortUrl: string): Promise<{
        id: string;
        shortUrl: string;
        originalUrl: string;
        createdAt: Date;
        clickCount: number;
    }>;
}
