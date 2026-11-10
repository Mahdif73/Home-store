import { useParams } from "react-router-dom";

function ProductsSkeleton() {
  const { category } = useParams();
  return (
    <>
      <section className="container flex gap-x-6 mt-10 font-semibold xs:justify-center lg:justify-start">
        <div className="skeleton w-100 h-6.25"></div>
      </section>
      <section className="container mt-10 flex justify-center gap-8">
        {category && (
          <div className="skeleton none lg:block lg:w-75 lg:h-100"></div>
        )}

        <div>
          <section className="justify-start mr-6 mb-8 mt-1 cursor-pointer xs:hidden xs:gap-x-4 xs:text-xs md:text-sm lg:flex lg:gap-x-10">
            <div className="skeleton h-9 w-100"></div>
          </section>
          <div>
            <div className="flex justify-start gap-2 overflow-x-hidden mb-4 xs:w-100 sm:w-137.5 md:w-182.5 lg:hidden">
              <div className="skeleton h-8.25 w-125"></div>
            </div>
            <div className="grid gap-2 xs:grid-cols-1 sm:grid-cols-2 lg:w-162.5 xl:w-204 xl:h-fit xl:grid-cols-3 2xl:w-262">
              {[1, 2, 3, 4, 5].map((i) => (
                <li
                  className="flex flex-col justify-center bg-(--body-color) rounded-3xl "
                  key={i}
                >
                  <div className=" w-full overflow-hidden p-[0.25rem_0.25rem_0.25rem]">
                    <div className="skeleton h-70"></div>
                  </div>

                  <div className="p-[0_1.25rem_0.2rem] flex flex-col grow">
                    <div className="skeleton w-37.5 h-8.75"></div>

                    <div className="grid grid-cols-[1fr_auto] justify-between pt-2 mt-auto">
                      <div className="skeleton w-37.5 h-3.75"></div>
                      <div className="skeleton w-12.5 h-3.75"></div>
                      <div className="skeleton mt-2 w-45 h-3.25"></div>
                    </div>
                  </div>
                </li>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default ProductsSkeleton;
