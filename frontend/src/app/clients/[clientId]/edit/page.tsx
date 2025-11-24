"use client";

import { use, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Card } from "@/components/ui/card";
import { ClientsService } from "@/services/clients.service";
import EditClientForm from "@/components/clients/edit/EditClientForm";

import type { ClientFormData } from "@/types/types";

export default function EditClientPage({
  params,
}: {
  params: Promise<{ clientId: string }>;
}) {
  const { clientId } = use(params);
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const form = useForm<ClientFormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  useEffect(() => {
    ClientsService.getOne(clientId).then(({ data }) => {
      form.reset(data);
      setLoading(false);
    });
  }, [clientId]);

  const onSubmit = async (values: ClientFormData) => {
    try {
      await ClientsService.update(clientId, values);
      alert("Client updated successfully!");
      router.push(`/clients/${clientId}`);
    } catch (error) {
      console.error(error);
      alert("Failed to update client");
    }
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-50 dark:bg-black px-4">
      <Card className="w-full max-w-2xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center">
          Edit Client
        </h1>

        <EditClientForm
          form={form}
          onSubmit={onSubmit}
          onCancel={() => router.back()}
        />
      </Card>
    </div>
  );
}