import { useQuery } from "@tanstack/react-query";
import { getRecaudoData } from "@/data/recaudo";

export function useRecaudo() {
  return useQuery({
    queryKey: ["recaudo"],
    queryFn: getRecaudoData,
    staleTime: 1000 * 60 * 5,
  });
}
