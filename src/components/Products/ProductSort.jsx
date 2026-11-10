import { useSearchParams } from "react-router-dom";

const options = [
  { value: "createdAt-asc", label: "جدید ترین" },
  { value: "price-asc", label: "ارزان ترین" },
  { value: "price-desc", label: "گران ترین" },
  { value: "discount-desc", label: "بیشترین تخفیف" },
];

function ProductSort() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange(value) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sortBy", value);
    newParams.set("page", 1);
    setSearchParams(newParams);
  }
  return (
    <section className="justify-start mr-6 mb-8 mt-1 cursor-pointer xs:hidden xs:gap-x-4 xs:text-xs md:text-sm lg:flex lg:gap-x-10 ">
      {options.map((option, index) => (
        <h4
          className="hover:text-(--back-color)"
          onClick={() => handleChange(option.value)}
          key={index}
        >
          {option.label}
        </h4>
      ))}
    </section>
  );
}

export default ProductSort;
