import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditAddress } from "../../Services/apiAddress";
import toast from "react-hot-toast";

export function useEditAddress() {
  const queryClient = useQueryClient();

  const { mutate: editAddress, isPending: isEditing } = useMutation({
    mutationFn: ({ newAddressData, id }) =>
      createEditAddress(newAddressData, id),
    onSuccess: () => {
      toast.success("آدرس با موفقیت ویرایش شد");
      queryClient.invalidateQueries({ queryKey: ["address"] });
    },
  });

  return { editAddress, isEditing };
}
