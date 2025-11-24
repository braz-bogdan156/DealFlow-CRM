import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOptionsWhere } from 'typeorm';
import { Deal } from './entities/deal.entity';
import { Client } from '../clients/entities/client.entity';

import { CreateDealDto } from './dto/create-deal.dto';
import { FilterDealsDto } from './dto/filter-deals.dto';
import { UpdateDealDto } from './dto/update-deal.dto';

@Injectable()
export class DealsService {
  constructor(
    @InjectRepository(Deal)
    private readonly dealRepository: Repository<Deal>,
    @InjectRepository(Client)
    private readonly clientRepo: Repository<Client>,
  ) {}

  async create(dto: CreateDealDto) {
    const client = await this.clientRepo.findOne({
      where: { id: dto.clientId },
    });

    if (!client) {
      throw new NotFoundException('Client not found');
    }

    const deal = this.dealRepository.create({ ...dto, client });
    return this.dealRepository.save(deal);
  }

  async findAll(query: FilterDealsDto) {
    const { status, clientId, page = 1, limit = 10 } = query;

    const where: FindOptionsWhere<Deal> = {};

    if (status) where.status = status;
    if (clientId) where.client = { id: clientId };

    return this.dealRepository.find({
      where,
      relations: ['client'],
      skip: (page - 1) * limit,
      take: limit,
      order: { createdAt: 'DESC' },
    });
  }
  update(id: string, dto: UpdateDealDto) {
    return this.dealRepository.update(id, dto);
  }

  async remove(id: string) {
    await this.dealRepository.delete(id);
    return { message: 'Deal deleted' };
  }
}
