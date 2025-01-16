"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlService = void 0;
const common_1 = require("@nestjs/common");
const nanoid_1 = require("nanoid");
const prisma_service_1 = require("../prisma/prisma.service");
let UrlService = class UrlService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async shortenUrl(originalUrl) {
        const shortUrl = (0, nanoid_1.nanoid)(6);
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
    async redirect(shortUrl) {
        const data = await this.prisma.url.update({
            where: { shortUrl },
            data: { clickCount: { increment: 1 } },
        });
        return data.originalUrl;
    }
    async getInfo(shortUrl) {
        return await this.prisma.url.findUnique({
            where: { shortUrl },
            select: { clickCount: true, createdAt: true, originalUrl: true },
        });
    }
    async delete(shortUrl) {
        return this.prisma.url.delete({ where: { shortUrl } });
    }
};
exports.UrlService = UrlService;
exports.UrlService = UrlService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UrlService);
//# sourceMappingURL=url.service.js.map