import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCart } from "../../Services/apiCart";

export function useDeleteCart() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate } = useMutation({
    mutationFn: deleteCart,
    onSuccess: () => {
      toast.success("محصول مورد نظر از سبد خرید حذف گردید  ");
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, mutate };
}
