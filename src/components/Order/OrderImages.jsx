function OrderImages({ images }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 border border-(--border-color)">
      {images.map((image, index) => (
        <div
          className="py-4 flex w-[22%] md:w-[15%] lg:w-[10%] 2xl:w-[8%]"
          key={index}
        >
          <img src={image} className="rounded-2xl" alt="" />
        </div>
      ))}
    </div>
  );
}

export default OrderImages;
