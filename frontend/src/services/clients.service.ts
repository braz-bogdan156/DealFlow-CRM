import { api } from "@/lib/api";
import { Client } from "@/types/interfaces";

export const ClientsService = {
getAll: (page: number = 1, limit: number = 10) =>
api.get<Client[]>(`/clients?page=${page}&limit=${limit}`),
getOne: (id: string) => api.get(`/clients/${id}`),
create: (data: Omit<Client, "id" | "createdAt" | "updatedAt">) =>
api.post("/clients", data),
update: (
id: string,
data: Partial<Omit<Client, "id" | "createdAt" | "updatedAt">>
) => api.patch(`/clients/${id}`, data),
remove: (id: string) => api.delete(`/clients/${id}`)
};