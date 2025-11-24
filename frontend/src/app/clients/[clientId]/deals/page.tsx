
import { DealsService } from "@/services/deals.services";
import DealsListClient from "@/components/deals/list/DealsListClient";

export default async function DealsListPage({
  params,
}: {
  params: { clientId: string };
}) {
  const { clientId } = params;

  const res = await DealsService.getAll(clientId);
  const deals = res.data;

  return <DealsListClient deals={deals} clientId={clientId} />;
}