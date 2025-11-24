"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { useDeleteClient } from "@/hooks/useDeleteClient";
import DeleteClientCard from "@/components/clients/DeleteClientCard";

export default function DeleteClientPage({
  params,
}: {
  params: Promise<{ clientId: string }>;
}) {
  const { clientId } = use(params);
  const router = useRouter();
  const { client, loading, deleting, handleDelete } = useDeleteClient(clientId);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-lg">
        Loading...
      </div>
    );

  if (!client)
    return (
      <div className="flex justify-center items-center h-screen text-lg">
        Client not found
      </div>
    );

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-zinc-50 dark:bg-black">
      <DeleteClientCard
        client={client}
        deleting={deleting}
        onDelete={handleDelete}
        onCancel={() => router.back()}
      />
    </div>
  );
}