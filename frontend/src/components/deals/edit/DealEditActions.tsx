"use client";

import { Button } from "@/components/ui/button";

export function DealEditActions({
  onCancel,
}: {
  onCancel: () => void;
}) {
  return (
    <div className="flex gap-3 justify-end pt-2">
      <Button type="submit">Save Changes</Button>
      <Button type="button" variant="outline" onClick={onCancel}>
        Cancel
      </Button>
    </div>
  );
}