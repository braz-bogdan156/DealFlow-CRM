"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Client } from "@/types/interfaces";

export default function DeleteClientCard({
  client,
  deleting,
  onDelete,
  onCancel,
}: {
  client: Client;
  deleting: boolean;
  onDelete: () => void;
  onCancel: () => void;
}) {
  return (
    <Card className="max-w-2xl w-full p-6 space-y-6 bg-white dark:bg-zinc-900">
      <h1 className="text-2xl font-bold">Delete Client</h1>

      <div className="p-4 rounded-md bg-yellow-100 dark:bg-yellow-900 border border-yellow-300 dark:border-yellow-700">
        <h3 className="font-semibold mb-2">⚠️ Warning</h3>
        <p>You are about to delete the following client:</p>

        <ul className="list-disc pl-5 mt-3 text-sm space-y-1">
          <li>
            <strong>Name:</strong> {client.name}
          </li>
          <li>
            <strong>Email:</strong> {client.email}
          </li>
          <li>
            <strong>Phone:</strong> {client.phone || "N/A"}
          </li>
          <li>
            <strong>Total Deals:</strong> {client.deals?.length || 0}
          </li>
        </ul>

        <p className="mt-3 font-semibold">
          This action cannot be undone. All related deals will be deleted.
        </p>
      </div>

      <div className="flex gap-4 pt-4 justify-end">
        <Button
          onClick={onDelete}
          disabled={deleting}
          variant="destructive"
        >
          {deleting ? "Deleting..." : "Delete Client"}
        </Button>

        <Button
          variant="outline"
          onClick={onCancel}
          disabled={deleting}
        >
          Cancel
        </Button>
      </div>
    </Card>
  );
}