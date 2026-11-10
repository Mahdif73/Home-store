import { useRef, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { Link } from "react-router-dom";
import { faDigitsNum } from "../../utils/helpers";
import { useKey } from "../../hooks/useKey";
import { useDebounce } from "../../hooks/useDebounce";
import useOutsideClick from "../../hooks/useOutsideClick";
import { useSearch } from "./useSearch";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);
  const { search } = useSearch(debouncedSearch);
  const inputEl = useRef(null);

  const closed = useOutsideClick(() => setSearchTerm(""));

  useKey("Enter", function () {
    inputEl.current.focus();
    setSearchTerm("");
  });

  return (
    <div className="relative cursor-pointer mr-12 xs:w-full xs:my-4 xs:mx-auto sm:my-4 md:w-187.5 lg:w-125 lg:m-4 xl:w-150 2xl:w-225">
      <span className="absolute top-[24%] right-5 cursor-pointer text-(--text-color) hover:text-(--text-color-light)">
        <HiOutlineSearch onClick={() => setSearchTerm("")} />
      </span>
      <input
        type="text"
        placeholder="جستجوی محصول مورد نظر ..."
        className="h-12 text-sm w-full rounded-[7px] px-16 bg-(--border-color-alt) border border-(--border-color)"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        ref={inputEl}
      />

      {searchTerm && search && (
        <ul
          className="absolute flex flex-col justify-start min-w-100 top-12 text-(--text-color) bg-(--border-color-alt) border border-(--border-color) rounded-[0_0_1.25rem_1.25rem]"
          ref={closed}
        >
          {search?.length === 0 && (
            <p className="py-4 px-8 border-b border-(--border-color)">
              هیچ محصولی با این عبارت پیدا نشد
            </p>
          )}
          {search &&
            search.slice(0, 10).map((product) => (
              <li
                key={product.id}
                className="flex flex-col justify-start py-2 px-2 text-(--text-color) bg-(--border-color-alt) min-w-100 top-12 border-b border-(--border-color) last:rounded-[0_0_1.25rem_1.25rem] hover:bg-(--back-color-alt)"
              >
                <Link
                  to={`/products/details/${product.id}`}
                  onClick={() => setSearchTerm("")}
                >
                  {product.title}
                </Link>
              </li>
            ))}

          {search.length > 10 && (
            <li className="py-4 px-8 border-b border-(--border-color) hover:bg-(--back-color-alt) last:border-0 last:hover:rounded-b-2xl">
              <Link to={`/search?query=${searchTerm}`}>
                مشاهده همه نتایج ({faDigitsNum(search.length)})
              </Link>
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

export default Search;
