import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createCart } from "../../Services/apiCart";

export function useCreateCart() {
  const queryClient = useQueryClient();
  const { mutate: createCarts, isPending: isCreating } = useMutation({
    mutationFn: createCart,
    onSuccess: () => {
      toast.success("محصول به سبد خرید اضافه شد");
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createCarts, isCreating };
}
