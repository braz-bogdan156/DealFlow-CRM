"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function DealEditTitleField({ value }: { value: string }) {
  return (
    <div className="flex flex-col space-y-2">
      <Label htmlFor="title">Title</Label>
      <Input id="title" name="title" defaultValue={value} required />
    </div>
  );
}