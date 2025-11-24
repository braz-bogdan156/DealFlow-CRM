import { DealStatus } from '@/types/enums';
import { Deal } from './interfaces';

export type ClientFormData = {
  name: string;
  email: string;
  phone: string;
};

export type DealFormData = {
  title: string;
  amount: number;
  status: DealStatus;
};

export type ClientActionsProps = Pick<Deal, "clientId">;