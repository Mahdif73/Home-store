import { useUser } from "../components/Authentication/useUser";
import { useMenus } from "../components/Nav/useMenus";

export function useInitLayout() {
  const { userLoading } = useUser();
  const { isLoading } = useMenus();

  const isInitLoading = userLoading || isLoading;

  return { isInitLoading };
}
