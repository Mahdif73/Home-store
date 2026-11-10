function BrandSectionSkeleton() {
  return (
    <section className="container my-16">
      <h2 className="pr-10">
        <div className="skeleton h-10 w-30"></div>
      </h2>
      <div className="py-4 pr-4 mt-4 rounded-2xl">
        <div className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:w-164.5 lg:grid-cols-5 lg:w-222.5 xl:w-274 xl:h-fit xl:grid-cols-6 2xl:w-330 gap-1.5 py-2.5 px-0 ">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="flex justify-center items-center pr-4 py-4 brand-item-skeleton"
            >
              <div className="skeleton  w-25 h-10 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandSectionSkeleton;
