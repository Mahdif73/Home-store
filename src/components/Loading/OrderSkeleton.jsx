function OrderSkeleton() {
  return (
    <section className="container my-20">
      <div className="flex justify-between items-start">
        <h2>
          <div className="skeleton w-37.5 h-8.5"></div>
        </h2>
      </div>

      <div className="py-5">
        <div className="border border-(--border-color) border-b-0 rounded-t-2xl">
          <div className="py-5 px-4 xs:text-sm md:text-base">
            <div className="flex gap-6 my-4 pb-4 border-b border-(--border-color)">
              <div className="skeleton w-100 h-10"></div>
            </div>
            <div className="flex gap-4">
              <div className="skeleton  w-100 h-10"></div>
            </div>

            <div className="flex flex-wrap gap-6 pb-2">
              <div className="skeleton mt-4 w-175 h-10"></div>
            </div>
          </div>
          <div className="border-t border-(--border-color)">
            <div className="grid grid-cols-[175px_1fr] grid-rows-[160px] text-center border-b border-(--border-color) pt-4 sm:pr-16 md:grid-cols-[180px_1fr]">
              <div className="skeleton w-35 h-35"></div>
              <div className="flex flex-col items-start gap-4 text-base pt-3 xs:text-sm">
                <div className="skeleton w-50 h-15"></div>
              </div>
              <div className="h-10 w-32.5 mt-4 flex justify-center items-center pb-8 gap-x-8">
                <div className="skeleton  w-35 h-10"></div>
              </div>
              <div className="mb-6 w-42.5 sm:w-57.5">
                <div className="skeleton w-50 h-12.5"></div>
              </div>
            </div>
            <div className="grid grid-cols-[175px_1fr] grid-rows-[160px] text-center border-b border-(--border-color) pt-4 sm:pr-16 md:grid-cols-[180px_1fr]">
              <div className="skeleton  w-35 h-35"></div>
              <div className="flex flex-col items-start gap-4 text-base pt-3 xs:text-sm">
                <div className="skeleton w-50 h-15"></div>
              </div>
              <div className="h-10 w-32.5 mt-4 flex justify-center items-center pb-8 gap-x-8">
                <div className="skeleton  w-35 h-10"></div>
              </div>
              <div className="mb-6 w-42.5 sm:w-57.5">
                <div className="skeleton w-50 h-12.5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderSkeleton;
