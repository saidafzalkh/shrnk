import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class ShortenDto {
  @IsNotEmpty()
  @IsString()
  @IsUrl()
  originalUrl: string;
}
