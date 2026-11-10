import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditAddress } from "../../Services/apiAddress";
import toast from "react-hot-toast";

export function useCreateAddress() {
  const queryClient = useQueryClient();

  const { mutate: createAddress, isPending } = useMutation({
    mutationFn: (newAddressData) =>
      createEditAddress(newAddressData, undefined),
    onSuccess: () => {
      toast.success("آدرس با موفقیت ثبت شد");
      queryClient.invalidateQueries({ queryKey: ["address"] });
    },
  });

  return { createAddress, isPending };
}
