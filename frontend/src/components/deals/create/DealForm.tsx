"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { DealsService } from "@/services/deals.services";
import { DealFormData } from "@/types/types";

import DealTitleField from "./fields/DealTitleField";
import DealAmountField from "./fields/DealAmountField";
import DealStatusSelect from "./DealStatusSelect";
import { DealStatus } from "@/types/enums";

export default function DealForm({ clientId }: { clientId: string }) {
  const router = useRouter();

  const form = useForm<DealFormData>({
    defaultValues: {
      title: "",
      amount: 0,
      status: DealStatus.NEW,
    },
  });

  const onSubmit = async (values: DealFormData) => {
    try {
      await DealsService.create(clientId, values);
      router.push(`/clients/${clientId}/deals`);
    } catch (error) {
      console.error(error);
      alert("Error creating deal");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <DealTitleField control={form.control} />
        <DealAmountField control={form.control} />
        <DealStatusSelect control={form.control} />

        <div className="flex gap-4 justify-end pt-4">
          <Button type="submit">Create</Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => router.back()}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
}