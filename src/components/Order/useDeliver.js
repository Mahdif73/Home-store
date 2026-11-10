import { useQueryClient, useMutation } from "@tanstack/react-query";
import { updateOrder } from "../../Services/apiOrder";
import toast from "react-hot-toast";

export function useDeliver() {
  const queryClient = useQueryClient();

  const { mutate: orderDeliver, isPending: isDeliver } = useMutation({
    mutationFn: (id) =>
      updateOrder(id, {
        orderStatus: "تحویل داده شد",
      }),

    onSuccess: () => {
      toast.success(`تحویل محصول به مشتری انجام شد`);
      queryClient.invalidateQueries({ active: true });
    },
  });

  return { orderDeliver, isDeliver };
}
