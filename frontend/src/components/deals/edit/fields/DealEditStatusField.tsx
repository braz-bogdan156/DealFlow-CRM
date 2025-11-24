"use client";

import { DealStatus } from "@/types/enums";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export function DealEditStatusField({
  value,
}: {
  value: DealStatus;
}) {
  return (
    <div className="flex flex-col space-y-2">
      <Label>Status</Label>

      <Select defaultValue={value} name="status">
        <SelectTrigger>
          <SelectValue placeholder="Select status" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value={DealStatus.NEW}>NEW</SelectItem>
          <SelectItem value={DealStatus.IN_PROGRESS}>IN PROGRESS</SelectItem>
          <SelectItem value={DealStatus.WON}>WON</SelectItem>
          <SelectItem value={DealStatus.LOST}>LOST</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}