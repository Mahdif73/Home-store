import { useBrands } from "../components/Brand/useBrands";
import { Link, Outlet } from "react-router-dom";
import BrandsSkeleton from "../components/Loading/BrandsSkeleton";

function Brands() {
  const { brands, isLoading } = useBrands();

  if (isLoading) return <BrandsSkeleton />;

  return (
    <div className="container mt-10 flex justify-center gap-8">
      <ul className="grid gap-2 xs:grid-cols-1 sm:grid-cols-2 lg:w-162.5 xl:w-204 xl:h-fit xl:grid-cols-3 2xl:w-262">
        {brands &&
          brands.map((brand) => (
            <li
              key={brand.id}
              className="flex flex-col justify-center bg-(--body-color) rounded-3xl cursor-pointer hover:border hover:border-(--border-color) hover:shadow-(--shadow-sm)"
            >
              <div className="relative w-full overflow-hidden p-[0.25rem_0.25rem_0.25rem]">
                <Link to={`/brands/${brand.title}`}>
                  <img
                    src={brand.logo}
                    className="block rounded-[1.25rem]"
                    alt={brand.title}
                  />
                </Link>
              </div>
              <div className="p-[0_1.25rem_0.2rem] flex flex-col grow">
                <div className="my-[0.25rem_0.75rem]">
                  <Link to={`/brands/${brand.title}`}>
                    <p className="text-lg font-bold text-(--back-color)">
                      {brand.title}
                    </p>
                  </Link>
                </div>
              </div>
            </li>
          ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default Brands;
