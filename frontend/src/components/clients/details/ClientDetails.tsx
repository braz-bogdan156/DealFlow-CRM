import { ClientDetailsProps } from "@/types/interfaces";

export default function ClientDetails({ client }: ClientDetailsProps) {
  return (
    <div className="space-y-2 text-lg text-zinc-700 dark:text-zinc-300">
      <p>
        <strong>Name:</strong> {client.name}
      </p>
      <p>
        <strong>Email:</strong> {client.email}
      </p>
      <p>
        <strong>Phone:</strong> {client.phone || ""}
      </p>
    </div>
  );
}