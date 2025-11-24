import { AppDataSource } from '../config/data-source';
import { Client } from '../modules/clients/entities/client.entity';
import { Deal } from '../modules/deals/entities/deal.entity';
import { DealStatus } from '../shared/enums/deal-status.enum';
import { faker } from '@faker-js/faker';

async function seed() {
  await AppDataSource.initialize();

  const clientRepo = AppDataSource.getRepository(Client);
  const dealRepo = AppDataSource.getRepository(Deal);

  await dealRepo.query('TRUNCATE "deals" CASCADE');
  await clientRepo.query('TRUNCATE "clients" CASCADE');

  for (let i = 0; i < 30; i++) {
    const client = clientRepo.create({
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phone: faker.helpers.replaceSymbols('+38 0## ### ## ##'),
    });
    await clientRepo.save(client);

    for (let j = 0; j < 2; j++) {
      const deal = dealRepo.create({
        title: faker.commerce.productName(),
        amount: Number(faker.finance.amount({ min: 100, max: 5000, dec: 2 })),
        status: faker.helpers.arrayElement([
          DealStatus.NEW,
          DealStatus.IN_PROGRESS,
          DealStatus.WON,
          DealStatus.LOST,
        ]),
        client: client,
      });
      await dealRepo.save(deal);
    }
  }

  console.log('✅ Seed completed');
  process.exit(0);
}

seed();
