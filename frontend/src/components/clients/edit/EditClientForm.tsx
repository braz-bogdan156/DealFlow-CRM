"use client";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import NameField from "./fields/NameField";
import EmailField from "./fields/EmailField";
import PhoneField from "./fields/PhoneField";
import type { ClientFormData } from "@/types/types";
import type { UseFormReturn } from "react-hook-form";

export default function EditClientForm({
  form,
  onSubmit,
  onCancel,
}: {
  form: UseFormReturn<ClientFormData>;
  onSubmit: (data: ClientFormData) => void;
  onCancel: () => void;
}) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <NameField control={form.control} />
        <EmailField control={form.control} />
        <PhoneField control={form.control} />

        <div className="flex gap-4 justify-end pt-4">
          <Button type="submit">Save Changes</Button>
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
}