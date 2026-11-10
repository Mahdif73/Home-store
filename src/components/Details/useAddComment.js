import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditComment } from "../../Services/apiComments";

export function useAddComment() {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: createEditComment,
    onSuccess: () => {
      toast.success("پیام شما با موفقیت ارسال گردید");
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });

  return { mutate, isPending };
}
