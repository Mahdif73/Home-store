import { useQuery } from "@tanstack/react-query";
import { getMenus } from "../../Services/apimenus";

export function useMenus() {
  const {
    isLoading,
    data: menus,
    error,
  } = useQuery({
    queryKey: ["menus"],
    queryFn: getMenus,
  });

  return { isLoading, error, menus };
}
