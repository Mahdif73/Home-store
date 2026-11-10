import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../Services/apiAuth";

export function useUser() {
  const { data: user, isLoading: userLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return { userLoading, user, isAuthenticated: user?.role === "authenticated" };
}
