import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createFavorite } from "../../../Services/apiFavorites";
import toast from "react-hot-toast";

export function useAddFavorite() {
  const queryClient = useQueryClient();
  const { isPending, mutate: add } = useMutation({
    mutationFn: createFavorite,
    onSuccess: () => {
      toast.success("محصول به  لیست علاقه مندی ها اضافه شد");
      queryClient.invalidateQueries({ queryKey: ["favorite"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isPending, add };
}
