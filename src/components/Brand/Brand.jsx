import { faDigitsNum, formatCurrency } from "../../utils/helpers";
import { Link } from "react-router-dom";
import { useBrandProducts } from "./useBrandProducts";
import BrandSkeleton from "../Loading/BrandSkeleton";

function Brand() {
  const { products, isLoading } = useBrandProducts();

  if (isLoading) return <BrandSkeleton />;

  return (
    <div className="container mt-10 flex justify-center gap-8">
      <ul className="grid gap-2 xs:grid-cols-1 sm:grid-cols-2 lg:w-162.5 xl:w-204 xl:h-fit xl:grid-cols-3 2xl:w-262">
        {products &&
          products.map((product) => (
            <li
              key={product.id}
              className="flex flex-col justify-center bg-(--body-color) rounded-3xl cursor-pointer hover:border hover:border-(--border-color) hover:shadow-(--shadow-sm)"
            >
              <div className="w-full overflow-hidden p-[0.25rem_0.25rem_0.25rem]">
                <Link to={`/products/details/${product.id}`}>
                  <img
                    src={product.image}
                    className={`block rounded-[1.25rem] ${!product.available ? "grayscale-80" : ""}`}
                    alt={product.title}
                  />
                </Link>
              </div>
              <div className="p-[0_1.25rem_0.2rem] flex flex-col grow">
                <div className="my-[0.25rem_0.75rem]">
                  <Link to={`/products/details/${product.id}`}>
                    <p className="text-sm line-clamp-2 text-(--text-color)">
                      {product.title}
                    </p>
                  </Link>
                </div>
                <div className="grid grid-cols-[1fr_auto] justify-between pt-2 mt-auto">
                  <span className="text-base text-(--back-color)">
                    {!product.offPrice
                      ? formatCurrency(product.price)
                      : formatCurrency(product.offPrice)}
                  </span>

                  <p className="text-sm text-(--back-color)">
                    {product.discount > 0 ? faDigitsNum(product.discount) : ""}
                    {product.discount ? "%" : " "}
                  </p>
                  <span className="text-(--text-color-light) text-sm line-through">
                    {product.offPrice
                      ? formatCurrency(product.price)
                      : "\u200B"}
                  </span>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Brand;
