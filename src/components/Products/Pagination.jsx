import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";
import { faDigitsNum } from "../../utils/helpers";

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <section className="container mt-12 flex justify-center items-center gap-x-10 md:mr-8">
      <button
        className="text-3xl"
        onClick={prevPage}
        disabled={currentPage === 1}
      >
        <HiOutlineArrowRight className=" bg-(--back-color-alt) text-(--back-color) p-1.75 rounded-[50%] transition delay-10 hover:bg-(--back-color) hover:text-(--back-color-alt)" />
      </button>

      <ul className="flex gap-8">
        {Array.from({ length: pageCount }, (_, index) => {
          const tempPageNo = index + 1;
          return (
            <li key={index}>
              <button
                type="button"
                onClick={() => {
                  searchParams.set("page", tempPageNo);
                  setSearchParams(searchParams);
                }}
                className={`text-sm hover:text-(--text-color-light) ${
                  tempPageNo === currentPage ? "text-(--back-color)" : ""
                }`}
              >
                {faDigitsNum(tempPageNo)}
              </button>
            </li>
          );
        })}
      </ul>

      <button
        className="text-3xl"
        onClick={nextPage}
        disabled={currentPage === pageCount}
      >
        <HiOutlineArrowLeft className="bg-(--back-color-alt) text-(--back-color) p-1.75 rounded-[50%] transition delay-10 hover:bg-(--back-color) hover:text-(--back-color-alt)" />
      </button>
    </section>
  );
}

export default Pagination;
