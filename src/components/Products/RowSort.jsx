import { useSearchParams } from "react-router-dom";

const options = [
  { value: "created_at-asc", label: "جدید ترین" },
  { value: "price-asc", label: "ارزان ترین" },
  { value: "price-desc", label: "گران ترین" },
  { value: "discount-desc", label: "بیشترین تخفیف" },
];

function RowSort() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange(value) {
    searchParams.set("sortBy", value);
    setSearchParams(searchParams);
  }
  return options.map((options, index) => (
    <p
      className="text-center rounded-2xl p-1 mb-4 cursor-pointer bg-(--back-color-alt) xs:text-sm xs:max-w-25.5 hover:bg-(--back-color) hover:text-(--border-color-alt)"
      onClick={() => handleChange(options.value)}
      key={index}
    >
      {options.label}
    </p>
  ));
}

export default RowSort;
