"use client";

import { Deal } from "@/types/interfaces";
import DealCard from "../DealCard";

interface DealsListProps {
  deals: Deal[];
  clientId: string;
  onDelete: (dealId: string) => void;
}

export default function DealsList({ deals, clientId, onDelete }: DealsListProps) {
  if (deals.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No deals found
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {deals.map((deal) => (
        <DealCard
          key={deal.id}
          deal={deal}
          clientId={clientId}
          onDelete={() => onDelete(deal.id)}
        />
      ))}
    </div>
  );
}