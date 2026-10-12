import { useQuery } from "@tanstack/react-query";
import { getEventsData } from "@/data/mock";

export function useEventsData() {
  return useQuery({
    queryKey: ["events"],
    queryFn: getEventsData,
    staleTime: 1000 * 60 * 5,
  });
}
