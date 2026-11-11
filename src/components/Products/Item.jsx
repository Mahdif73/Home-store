import { Link } from "react-router-dom";
import { faDigitsNum, formatCurrency } from "../../utils/helpers";

function Item({ product }) {
  const { title, image, price, offPrice, discount, available } = product;
  return (
    <li className="flex flex-col justify-center bg-(--body-color) rounded-3xl cursor-pointer hover:border hover:border-(--border-color) hover:shadow-(--shadow-sm) ">
      <div className="relative w-full overflow-hidden p-[0.25rem_0.25rem_0.25rem]">
        <Link to={`/products/details/${product.id}`}>
          <img
            src={image}
            className={`block rounded-[1.25rem] ${!available ? "grayscale-80" : ""}`}
            alt={title}
          />
        </Link>
      </div>
      <div className="p-[0.5rem_1.25rem_0.2rem] flex flex-col grow">
        <div className="my-[0.25rem_0.75rem]">
          <Link to={`/products/details/${product.id}`}>
            <p className="text-sm font-semibold line-clamp-2 text-(--text-color)">
              {title}
            </p>
          </Link>
        </div>

        <div className="grid grid-cols-[1fr_auto] justify-between pt-2 mt-auto mb-1">
          {available ? (
            <>
              <span className="text-base text-(--back-color)">
                {!offPrice ? formatCurrency(price) : formatCurrency(offPrice)}
              </span>
              <p className="text-sm text-(--back-color)">
                {discount > 0 ? faDigitsNum(discount) : ""}
                {discount ? "%" : " "}
              </p>
              <span className="text-(--text-color-light) text-sm line-through">
                {offPrice ? formatCurrency(price) : "\u200B"}
              </span>
            </>
          ) : (
            <span className="mb-4">محصول موجود نیست</span>
          )}
        </div>
      </div>
    </li>
  );
}

export default Item;

