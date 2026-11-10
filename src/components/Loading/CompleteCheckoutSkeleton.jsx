function CompleteCheckoutSkeleton() {
  return (
    <div className="xs:w-97.5 xs:mb-10 sm:w-137.5 md:w-182.5 lg:w-155 xl:w-195 xl:mb-0">
      <section className="bg-(--border-color-alt) rounded-2xl p-8">
        <div className="flex justify-between items-start pb-4">
          <h3>
            <div className="skeleton w-37.5 h-8.5 "></div>
          </h3>
        </div>

        <div className="grid gap-6 xs:grid-cols-1 sm:grid-cols-2">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="skeleton xs:w-90 xs:h-60 sm:w-57.5 sm:h-65 md:w-75 md:h-60 lg:w-67.5 lg:h-65 xl:w-90 xl:h-60 "
            ></div>
          ))}
        </div>
      </section>

      <section className="bg-(--border-color-alt) rounded-2xl p-8 mt-8">
        <h3>
          <div className="skeleton mb-4 w-37.5 h-8.5"></div>
        </h3>

        <div className="flex pr-4 gap-8">
          <div className="pl-8">
            <div className="skeleton w-40 h-7.5"></div>
          </div>
          <div className="pl-8">
            <div className="skeleton w-40 h-7.5"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CompleteCheckoutSkeleton;
