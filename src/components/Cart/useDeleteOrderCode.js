import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteOrderCode as deleteOrderCodeApi } from "../../Services/apiCode";

export function useDeleteOrderCode() {
  const queryClient = useQueryClient();

  const { mutate: deleteOrderCode } = useMutation({
    mutationFn: (user_id) => deleteOrderCodeApi(user_id),
    onSuccess: () => {
      queryClient.invalidateQueries(["orderCode"]);
    },
  });

  return { deleteOrderCode };
}
