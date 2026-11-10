import { faDigitsNum, formatCurrency } from "../../utils/helpers";
import { Link } from "react-router-dom";

function OrderItem({
  item: { name, quantity, price, discount, offPrice, image, color, size, id },
}) {
  return (
    <div className="grid grid-cols-[175px_1fr] grid-rows-[160px] text-center border-b border-(--border-color) pt-4 sm:pr-16 md:grid-cols-[180px_1fr]">
      <Link className="w-35" to={`/products/details/${id}`}>
        <img className="w-35" src={image} alt={name} />
      </Link>
      <div className="flex flex-col items-start gap-4 text-base pt-3 xs:text-sm">
        <p>{name} </p>
        <div className="flex items-start gap-4 text-base pt-3">
          <p> رنگ :</p>
          <p>{color}</p>
        </div>
        {size && (
          <div className="flex items-start gap-4 text-base pt-2">
            <p> سایز :</p>
            <p>{size}</p>
          </div>
        )}
      </div>

      <div className="h-10 w-32.5 mt-4 flex justify-center items-center pb-8 gap-x-8">
        <p className="text-(--back-color) font-bold text-base py-1 px-4 border-2 border-(--border-color) rounded-2xl">
          {faDigitsNum(quantity)}
        </p>
      </div>

      <div className="mb-6 w-42.5 sm:w-57.5">
        <div className="flex justify-between pb-1 min-h-5 w-42.5 lg:px-1 xl:w-full">
          <p className="text-(--text-color-light) text-sm line-through">
            {formatCurrency(offPrice) ? formatCurrency(price) : "\u200B"}
          </p>
          <span className="text-(--back-color) font-semibold pl-4 lg:text-xs xl:pl-8">
            <p>
              {discount > 0 ? faDigitsNum(discount) : ""}
              {discount ? "%" : " "}
            </p>
          </span>
        </div>
        <p className="font-bold flex justify-start gap-4 text-xl">
          {!offPrice ? formatCurrency(price) : formatCurrency(offPrice)}
        </p>
      </div>
    </div>
  );
}

export default OrderItem;
