import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logout, resetPassword } from "../../Services/apiAuth";
import toast from "react-hot-toast";

export function useResetPassword() {
  const navigate = useNavigate();

  const {
    mutate: updatePassword,
    isPending,
    error,
  } = useMutation({
    mutationFn: resetPassword,

    onSuccess: async () => {
      toast.success("رمز عبور با موفقیت تغییر کرد");
      await logout();
      navigate("/login", {
        replace: true,
      });
    },
  });

  return {
    updatePassword,
    isPending,
    error,
  };
}
