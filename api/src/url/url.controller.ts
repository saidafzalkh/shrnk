import {
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  NotFoundException,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { UrlService } from './url.service';
import { Response } from 'express';
import { ShortenDto } from './dto/shorten.dto';

@Controller('/')
export class UrlController {
  constructor(private readonly service: UrlService) {}

  @Post('shorten')
  async shortenUrl(@Body() shortenDto: ShortenDto) {
    return await this.service.shortenUrl(shortenDto.originalUrl);
  }

  @Get(':shortUrl')
  async redirectUrl(@Res() res: Response, @Param('shortUrl') shortUrl: string) {
    try {
      const url = await this.service.redirect(shortUrl);

      if (url) return res.redirect(url);
    } catch (error) {
      console.error(error);
      throw new NotFoundException();
    }
  }

  @Get('info/:shortUrl')
  async getInfoUrl(@Param('shortUrl') shortUrl: string) {
    try {
      const data = await this.service.getInfo(shortUrl);

      if (!data) throw new NotFoundException();

      return data;
    } catch (error) {
      console.error(error);

      if (error instanceof NotFoundException) throw new NotFoundException();

      throw new InternalServerErrorException();
    }
  }

  @Delete('delete/:shortUrl')
  async deleteUrl(@Param('shortUrl') shortUrl: string) {
    try {
      const data = await this.service.delete(shortUrl);
      console.log(data);
      if (!data) throw new NotFoundException();

      return data;
    } catch (error) {
      if (error instanceof NotFoundException) throw new NotFoundException();

      throw new InternalServerErrorException();
    }
  }
}
