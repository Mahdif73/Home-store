function DiscountSliderSkeleton() {
  return (
    <section className="container mt-16 rounded-2xl py-6">
      <h2 className="pr-10 pb-4">
        <div className="skeleton w-45 h-10"></div>
      </h2>

      <div className="px-4">
        <div className="grid xs:grid-cols-1 md:grid-cols-2 md:w-174.5 lg:grid-cols-3 lg:w-232.5 xl:w-284 xl:h-fit xl:grid-cols-5 2xl:w-340 gap-2.5 py-2.5 px-0 ">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-full ">
              <div className="w-full overflow-hidden p-[0.25rem_0.25rem_0.25rem]">
                <div className="skeleton h-80 rounded-2xl xs:h-120 md:h-87.5 lg:h-75 xl:h-62.5"></div>
              </div>

              <div className="p-[ 0_1.25rem_0.5rem] flex flex-col grow">
                <div className="mt-1 mb-2">
                  <div className="skeleton rounded-2xl h-13.75 w-47.5 sm:w-87.5 sm:h-11.25 lg:h-8.75 lg:w-[50] xl:w-40"></div>
                </div>

                <div className="pt-2">
                  <div className="skeleton rounded-2xl xs:h-16.25 xs:w-[50] sm:h-11.25 sm:w-87.5 md:w-62.5 lg:h-8.75 lg:w-[50] xl:w-40"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DiscountSliderSkeleton;
