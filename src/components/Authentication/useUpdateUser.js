import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateUser as updateUserApi } from "../../Services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const {
    mutate: updateUser,
    isPending,
    error,
  } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: ({ user }) => {
      toast.success("اطلاعات با موفقیت بروزرسانی شد");
      queryClient.setQueryData(["user"], user);
    },
  });

  return { updateUser, isPending, error };
}
