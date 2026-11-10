function DetailsSkeleton() {
  return (
    <>
      <section className="container flex gap-x-6 mt-10 font-semibold xs:justify-center lg:justify-start">
        <div className="skeleton w-100 h-6.25"></div>
      </section>
      <section className="container mt-10 mb-12 sm:grid lg:w-full lg:grid-cols-[1fr_2fr] lg:justify-start xl:grid-cols-[430px_auto]">
        <div className="text-center">
          <div className="skeleton lg:w-107.5 lg:h-95 max-w-160 h-100"></div>
        </div>
        <div className="xs:mt-12 lg:mt-0 lg:mr-10 lg:flex lg:flex-col lg:w-107.5">
          <div className="skeleton w-50 h-7.5"></div>

          <ul className="text-base gap-x-4 mt-8 flex flex-wrap items-center">
            <div className="skeleton  mb-0.75 h-10 w-100"></div>
          </ul>

          <h4 className="mt-8 xl:mt-auto mb-2 tex-sm">
            <div className="skeleton w-25 h-7.5"></div>
          </h4>
          <div className="lg:min-w-135 mt-4 grid grid-cols-3 gap-y-6 2xl:grid-cols-[3_250px] ">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="skeleton h-15 w-25 p-[0.76rem] rounded-[7px] mr-4 sm:w-40 lg:w-35 lg:h-15 xl:w-42 2xl:w-52"
              ></div>
            ))}
          </div>

          <div className="mt-10 justify-between items-end xs:hidden lg:flex lg:min-w-135">
            <div className="skeleton w-50 h-17.5"></div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="skeleton h-100"></div>
      </section>
    </>
  );
}

export default DetailsSkeleton;
