import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sendContact } from "../../Services/apiContact";
import toast from "react-hot-toast";

export function useSendContact() {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: sendContact,
    onSuccess: () => {
      toast.success("پیام شما با موفقیت ارسال گردید");
      queryClient.invalidateQueries({ queryKey: ["contact"] });
    },
  });

  return { mutate, isPending };
}
