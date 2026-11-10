import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { RecoveryPassword } from "../../Services/apiAuth";

export function useRecovery() {
  const { mutate: recovery, isPending } = useMutation({
    mutationFn: (email) => RecoveryPassword(email),
    onSuccess: () => {
      toast.success(
        "در صورت وجود حساب کاربری، لینک بازیابی به ایمیل شما ارسال میشود",
      );
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { recovery, isPending };
}
