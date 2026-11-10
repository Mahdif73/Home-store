function CategoriesSkeleton() {
  return (
    <section className="container mt-20">
      <h2 className="pr-10">
        <div className="skeleton h-10 w-30"> </div>
      </h2>

      <div className="mt-4 py-8 rounded-2xl flex justify-center">
        <div className="grid gap-12  xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-16 lg:gap-12 lg:grid-cols-4 xl:grid-cols-5 xl:gap-8 2xl:grid-cols-6 2xl:gap-x-20">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i}>
              <div className="skeleton w-47.5 h-35 rounded-2xl my-0 mx-auto"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoriesSkeleton;
