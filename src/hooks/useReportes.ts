import { useQuery } from "@tanstack/react-query";
import { getReportesData } from "@/data/reportes";

export function useReportes() {
  return useQuery({
    queryKey: ["reportes"],
    queryFn: getReportesData,
    staleTime: 1000 * 60 * 5,
  });
}
