import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCartQuantity } from "../../Services/apiCart";

export function useUpdateCart() {
  const queryClient = useQueryClient();

  const { mutate: updateCart, isPending: isUpdating } = useMutation({
    mutationFn: updateCartQuantity,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      toast.success("تعداد محصول مورد نظر در سبد خرید تغییر یافت");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateCart };
}
