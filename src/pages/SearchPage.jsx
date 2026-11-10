import { Link, useLocation } from "react-router-dom";
import { useSearch } from "../components/Header/useSearch";
import { useEffect } from "react";
import SearchPageSkeleton from "../components/Loading/SearchPageSkeleton";

function SearchPage() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");
  const { search, isLoading } = useSearch(query);

  useEffect(
    function () {
      if (!query) return;
      document.title = `جستجوی ${query} `;

      return () => {
        document.title = "فروشگاه هوم استور";
      };
    },
    [query],
  );

  if (isLoading) return <SearchPageSkeleton />;

  return (
    <>
      <div className="container mt-8 bg-(--border-color-alt) mb-16 py-6 rounded-2xl w-200 min-h-[2150px]">
        <h2 className="text-lg pr-10 text-(--text-color) pb-4">
          نتایج جستجو برای "{query}"
        </h2>
        {search?.length === 0 && <p>هیچ محصولی پیدا نشد</p>}
        <ul>
          {search?.map((product) => (
            <li
              key={product.id}
              className="text-base flex justify-start items-center h-25 gap-12 px-8 border-b border-(--border-color) hover:bg-(--back-color-alt)"
            >
              <img className="w-22" src={product.image} alt={product.title} />
              <Link to={`/products/details/${product.id}`}>
                {product.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SearchPage;
