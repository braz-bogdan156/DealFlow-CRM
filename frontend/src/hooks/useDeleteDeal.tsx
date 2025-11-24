import { useState } from "react";
import { toast, Id } from "react-toastify";
import { DealsService } from "@/services/deals.services";
import { Deal } from "@/types/interfaces";

export function useDeleteDeal() {
  const [deletingDealId, setDeletingDealId] = useState<string | null>(null);

  const deleteDeal = async (
    deal: Deal,
    onSuccess: () => void,
    onRestore: () => void
  ) => {
    setDeletingDealId(deal.id);
    onSuccess(); 

    let hasBeenRestored = false;
    // eslint-disable-next-line prefer-const
    let toastId: Id;

    const handleUndo = () => {
      if (!hasBeenRestored) {
        hasBeenRestored = true;
        onRestore();
        toast.dismiss(toastId);
        toast.success("Deal restored!");
      }
    };

    toastId = toast.info(
      <DeleteToastContent 
        dealTitle={deal.title} 
        onUndo={handleUndo} 
      />,
      {
        autoClose: 5000,
        closeButton: true,
        closeOnClick: false,
      }
    );

    setTimeout(async () => {
      if (!hasBeenRestored) {
        try {
          await DealsService.remove(deal.id);
          setDeletingDealId(null);
        } catch (error) {
          onRestore();
          toast.error("Failed to delete deal");
          setDeletingDealId(null);
        }
      }
    }, 5000);
  };

  return { deleteDeal, deletingDealId };
}


function DeleteToastContent({ 
  dealTitle, 
  onUndo 
}: { 
  dealTitle: string; 
  onUndo: () => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <strong>Deal deleted</strong>
        <p className="text-sm text-gray-600">{dealTitle}</p>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onUndo();
        }}
        className="bg-white hover:bg-gray-100 text-blue-600 font-semibold px-3 py-1 rounded border border-blue-600 transition-colors"
      >
        Undo
      </button>
    </div>
  );
}