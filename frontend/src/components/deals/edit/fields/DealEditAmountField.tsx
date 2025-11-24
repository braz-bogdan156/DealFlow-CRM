"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function DealEditAmountField({ value }: { value: number }) {
  return (
    <div className="flex flex-col space-y-2">
      <Label htmlFor="amount">Amount</Label>
      <Input
        id="amount"
        type="number"
        name="amount"
        defaultValue={value}
        required
      />
    </div>
  );
}