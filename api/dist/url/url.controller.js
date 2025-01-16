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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlController = void 0;
const common_1 = require("@nestjs/common");
const url_service_1 = require("./url.service");
const shorten_dto_1 = require("./dto/shorten.dto");
let UrlController = class UrlController {
    constructor(service) {
        this.service = service;
    }
    async shortenUrl(shortenDto) {
        return await this.service.shortenUrl(shortenDto.originalUrl);
    }
    async redirectUrl(res, shortUrl) {
        try {
            const url = await this.service.redirect(shortUrl);
            if (url)
                return res.redirect(url);
        }
        catch (error) {
            console.error(error);
            throw new common_1.NotFoundException();
        }
    }
    async getInfoUrl(shortUrl) {
        try {
            const data = await this.service.getInfo(shortUrl);
            if (!data)
                throw new common_1.NotFoundException();
            return data;
        }
        catch (error) {
            console.error(error);
            if (error instanceof common_1.NotFoundException)
                throw new common_1.NotFoundException();
            throw new common_1.InternalServerErrorException();
        }
    }
    async deleteUrl(shortUrl) {
        try {
            const data = await this.service.delete(shortUrl);
            console.log(data);
            if (!data)
                throw new common_1.NotFoundException();
            return data;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException)
                throw new common_1.NotFoundException();
            throw new common_1.InternalServerErrorException();
        }
    }
};
exports.UrlController = UrlController;
__decorate([
    (0, common_1.Post)('shorten'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shorten_dto_1.ShortenDto]),
    __metadata("design:returntype", Promise)
], UrlController.prototype, "shortenUrl", null);
__decorate([
    (0, common_1.Get)(':shortUrl'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('shortUrl')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UrlController.prototype, "redirectUrl", null);
__decorate([
    (0, common_1.Get)('info/:shortUrl'),
    __param(0, (0, common_1.Param)('shortUrl')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UrlController.prototype, "getInfoUrl", null);
__decorate([
    (0, common_1.Delete)('delete/:shortUrl'),
    __param(0, (0, common_1.Param)('shortUrl')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UrlController.prototype, "deleteUrl", null);
exports.UrlController = UrlController = __decorate([
    (0, common_1.Controller)('/'),
    __metadata("design:paramtypes", [url_service_1.UrlService])
], UrlController);
//# sourceMappingURL=url.controller.js.map