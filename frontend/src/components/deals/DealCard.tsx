"use client";

import { Deal } from "@/types/interfaces";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function DealCard({
  deal,
  clientId,
  onDelete,
}: {
  deal: Deal;
  clientId: string;
  onDelete: () => void;
}) {
  return (
    <Card className="p-4 sm:flex sm:justify-between sm:items-center max-w-md mx-auto">
  <div>
    <p className="font-semibold">{deal.title}</p>
    <p className="text-sm text-muted-foreground">
      {deal.status} — {deal.amount}
    </p>
  </div>

  <div className="flex gap-2 mt-4 sm:mt-0">
    <Button variant="destructive" onClick={onDelete}>
      🗑 Delete
    </Button>

    <Button variant="outline" asChild>
      <Link href={`/clients/${clientId}/deals/${deal.id}/edit`}>
        ✏️ Edit
      </Link>
    </Button>
  </div>
</Card>
  );
}