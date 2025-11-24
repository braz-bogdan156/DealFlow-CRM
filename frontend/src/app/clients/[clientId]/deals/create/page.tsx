"use client";

import { use } from "react";
import { Card } from "@/components/ui/card";
import DealForm from "@/components/deals/create/DealForm";

export default function CreateDealPage({
  params,
}: {
  params: Promise<{ clientId: string }>;
}) {
  const { clientId } = use(params);

  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-50 dark:bg-black px-4">
      <Card className="w-full max-w-2xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-zinc-800 dark:text-zinc-100">
          Create Deal
        </h1>

        <DealForm clientId={clientId} />
      </Card>
    </div>
  );
}