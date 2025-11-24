import Link from "next/link";
import { ClientActionsProps } from "@/types/types";


export default function ClientActions({ clientId }: ClientActionsProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
      <Link
        href={`/clients/${clientId}/edit`}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
      >
        ✏ Edit
      </Link>

      <Link
        href={`/clients/${clientId}/deals`}
        className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors"
      >
        💼 Deals
      </Link>

      <Link
        href={`/clients/${clientId}/deals/create`}
        className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
      >
        ➕ Add Deal
      </Link>

      <Link
        href={`/clients/${clientId}/delete`}
        className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
      >
        ❌ Delete
      </Link>
    </div>
  );
}