import { ApiProperty } from '@nestjs/swagger';
import { DealStatus } from '../../../shared/enums/deal-status.enum';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateDealDto {
  @ApiProperty({ example: 'Розробка сайту', description: 'Deal title' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 5000, description: 'Deal amount (must be > 0)' })
  @IsNumber()
  @IsPositive()
  amount: number;

  @ApiProperty({
    enum: DealStatus,
    example: DealStatus.NEW,
    description: 'Deal status',
  })
  @IsEnum(DealStatus)
  status: DealStatus;

  @ApiProperty({
    example: 'b3f1e9c2-7a2d-4e9a-9a1c-123456789abc',
    description: 'Client ID (UUID)',
  })
  @IsUUID()
  clientId: string;
}
