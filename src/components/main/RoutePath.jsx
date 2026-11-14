import { Link, useParams } from "react-router-dom";
import { categoriesName, groupsName } from "../../utils/constants";

function RoutePath({ product }) {
  const { category, group } = useParams();

  return (
    <section className="container flex gap-x-6 mt-10 font-semibold xs:justify-center lg:justify-start">
      <Link to={`/`}>
        <p className="text-sm opacity-60 cursor-pointer hover:opacity-100 hover:text-(--text-color)">
          صفحه اصلی
        </p>
      </Link>
      <span className="text-(--text-color)">/</span>
      {group && (
        <Link to={`/products/${group}`}>
          <p className="text-sm opacity-60 cursor-pointer hover:opacity-100 hover:text-(--text-color)">
            {groupsName[group]}
          </p>
        </Link>
      )}
      {product?.group && (
        <Link to={`/products/${product?.group}`}>
          <p className="text-sm opacity-60 cursor-pointer hover:opacity-100 hover:text-(--text-color)">
            {groupsName[product?.group]}
          </p>
        </Link>
      )}
      {(product?.category || category) && (
        <span className="text-(--text-color)">/</span>
      )}
      {category && (
        <Link to={`/products/${group}/${category}`}>
          <p className="text-sm opacity-60 cursor-pointer hover:opacity-100 hover:text-(--text-color)">
            {categoriesName[category]}
          </p>
        </Link>
      )}
      {product?.category && (
        <Link to={`/products/${product?.group}/${product?.category}`}>
          <p className="text-sm opacity-60 cursor-pointer hover:opacity-100 hover:text-(--text-color)">
            {categoriesName[product?.category]}
          </p>
        </Link>
      )}
    </section>
  );
}

export default RoutePath;
