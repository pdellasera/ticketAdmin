import { useQuery } from "@tanstack/react-query";
import { getPromocionesData } from "@/data/promociones";

export function usePromociones() {
  return useQuery({
    queryKey: ["promociones"],
    queryFn: getPromocionesData,
    staleTime: 1000 * 60 * 5,
  });
}
