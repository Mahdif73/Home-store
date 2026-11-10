import { useEffect } from "react";
import { Link } from "react-router-dom";
import NoProduct from "../components/main/NoProduct";
import { HiHeart } from "react-icons/hi2";
import { useFavorites } from "../components/Profile/Favorites/useFavorites";
import { useDeleteFavorite } from "../components/Profile/Favorites/useDeleteFavorite";
import FavoritesSkeleton from "../components/Loading/FavoritesSkeleton";

function Favorites() {
  const { favorites, isLoading } = useFavorites();

  useEffect(function () {
    document.title = ` علاقه مندی ها `;

    return () => {
      document.title = "فروشگاه هوم استور";
    };
  }, []);

  if (isLoading) return <FavoritesSkeleton />;

  return (
    <div className="grid gap-2 xs:grid-cols-1 sm:grid-cols-2 lg:w-162.5 xl:w-204 xl:h-fit xl:grid-cols-3 2xl:w-262">
      {favorites?.length ? (
        favorites.map((favorite) => (
          <Favorite favorite={favorite} key={favorite.id} />
        ))
      ) : (
        <NoProduct>لیست علاقه مندی ها خالی است</NoProduct>
      )}
    </div>
  );
}

export default Favorites;

function Favorite({ favorite }) {
  const { deleteFav, isDeleting } = useDeleteFavorite();
  return (
    <li className="flex flex-col justify-center bg-(--body-color) rounded-3xl cursor-pointer hover:border hover:border-(--border-color) hover:shadow-(--shadow-sm) ">
      <div className="relative w-full overflow-hidden p-[0.25rem_0.25rem_0.25rem]">
        <Link to={`/products/details/${favorite.product_id}`}>
          <img
            src={favorite.image}
            className="block rounded-[1.25rem]"
            alt={favorite.title}
          />
        </Link>
        <button
          disabled={isDeleting}
          onClick={() => deleteFav(favorite.id)}
          className="absolute flex items-center justify-center rounded-[50%] top-2 right-2 w-12.5 h-12.5 transition delay-40 bg-(--body-color)  border border-(--back-color) disabled:bg-(--back-color-alt) disabled:w-10 disabled:h-10"
        >
          <HiHeart className="cursor-pointer transition delay-40 text-2xl text-(--back-color)" />
        </button>
      </div>
      <div className="p-[0_1.25rem_0.2rem] flex flex-col grow">
        <div className="my-[0.25rem_0.75rem]">
          <Link to={`/products/details/${favorite.product_id}`}>
            <p className="text-sm line-clamp-2 text-(--text-color)">
              {favorite.title}
            </p>
          </Link>
        </div>
      </div>
    </li>
  );
}
