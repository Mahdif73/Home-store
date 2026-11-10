import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCarts as deleteCartsApi } from "../../Services/apiCart";
import toast from "react-hot-toast";

export function useDeleteCarts() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCarts } = useMutation({
    mutationFn: deleteCartsApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCarts };
}
