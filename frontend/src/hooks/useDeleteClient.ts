"use client";

import { useEffect, useState } from "react";
import { ClientsService } from "@/services/clients.service";
import { Client } from "@/types/interfaces";
import { useRouter } from "next/navigation";

export function useDeleteClient(clientId: string) {
  const router = useRouter();
  const [client, setClient] = useState<Client | null>(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    ClientsService.getOne(clientId)
      .then(({ data }) => {
        setClient(data);
        setLoading(false);
      })
      .catch(() => {
        alert("Failed to load client");
        router.push("/clients");
      });
  }, [clientId, router]);

  async function handleDelete() {
    if (
      !confirm(
        "Are you sure you want to delete this client? All related deals will also be deleted."
      )
    ) {
      return;
    }

    setDeleting(true);

    try {
      await ClientsService.remove(clientId);
      router.push("/clients");
    } catch (error) {
      console.error(error);
      alert("Failed to delete client");
      setDeleting(false);
    }
  }

  return {
    client,
    loading,
    deleting,
    handleDelete,
  };
}