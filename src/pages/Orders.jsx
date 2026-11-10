import { useEffect, useState } from "react";
import SearchSkeleton from "../components/Loading/SearchSkeleton";
import { useOrders } from "../components/Order/useOrders";
import { useOrderSearch } from "../components/Order/useOrderSearch";
import OrderTitle from "../components/Order/OrderTitle";
import { Link } from "react-router-dom";
import OrderImages from "../components/Order/OrderImages";
import NoProduct from "../components/main/NoProduct";
import OrdersSkeleton from "../components/Loading/OrdersSkeleton";

function Orders() {
  const [searchOrder, setSearchOrder] = useState("");
  const { orders, isLoading } = useOrders();
  const { search, isSearching } = useOrderSearch(searchOrder || null);

  const list = searchOrder ? search : orders;

  useEffect(function () {
    document.title = "سفارش ها";

    return () => {
      document.title = "فروشگاه هوم استور";
    };
  }, []);

  if (isLoading) return <OrdersSkeleton />;

  return (
    <div className="rounded-2xl ">
      <div className="pr-4 mb-8 xs:pt-6 lg:pt-0">
        <input
          type="text"
          value={searchOrder}
          onChange={(e) => setSearchOrder(e.target.value)}
          className="border border-(--border-color) bg-(--border-color-alt) px-6 w-75 h-10"
          placeholder=" جستجوی کد سفارش"
        />
      </div>

      {isSearching ? (
        <SearchSkeleton />
      ) : list?.length > 0 ? (
        list.map((order) => (
          <div className="mb-4" key={order.id}>
            <div className="border-x border-t rounded-t-2xl border-(--border-color) ">
              <OrderTitle order={order} />
            </div>
            <Link to={`/order/${order.id}`}>
              <OrderImages images={order.items?.map((item) => item.image)} />
            </Link>
          </div>
        ))
      ) : searchOrder ? (
        <NoProduct>جستجوی شما نتیجه‌ای نداشت</NoProduct>
      ) : (
        <NoProduct> لیست سفارشات خالی است</NoProduct>
      )}
    </div>
  );
}

export default Orders;
