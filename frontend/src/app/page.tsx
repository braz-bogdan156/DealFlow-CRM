import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-15 text-center">
      <h1 className="text-3xl font-bold">Welcome to CRM App</h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        Manage your <strong>Clients</strong> and <strong>Deals</strong> easily.
      </p>

      <div className="flex flex-col gap-15 text-lg">
        <Link href="/clients" className="p-3 rounded bg-blue-600 text-white">
          👥 View Clients
        </Link>
        <Link href="/clients/create" className="p-3 rounded bg-green-600 text-white">
          ➕ Create Client
        </Link>
       </div>
    </div>
  );
}