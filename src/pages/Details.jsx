import { useEffect, useState } from "react";
import { useUser } from "../components/Authentication/useUser";
import { useUpdateCart } from "../components/Cart/useUpdateCart";
import { useCart } from "../components/Cart/useCart";
import RoutePath from "../components/main/RoutePath";
import { useProduct } from "../components/Details/useProduct";
import { useCreateCart } from "../components/Cart/useCreateCart";
import toast from "react-hot-toast";
import { getCreateOrderCode } from "../Services/apiCode";
import DetailsItem from "../components/Details/DetailsItem";
import DetailsFeatures from "../components/Details/DetailsFeatures";
import DetailComments from "../components/Details/DetailComments";
import DetailFooter from "../components/Details/DetailFooter";
import DetailsSkeleton from "../components/Loading/DetailsSkeleton";
import NotFound from "./NotFound";

function Details() {
  const { product, isLoading } = useProduct();
  const { user } = useUser();

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const { createCarts, isCreating } = useCreateCart();
  const { updateCart } = useUpdateCart();
  const { cart } = useCart();
  const isColors = product?.colors && product?.colors.length > 0;
  const isSize = product?.size && product?.size.length > 0;

  useEffect(() => {
    setSelectedColor(product?.colors[0]);
  }, [product]);

  useEffect(() => {
    if (product?.size?.length > 0) {
      setSelectedSize(product.size[0]);
    }
  }, [product]);

  const selectItem = cart?.find(
    (item) =>
      (isColors ? item.color === selectedColor : true) &&
      (isSize ? item.size === selectedSize : true) &&
      item.product_id === product?.id,
  );

  function handleSelectColor(select) {
    setSelectedColor((color) => (color === select ? null : select));
  }
  function handleSelectSize(select) {
    setSelectedSize((size) => (size === select ? null : select));
  }

  async function handleAddToCart() {
    const session = await getCreateOrderCode(user.id);
    if (isColors && !selectedColor)
      return toast.error("لطفا رنگ کالای مورد نظر را انتخاب کنید");
    if (isSize && !selectedSize)
      return toast.error("لطفا سایز لباس را انتخاب کنید");

    if (selectItem) {
      const newQuantity = selectItem.quantity + 1;

      updateCart({
        id: selectItem.id,
        quantity: newQuantity,
        totalPrice: selectItem.price * newQuantity,
        totalOffPrice: selectItem.offPrice * newQuantity,
      });

      return;
    }
    const cartItem = {
      quantity: 1,
      totalPrice: product?.price * 1,
      totalOffPrice: product?.offPrice * 1,
      discount: product.discount,
      offPrice: product.offPrice,
      product_id: product?.id,
      price: product?.price,
      title: product?.title,
      image: product?.image,
      color: isColors ? selectedColor : null,
      size: isSize ? selectedSize : null,
      user_id: user?.id,
      cart_order_code: session?.id,
    };

    createCarts(cartItem);
  }

  if (isLoading) return <DetailsSkeleton />;
  if (!product) return <NotFound />;

  return (
    <>
      <RoutePath product={product} />

      {!isLoading && product && (
        <DetailsItem
          product={product}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
          handleSelectColor={handleSelectColor}
          handleSelectSize={handleSelectSize}
          selectItem={selectItem}
          isSize={isSize}
          isColors={isColors}
          handleAddToCart={handleAddToCart}
          isCreating={isCreating}
        />
      )}

      {!isLoading && (
        <DetailsFeatures specifications={product.specifications} />
      )}

      <DetailComments />

      {!isLoading && product.available && (
        <DetailFooter
          product={product}
          selectItem={selectItem}
          handleAddToCart={handleAddToCart}
          isCreating={isCreating}
        />
      )}
    </>
  );
}

export default Details;
