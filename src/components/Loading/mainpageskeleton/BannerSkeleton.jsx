function BannerSkeleton() {
  return (
    <section className="container mt-16">
      <div className=" grid gap-8 xs:grid-cols-1 xs:grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 lg:px-8">
        <div className="skeleton rounded-3xl xs:h-75 md:h-105 lg:h-55 xl:h-70 "></div>
        <div className="skeleton rounded-3xl xs:h-75 md:h-105 lg:h-55 xl:h-70 "></div>
      </div>
    </section>
  );
}

export default BannerSkeleton;
