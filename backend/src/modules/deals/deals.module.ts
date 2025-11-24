import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deal } from './entities/deal.entity';
import { DealsService } from './deals.service';
import { DealsController } from './deals.controller';
import { Client } from '../clients/entities/client.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Deal, Client])],
  providers: [DealsService],
  controllers: [DealsController],
})
export class DealsModule {}
