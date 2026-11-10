import { getFavorite } from "../../../Services/apiFavorites";
import { useAddFavorite } from "./useAddFavorite";
import { useDeleteFavorite } from "./useDeleteFavorite";

export function useToggleFavorite() {
  const { add, isPending } = useAddFavorite();
  const { deleteFav, isDeleting } = useDeleteFavorite();

  async function toggleFavorite({ product_id, user_id, title, image }) {
    // const exists = await favorites;
    const exists = await getFavorite({ product_id });
    if (exists) {
      deleteFav(exists.id);
    } else {
      add({ product_id, user_id, title, image });
    }
  }

  return { toggleFavorite, isPending, isDeleting };
}
