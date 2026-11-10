import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getUpdateAddressOrg } from "../../Services/apiAddress";
import toast from "react-hot-toast";

export function useTitleAddress() {
  const queryClient = useQueryClient();

  const { isPending, mutate: titleAddress } = useMutation({
    mutationFn: getUpdateAddressOrg,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["address"] });
      toast.success("آدرس جهت ارسال سفارش انتخاب شد");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isPending, titleAddress };
}
