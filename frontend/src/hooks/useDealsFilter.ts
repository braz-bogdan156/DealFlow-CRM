import { useState, useEffect } from "react";
import { DealsService } from "@/services/deals.services";
import { Deal } from "@/types/interfaces";

export function useDealsFilter(clientId: string, initialDeals: Deal[]) {
  const [list, setList] = useState(initialDeals);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDeals = async () => {
      setLoading(true);
      try {
        const res = await DealsService.getAll(clientId, status);
        setList(res.data);
      } catch (error) {
        console.error("Failed to fetch deals:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDeals();
  }, [clientId, status]);

  const removeDealFromList = (dealId: string) => {
    setList((prev) => prev.filter((d) => d.id !== dealId));
  };

  const addDealToList = (deal: Deal) => {
    setList((prev) => [...prev, deal]);
  };

  return {
    list,
    status,
    setStatus,
    loading,
    removeDealFromList,
    addDealToList,
  };
}