import { useParams } from "react-router-dom";
import { useProducts } from "../components/Products/useProducts";
import { useEffect } from "react";
import { categoriesName, groupsName } from "../utils/constants";
import RoutePath from "../components/main/RoutePath";
import SideContainer from "../components/main/SideContainer";
import ShowContent from "../components/Products/ShowContent";
import ProductsSkeleton from "../components/Loading/ProductsSkeleton";

function Products() {
  const { category, group } = useParams();
  const { isLoading } = useProducts();

  useEffect(() => {
    if (!category && !group) return;
    if (category) {
      document.title = `محصولات  ${categoriesName[category]}`;
      return;
    }
    if (group) {
      document.title = `محصولات ${groupsName[group]}`;
      return;
    }
    return () => {
      document.title = "فروشگاه هوم استور";
    };
  }, [category, group]);

  if (isLoading) return <ProductsSkeleton />;

  return (
    <>
      <RoutePath />
      <div className="container mt-10 flex justify-center gap-8">
        {category && <SideContainer />}
        <ShowContent />
      </div>
    </>
  );
}

export default Products;
