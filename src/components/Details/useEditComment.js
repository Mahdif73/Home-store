import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditComment } from "../../Services/apiComments";

export function useEditComment() {
  const queryClient = useQueryClient();

  const { mutate: editComment, isPending: isEditing } = useMutation({
    mutationFn: ({ newEditComment, id }) =>
      createEditComment(newEditComment, id),
    onSuccess: () => {
      toast.success("نظر شما با موفقیت ثبت شد");
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });

  return { editComment, isEditing };
}
