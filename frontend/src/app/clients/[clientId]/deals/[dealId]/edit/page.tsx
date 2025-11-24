"use client";

import { use } from "react";
import { useEditDeal } from "@/hooks/useEditDeal";
import { DealEditForm } from "@/components/deals/edit/DealEditForm";

export default function EditDealPage({
  params,
}: {
  params: Promise<{ clientId: string; dealId: string }>;
}) {
  const { clientId, dealId } = use(params);
  const { deal, loading, updateDeal } = useEditDeal (clientId, dealId);

  if (loading) return <div className="p-4">Loading...</div>;
  if (!deal) return <div className="p-4">Deal not found</div>;

  return (
    <DealEditForm
      deal={deal}
      onSubmit={updateDeal}
      onCancel={() => history.back()}
    />
  );
}