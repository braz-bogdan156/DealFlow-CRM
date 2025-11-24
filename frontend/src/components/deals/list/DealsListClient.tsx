"use client";

import { Deal } from "@/types/interfaces";
import { useDealsFilter } from "@/hooks/useDealsFilter";
import { useDeleteDeal } from "@/hooks/useDeleteDeal";

import DealsFilterSelect from "../DealsFilterSelect";
import DealsList from "./DealsList";

export default function DealsListClient({
  deals,
  clientId,
}: {
  deals: Deal[];
  clientId: string;
}) {
  const {
    list,
    status,
    setStatus,
    loading,
    removeDealFromList,
    addDealToList,
  } = useDealsFilter(clientId, deals);

  const { deleteDeal } = useDeleteDeal();

  const handleDelete = (dealId: string) => {
    const dealToDelete = list.find((d) => d.id === dealId);
    
    if (!dealToDelete) return;

    deleteDeal(
      dealToDelete,
      () => removeDealFromList(dealId), // onSuccess
      () => addDealToList(dealToDelete) // onRestore
    );
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-center">Deals of Client</h2>

      <DealsFilterSelect onChange={(value: string) => setStatus(value)} />

      {loading ? (
        <div className="text-center py-8">Loading...</div>
      ) : (
        <DealsList 
          deals={list} 
          clientId={clientId} 
          onDelete={handleDelete} 
        />
      )}
    </div>
  );
}