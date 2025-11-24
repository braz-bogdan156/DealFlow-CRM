"use server";

import { DealsService } from "@/services/deals.services";
import { DealStatus } from "@/types/enums";

export async function handleCreateDeal(
  clientId: string,
  formData: FormData
) {
  return DealsService.create(clientId, {
    title: formData.get("title") as string,
    amount: Number(formData.get("amount")),
    status: formData.get("status") as DealStatus,
  });
}