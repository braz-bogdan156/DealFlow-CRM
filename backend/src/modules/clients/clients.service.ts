import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepo: Repository<Client>,
  ) {}

  create(dto: CreateClientDto) {
    const client = this.clientRepo.create(dto);
    return this.clientRepo.save(client);
  }

  findAll(page = 1, limit = 10) {
    return this.clientRepo.find({
      skip: (page - 1) * limit,
      take: limit,
      relations: ['deals'],
    });
  }

  findOne(id: string) {
    return this.clientRepo.findOne({
      where: { id },
      relations: ['deals'],
    });
  }

  update(id: string, dto: UpdateClientDto) {
    return this.clientRepo.update(id, dto);
  }

  async remove(id: string) {
    await this.clientRepo.delete(id);
    return { message: 'Client deleted' };
  }
}
