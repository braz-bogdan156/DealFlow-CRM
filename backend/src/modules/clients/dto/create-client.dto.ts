import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateClientDto {
  @ApiProperty({
    example: 'ТОВ Альфа-Буд',
    description: 'Client name',
    maxLength: 150,
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 150)
  name: string;

  @ApiProperty({
    example: 'info@alfabud.com',
    description: 'Client email (must be unique)',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '+380671234567',
    description: 'Client phone number',
    maxLength: 30,
    required: false,
  })
  @IsOptional()
  @IsString()
  @Length(0, 30)
  phone?: string;
}
