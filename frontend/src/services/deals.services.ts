import { api } from "@/lib/api";
import { Deal } from "@/types/interfaces";

export const DealsService = {
getAll: (clientId: string, status?: string) => {
  const query = status ? `/deals?clientId=${clientId}&status=${status}` : `/deals?clientId=${clientId}`;
  return api.get<Deal[]>(query);
},

  create: (
    clientId: string,
    dto: Omit<Deal, "id" | "clientId" | "createdAt" | "updatedAt">
  ) =>
    api.post(`/deals`, { ...dto, clientId }),

  update: (dealId: string, dto: Partial<Deal>) =>
    api.patch(`/deals/${dealId}`, dto),

  remove: (dealId: string) =>
    api.delete(`/deals/${dealId}`),
};