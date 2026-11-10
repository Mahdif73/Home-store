import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createOrder as createOrderApi } from "../../Services/apiOrder";
import toast from "react-hot-toast";
import { useDeleteCarts } from "../Cart/useDeleteCarts";
import { useDeleteOrderCode } from "../Cart/useDeleteOrderCode";

export function useCreateOrder(user_id) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { deleteCarts } = useDeleteCarts();
  const { deleteOrderCode } = useDeleteOrderCode();

  const { mutate: createOrder, isLoading } = useMutation({
    mutationFn: createOrderApi,
    onSuccess: () => {
      toast.success("سفارش شما با موفقیت ثبت گردید");
      queryClient.invalidateQueries({ queryKey: ["order"] });

      deleteCarts();
      deleteOrderCode(user_id);
      navigate("/profile/orders");
    },
    onError: (err) => toast.error(err.message),
  });

  return { createOrder, isLoading };
}
