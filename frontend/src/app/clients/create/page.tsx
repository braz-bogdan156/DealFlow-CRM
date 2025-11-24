"use client";

import { api } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function CreateClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+38 0");

  const submit = async () => {
    await api.post("/clients", { name, email, phone });
    alert("Created!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-50 dark:bg-black px-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
        className="w-full max-w-2xl bg-white dark:bg-zinc-900 p-12 rounded-lg shadow space-y-8"
      >
        <h1 className="text-3xl font-bold text-center text-zinc-800 dark:text-zinc-100">
          Create Client
        </h1>

        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="text-lg"
        />
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-lg"
        />
        <Input
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="text-lg"
        />

        <Button type="submit" className="w-full text-lg py-3">
          Create
        </Button>
      </form>
    </div>
  );
}