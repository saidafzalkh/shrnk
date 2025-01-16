import { Controller, Get, Param } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';

@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly service: AnalyticsService) {}

  @Get(':shortUrl')
  async analytics(@Param('shortUrl') shortUrl: string) {
    try {
      return this.service.analytics(shortUrl);
    } catch (error) {
      return error;
    }
  }
}
