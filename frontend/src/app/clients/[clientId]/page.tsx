"use client";

import { use } from "react";
import { useClient } from "@/hooks/useClient";
import LoadingState from "@/components/clients/details/Loading";
import ErrorState from "@/components/clients/details/ErrorState";
import ClientDetails from "@/components/clients/details/ClientDetails";
import ClientActions from "@/components/clients/details/ClientActions";

export default function Page({
  params,
}: {
  params: Promise<{ clientId: string }>;
}) {
  const { clientId } = use(params);
  const { client, loading, error } = useClient(clientId);

  if (loading) return <LoadingState />;
  if (error || !client) return <ErrorState message={error || "Client not found"} />;

  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-50 dark:bg-black px-4">
      <div className="w-full max-w-2xl bg-white dark:bg-zinc-900 p-8 rounded-lg shadow space-y-6">
        <h1 className="text-3xl font-bold text-center text-zinc-800 dark:text-zinc-100">
          Client Details
        </h1>

        <ClientDetails client={client} />

        <hr className="border-zinc-300 dark:border-zinc-700" />

        <ClientActions clientId={clientId} />
      </div>
    </div>
  );
}