import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAddress } from "../../Services/apiAddress";
import toast from "react-hot-toast";

export function useDeleteAddress() {
  const queryClient = useQueryClient();
  const { isPending: isDeleting, mutate } = useMutation({
    mutationFn: deleteAddress,
    onSuccess: () => {
      toast.success("آدرس با موفقیت حذف گردید");
      queryClient.invalidateQueries({ queryKey: ["address"] });
    },
  });

  return { isDeleting, mutate };
}
