import { Link } from "react-router-dom";
import { useGroups } from "./useGroups";

function Categories() {
  const { groups } = useGroups();
  return (
    <section className="container mt-20">
      <h2 className="pr-10">دسته بندی ها</h2>
      <div className="mt-4 py-4 bg-(--body-color) border border-solid border-(--border-color) rounded-2xl flex justify-center">
        <div className="grid justify-center gap-12 md:gap-16 lg:gap-12 xl:gap-8 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  2xl:gap-x-20">
          {groups &&
            groups?.map((group) => {
              return (
                <Link key={group.id} to={`/products/${group?.title}`}>
                  <div className="cat-item">
                    <img
                      className="h-38.75  hover:shadow-(--shadow-tn) rounded-3xl"
                      src={group?.image}
                      alt=""
                    />
                    <p className="text-(--text-color) hover:text-(--text-color-light) cursor-pointer flex justify-center font-normal py-2 px-0">
                      {group?.fa_title}
                    </p>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default Categories;
