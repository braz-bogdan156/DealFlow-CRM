"use client";

import { Select, SelectContent, SelectItem } from "@/components/ui/select";

export default function DealsFilterSelect({
  onChange,
}: {
  onChange: (value: string) => void;
}) {
  return (
    <Select
      defaultValue="ALL"
      onValueChange={(value) => onChange(value === "ALL" ? "" : value)}
    >
      <SelectContent>
        <SelectItem value="ALL">All</SelectItem>
        <SelectItem value="NEW">New</SelectItem>
        <SelectItem value="IN_PROGRESS">In Progress</SelectItem>
        <SelectItem value="WON">Won</SelectItem>
        <SelectItem value="LOST">Lost</SelectItem>
      </SelectContent>
    </Select>
  );
}