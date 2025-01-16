import { Module } from '@nestjs/common';
import { UrlModule } from './url/url.module';
import { PrismaModule } from './prisma/prisma.module';
import { AnalyticsModule } from './analytics/analytics.module';

@Module({
  imports: [UrlModule, PrismaModule, AnalyticsModule],
})
export class AppModule {}
