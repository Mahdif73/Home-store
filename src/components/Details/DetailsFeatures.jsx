function DetailsFeatures({ specifications }) {
  return (
    <section className="container border border-(--border-color) rounded-2xl py-8 pr-10">
      <h3 className="mb-16 text-lg">مشخصات</h3>

      <div className="m-8 flex justify-start gap-14">
        <h3 className="text-sm xs:hidden lg:block lg:ml-20 2xl:ml-28">
          مشخصات کلی
        </h3>
        <div>
          {specifications.map((specification, index) => (
            <p className="text-sm mb-6 pb-4 w-32" key={index}>
              {specification.name} :
            </p>
          ))}
        </div>

        <div className="w-50 xs:border-r xs:border-r-(--border-color-alt)">
          {specifications.map((specification, index) => (
            <p
              className="text-sm font-medium mb-6 pb-4  mr-5 xs:border-b-0 md:w-115.5 md:border-b md:border-b-(--border-color-alt) lg:w-125 xl:w-175 2xl:w-225"
              key={index}
            >
              {specification.value} {specification.unit}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DetailsFeatures;
