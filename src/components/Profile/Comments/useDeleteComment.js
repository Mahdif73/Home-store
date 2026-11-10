import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteComment } from "../../../Services/apiComments";
import toast from "react-hot-toast";

export function useDeleteComment() {
  const queryClient = useQueryClient();
  const { isPending: isDeleting, mutate } = useMutation({
    mutationFn: deleteComment,
    onSuccess: () => {
      toast.success("کامنت با موفقیت حذف گردید");
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });

  return { isDeleting, mutate };
}
