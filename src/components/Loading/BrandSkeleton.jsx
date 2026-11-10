function BrandSkeleton() {
  return (
    <div className="container mt-10 flex justify-center">
      <div className="flex justify-start gap-2 overflow-x-hidden mb-4 xs:w-100 sm:w-137.5 md:w-182.5 lg:hidden">
        <div className="skeleton h-8.25 w-125"></div>
      </div>
      <div className="grid gap-2 xs:grid-cols-1 sm:grid-cols-2 lg:w-162.5 xl:w-204 xl:h-fit xl:grid-cols-3 2xl:w-262">
        {[1, 2, 3, 4, 5].map((_, i) => (
          <li
            className="flex flex-col justify-center bg-(--body-color) rounded-3xl "
            key={i}
          >
            <div className="relative w-full overflow-hidden p-[0.25rem_0.25rem_0.25rem]">
              <div className="skeleton h-85"></div>
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
  );
}

export default BrandSkeleton;
