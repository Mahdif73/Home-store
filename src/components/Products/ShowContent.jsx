import NoProduct from "../main/NoProduct";
import Item from "./Item";
import Pagination from "./Pagination";
import ProductSort from "./ProductSort";
import RowFilter from "./RowFilter";
import { useProducts } from "./useProducts";

function ShowContent() {
  const { count, products } = useProducts();

  return (
    <div>
      <RowFilter />

      <ProductSort />
      <ul className="grid gap-2 xs:grid-cols-1 sm:grid-cols-2 lg:w-162.5 xl:w-204 xl:h-fit xl:grid-cols-3 2xl:w-262">
        {products.length ? (
          products.map((product) => <Item key={product.id} product={product} />)
        ) : (
          <NoProduct> محصولی موجود نیست</NoProduct>
        )}
      </ul>
      <Pagination count={count} />
    </div>
  );
}

export default ShowContent;
