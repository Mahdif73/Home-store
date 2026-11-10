import toast from "react-hot-toast";
import Button from "../main/Button";
import Quantity from "../main/Quantity";
import { faDigitsNum, formatCurrency } from "../../utils/helpers";
import { colorShow } from "../../utils/constants";
import { HiHeart, HiOutlineHeart } from "react-icons/hi2";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Authentication/useUser";
import { useToggleFavorite } from "../Profile/Favorites/useToggleFavorite";
import { useFavorite } from "../Profile/Favorites/useFavorite";
import BesFeature from "./BesFeature";

function DetailsItem({
  product,
  selectedColor,
  selectedSize,
  handleSelectColor,
  handleSelectSize,
  selectItem,
  isSize,
  isColors,
  handleAddToCart,
  isCreating,
}) {
  const {
    title,
    specifications,
    image,
    price,
    offPrice,
    discount,
    colors,
    size,
    available,
  } = product;

  const navigate = useNavigate();
  const { isAuthenticated, user } = useUser();
  const { toggleFavorite, isPending, isDeleting } = useToggleFavorite();
  const { favorite } = useFavorite(product?.id);
  const loading = isPending || isDeleting;

  useEffect(
    function () {
      if (!title) return;
      document.title = ` ${title} `;

      return () => {
        document.title = "فروشگاه هوم استور";
      };
    },
    [title],
  );

  async function handleFavorite() {
    if (!isAuthenticated) {
      toast.error(
        "برای افزودن به لیست علاقه مندی ابتدا وارد حساب کاربری خود شوید",
      );
      navigate("/login");
      return;
    }
    toggleFavorite({
      title,
      image,
      product_id: product?.id,
      user_id: user?.id,
    });
  }

  return (
    <section className="container mt-10 mb-12 sm:grid lg:w-full lg:grid-cols-[1fr_2fr] lg:justify-start xl:grid-cols-[430px_auto]">
      <div className="relative text-center">
        <img
          src={image}
          className="pb-2 rounded-2xl xs:max-w-100 md:max-w-125 lg:w-106"
          alt="product"
        />
        <button
          disabled={loading}
          className="absolute flex items-center justify-center rounded-[50%] top-2 right-2 w-12.5 h-12.5 transition delay-100 duration-300 bg-(--body-color) border border-(--back-color)  disabled:w-11 disabled:h-11"
          onClick={handleFavorite}
        >
          {favorite ? (
            <HiHeart className="cursor-pointer text-3xl text-(--back-color)" />
          ) : (
            <HiOutlineHeart className="cursor-pointer text-3xl text-(--back-color)  " />
          )}
        </button>
      </div>
      <div className="xs:mt-12 lg:mt-0 lg:mr-10 lg:flex lg:flex-col lg:w-107.5">
        <h3 className="text-xl">{title}</h3>

        {isColors && available && (
          <ul className="text-base gap-x-4 mt-8 flex flex-wrap items-center">
            <h4 className="pl-4">انتخاب رنگ </h4>
            {colors &&
              colors.map((color, index) => (
                <li key={index} onClick={() => handleSelectColor(color)}>
                  <div className="flex items-center">
                    <p>{color}</p>
                    <span
                      className={` mr-3 pb-0.75 w-10 h-10 rounded-[50%] cursor-pointer ${selectedColor === color ? "border-3 border-(--border-color)" : "border-4  border-(--border-color-alt)"}  `}
                      style={{ backgroundColor: colorShow[color] }}
                    ></span>
                  </div>
                </li>
              ))}
          </ul>
        )}

        {isSize && available && (
          <ul className="flex gap-x-4 mt-8 items-center text-base">
            <h4 className="pl-4"> انتخاب سایز </h4>
            {size &&
              size.map((s, index) => (
                <li key={index} onClick={() => handleSelectSize(s)}>
                  <div className="flex items-center pr-4">
                    <p
                      className={`cursor-pointer border border-(--border-color) pt-1.5 px-1.25 rounded-[7px] min-w-[2.2rem] min-h-[2.2rem] text-center hover:text-(--text-color)  ${selectedSize === s ? "text-(--border-color-alt) bg-(--back-color)" : "text-(--text-color-light)"}  `}
                    >
                      {s}
                    </p>
                  </div>
                </li>
              ))}
          </ul>
        )}

        <h4 className="mt-8 xl:mt-auto mb-2 tex-sm">ویژگی ها</h4>
        <div className="lg:min-w-135 mt-4 grid grid-cols-3 gap-y-6 2xl:grid-cols-[3_250px] ">
          {specifications.slice(0, 3).map((attribute, index) => (
            <BesFeature key={index} attribute={attribute} />
          ))}
        </div>

        <div className="mt-10 justify-between items-end xs:hidden lg:flex lg:min-w-135">
          {available ? (
            <div className="min-w-42.5 xl:min-w-53">
              <div className="flex justify-between pb-1 min-h-[1.2rem] w-42.5 lg:px-1 xl:w-full">
                <p className="text-base text-(--text-color-light) line-through lg:text-lg">
                  {offPrice ? formatCurrency(price) : "\u200B"}
                </p>
                <span className="text-(--back-color) font-semibold pl-4 text-xs xl:pl-8">
                  <p className="text-base lg:text-lg">
                    {discount > 0 ? faDigitsNum(discount) : ""}
                    {discount ? "%" : " "}
                  </p>
                </span>
              </div>
              <p className="flex justify-start gap-4 font-bold lg:text-lg xl:text-xl">
                {!offPrice ? formatCurrency(price) : formatCurrency(offPrice)}
              </p>
            </div>
          ) : (
            <h4 className="pb-2"> محصول موجود نیست</h4>
          )}
          {available && (
            <>
              <div>{selectItem && <Quantity item={selectItem} />}</div>
              {selectItem ? (
                <Button htmlType="details" onClick={() => navigate("/cart")}>
                  رفتن به سبد خرید
                </Button>
              ) : (
                <Button
                  htmlType="details"
                  onClick={() => {
                    if (!isAuthenticated) {
                      toast.error(
                        "برای افزودن به سبد خرید ابتدا وارد حساب کاربری خود شوید",
                      );
                      navigate("/login");
                    } else {
                      handleAddToCart();
                    }
                  }}
                  disabled={isCreating}
                >
                  {isCreating ? "..." : " افزودن به سبد خرید"}
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default DetailsItem;
