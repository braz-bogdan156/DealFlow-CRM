"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ClientsService } from "@/services/clients.service";
import { Client } from "@/types/interfaces";
import { Button } from "@/components/ui/button";

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const limit = 10;

  useEffect(() => {
    const fetchClients = async () => {
      const res = await ClientsService.getAll(page, limit);
      setClients(res.data);
      setHasMore(res.data.length === limit);
    };

    fetchClients();
  }, [page]);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Clients List</h1>

      <ul className="space-y-2">
        {clients.map((c) => (
          <li key={c.id} className="border p-2 rounded hover:bg-gray-100">
            <Link href={`/clients/${c.id}`} className="block">
              {c.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex gap-4 mt-6">
        <Button
          disabled={page === 1}
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
        >
          ← Prev
        </Button>

        <span className="flex items-center">Page {page}</span>

        <Button
          disabled={!hasMore}
          onClick={() => setPage((p) => p + 1)}
        >
          Next →
        </Button>
      </div>
    </div>
  );
}