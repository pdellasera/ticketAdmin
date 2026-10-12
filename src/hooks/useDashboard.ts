import { useQuery } from "@tanstack/react-query";
import { getDashboardData } from "@/data/mock";

export function useDashboardData() {
  return useQuery({
    queryKey: ["dashboard"],
    queryFn: getDashboardData,
    staleTime: 1000 * 60 * 5,
  });
}
