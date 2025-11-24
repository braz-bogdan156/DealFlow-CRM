"use client";

import { useEffect, useState } from "react";
import { ClientsService } from "@/services/clients.service";
import { DealsService } from "@/services/deals.services";
import { Deal } from "@/types/interfaces";
import { DealStatus } from "@/types/enums";
import { useRouter } from "next/navigation";

export function useEditDeal (clientId: string, dealId: string) {
  const [deal, setDeal] = useState<Deal | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Load deal
  useEffect(() => {
    async function fetchDeal() {
      try {
        const res = await ClientsService.getOne(clientId);
        const found = res.data.deals?.find((d: Deal) => d.id === dealId);
        setDeal(found || null);
        setLoading(false);
      } catch (e) {
        console.error(e);
        alert("Failed to load deal");
        setLoading(false);
      }
    }

    fetchDeal();
  }, [clientId, dealId]);

  
  async function updateDeal(formData: FormData) {
    try {
      await DealsService.update(dealId, {
        title: formData.get("title") as string,
        amount: Number(formData.get("amount")),
        status: formData.get("status") as DealStatus,
      });

      alert("Deal updated!");
      router.push(`/clients/${clientId}/deals`);
    } catch (e) {
      console.error(e);
      alert("Failed to update deal");
    }
  }

  return {
    deal,
    loading,
    updateDeal,
  };
}