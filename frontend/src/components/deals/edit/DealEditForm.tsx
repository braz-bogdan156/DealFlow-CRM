"use client";

import { Deal } from "@/types/interfaces";
import { DealEditTitleField } from "@/components/deals/edit/fields/DealEditTitleField";
import { DealEditAmountField } from "@/components/deals/edit/fields/DealEditAmountField";
import { DealEditStatusField } from "@/components/deals/edit/fields/DealEditStatusField";
import { DealEditActions } from "@/components/deals/edit/DealEditActions";

export function DealEditForm({
  deal,
  onSubmit,
  onCancel,
}: {
  deal: Deal;
  onSubmit: (formData: FormData) => void;
  onCancel: () => void;
}) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit(formData);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-md mx-auto p-6 border rounded-xl shadow-sm"
    >
      <h1 className="text-2xl font-semibold">Edit Deal</h1>

      <DealEditTitleField value={deal.title} />
      <DealEditAmountField value={deal.amount} />
      <DealEditStatusField value={deal.status} />

      <DealEditActions onCancel={onCancel} />
    </form>
  );
}