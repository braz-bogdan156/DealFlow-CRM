import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, IsUUID } from 'class-validator';
import { DealStatus } from 'src/shared/enums/deal-status.enum';

export class FilterDealsDto {
  @ApiPropertyOptional({
    enum: DealStatus,
    description: 'Filter by deal status',
  })
  @IsOptional()
  @IsEnum(DealStatus)
  status?: DealStatus;

  @ApiPropertyOptional({
    example: 'b3f1e9c2-7a2d-4e9a-9a1c-123456789abc',
    description: 'Filter by client ID',
  })
  @IsOptional()
  @IsUUID()
  clientId?: string;

  @ApiPropertyOptional({
    example: 1,
    description: 'Page number for pagination',
  })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  page?: number;

  @ApiPropertyOptional({
    example: 10,
    description: 'Limit per page for pagination',
  })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  limit?: number;
}
