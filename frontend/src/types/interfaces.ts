import { DealStatus } from "@/types/enums";

export interface Client {
id: string;
name: string;
email: string;
phone?: string;
createdAt: string;
updatedAt: string;
deals?: Deal[];
}

export interface ClientDetailsProps {
  client: Client;
}


export interface Deal {
id: string;
title: string;
amount: number;
status: DealStatus;
clientId: string;
createdAt: string;
updatedAt: string;
}

export interface ErrorStateProps {
  message: string;
}
