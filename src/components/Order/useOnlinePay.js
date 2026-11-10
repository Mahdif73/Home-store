import { useQueryClient, useMutation } from "@tanstack/react-query";
import { updateOrder } from "../../Services/apiOrder";
import toast from "react-hot-toast";

export function useOnlinePay() {
  const queryClient = useQueryClient();

  const { mutate: payOnline, isPending: isPay } = useMutation({
    mutationFn: (id) =>
      updateOrder(id, {
        payStatus: "پرداخت شد",
      }),

    onSuccess: () => {
      toast.success(`پرداخت انجام شد`);
      queryClient.invalidateQueries({ active: true });
    },
  });

  return { payOnline, isPay };
}
