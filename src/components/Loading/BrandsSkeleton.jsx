function BrandsSkeleton() {
  return (
    <section className="container flex justify-center mt-10">
      <div className="grid gap-2 xs:grid-cols-1 sm:grid-cols-2 lg:w-162.5 xl:w-204 xl:h-fit xl:grid-cols-3 2xl:w-262">
        {[1, 2, 3, 4, 5].map((_, i) => (
          <li
            className="flex flex-col justify-center bg-(--body-color) rounded-3xl  "
            key={i}
          >
            <div className="w-full overflow-hidden p-[0.25rem_0.25rem_0.25rem]">
              <div className="skeleton xs:w-93.5 xs:h-92.75 sm:w-63.5 sm:h-45 md:w-86.25 md:h-80.5 lg:w-78.5 xl:w-64.5 xl:h-66.5 2xl:w-84.25 2xl:h-80.5 rounded-2xl"></div>
            </div>

            <div className="p-[0_1.25rem_0.2rem] flex flex-col grow">
              <div className="skeleton w-37.5 h-8.75"></div>
            </div>
          </li>
        ))}
      </div>
    </section>
  );
}

export default BrandsSkeleton;
