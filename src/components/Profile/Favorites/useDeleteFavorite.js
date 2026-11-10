import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFavorite } from "../../../Services/apiFavorites";
import toast from "react-hot-toast";

export function useDeleteFavorite() {
  const queryClient = useQueryClient();
  const { isPending: isDeleting, mutate: deleteFav } = useMutation({
    mutationFn: deleteFavorite,
    onSuccess: () => {
      toast.success("محصول از لیست علاقه مندی حذف گردید");
      queryClient.invalidateQueries({ queryKey: ["favorite"] });
    },
  });

  return { isDeleting, deleteFav };
}
