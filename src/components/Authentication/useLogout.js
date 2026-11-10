import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../Services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.resetQueries({
        queryKey: ["user"],
      });
      queryClient.resetQueries({
        queryKey: ["cart"],
      });
      queryClient.resetQueries({
        queryKey: ["favorite"],
      });
      queryClient.resetQueries({
        queryKey: ["order"],
      });
      queryClient.resetQueries({
        queryKey: ["address"],
      });

      navigate("/login", { replace: true });
    },
  });

  return { logout, isPending };
}
