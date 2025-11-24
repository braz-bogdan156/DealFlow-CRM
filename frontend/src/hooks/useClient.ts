import { useEffect, useState } from "react";
import { ClientsService } from "@/services/clients.service";
import { Client } from "@/types/interfaces";

export function useClient(clientId: string) {
  const [client, setClient] = useState<Client | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchClient() {
      try {
        setLoading(true);
        const { data } = await ClientsService.getOne(clientId);
        setClient(data);
        setError(null);
      } catch (err) {
        console.error("Failed to load client:", err);
        setError("Failed to load client data");
      } finally {
        setLoading(false);
      }
    }

    fetchClient();
  }, [clientId]);

  return { client, loading, error };
}