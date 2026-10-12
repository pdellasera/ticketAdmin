import { useQuery } from "@tanstack/react-query";
import { getConfigData } from "@/data/configuracion";

export function useConfiguracion() {
  return useQuery({
    queryKey: ["configuracion"],
    queryFn: getConfigData,
    staleTime: 1000 * 60 * 5,
  });
}
