import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { signup as signupApi } from "../../Services/apiAuth";

export function useSignup() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    mutate: signup,
    isPending,
    error,
  } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      toast.success("ثبت نام با موفقیت انجام شد. لطفا وارد شوید.");
      navigate("/login", { replace: true });
    },
  });

  return { signup, isPending, error };
}
