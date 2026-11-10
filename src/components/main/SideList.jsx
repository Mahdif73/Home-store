import { useSearchParams } from "react-router-dom";
import { useProducts } from "../Products/useProducts";
import { useState } from "react";
import Button from "./Button";
import { MdMenuOpen } from "react-icons/md";

function SideList() {
  const [openFilters, setOpenFilters] = useState({});

  const [search, setSearch] = useSearchParams();
  // const navigate = useNavigate();
  // const location = useLocation();

  const { filtersData } = useProducts();

  const filtersObject = {};

  if (!filtersData || !filtersData.length) return null;

  filtersData.forEach((f) => {
    if (!f || !f.filter_name || !f.value) return;

    const cleanName = f.filter_name.trim();
    const cleanValue = String(f.value).trim();

    if (!filtersObject[cleanName]) {
      filtersObject[cleanName] = { name: cleanName, values: {} };
    }

    filtersObject[cleanName].values[cleanValue] = {
      raw: cleanValue,
      unit: f.unit,
    };
  });

  const filterKeys = Object.keys(filtersObject);

  // -----------------------------
  // READ URL FILTERS
  // -----------------------------
  const activeFiltersFromUrl = {};
  search
    .toString()
    .split("&")
    .filter((p) => p.includes("_"))
    .forEach((p) => {
      const [k, v] = p.split("=");
      const decoded = decodeURIComponent(k).replace(/\+/g, " ");
      activeFiltersFromUrl[decoded] = v === "true";
    });

  // -----------------------------
  // SET FILTERS IN URL
  // -----------------------------

  const filterHandler = (e, type, value) => {
    const key = `${type}_${value}`;

    const newSearch = new URLSearchParams(search.toString());

    if (e.currentTarget.checked) {
      newSearch.set(key, true);
      newSearch.set("page", 1);
    } else {
      newSearch.delete(key);
    }

    setSearch(newSearch);
  };

  const isActiveFilters = Object.keys(activeFiltersFromUrl).length > 0;

  function clearAllFilters() {
    const newSearch = new URLSearchParams();
    newSearch.set("page", 1);
    setSearch(newSearch);
    // navigate(location.pathname + "?page=1", { replace: true });
  }
  return (
    <>
      {isActiveFilters && (
        <Button htmlType="filter" onClick={clearAllFilters}>
          حذف فیلترها
        </Button>
      )}
      <ul className="w-full">
        {filterKeys.map((filterKey) => {
          const cleanKey = filterKey.trim();

          return (
            <li
              className="w-full transition delay-40 border-b border-(--border-color) last:border-0"
              key={cleanKey}
            >
              <div className="flex items-start justify-between h-15 pt-4">
                <h4 className="text-base text-(--text-color) font-medium hover:text-(--text-color-light)">
                  {filtersObject[filterKey].name}
                </h4>
                <span
                  className="cursor-pointer text-(--back-color)"
                  onClick={() =>
                    setOpenFilters((prev) => ({
                      ...prev,
                      [cleanKey]: !prev[cleanKey],
                    }))
                  }
                >
                  <MdMenuOpen />
                </span>
              </div>

              {openFilters[cleanKey] && (
                <ul
                  className={`max-h-0 overflow-hidden transition duration-30 ${openFilters[cleanKey] ? "max-h-75" : ""}`}
                >
                  {Object.keys(filtersObject[filterKey].values).map((value) => {
                    const unit = filtersObject[filterKey].values[value].unit;

                    return (
                      <li className="flex ga-4 pb-2 first:pt-2" key={value}>
                        <input
                          className="w-5"
                          id={value + cleanKey}
                          type="checkbox"
                          checked={
                            activeFiltersFromUrl[`${filterKey}_${value}`] ||
                            false
                          }
                          onChange={(e) => filterHandler(e, filterKey, value)}
                        />
                        <label
                          htmlFor={value + cleanKey}
                          className="text-(--text-color) text-sm flex justify-between items-center py-0.5 px-4"
                        >
                          {filtersObject[filterKey].values[value].raw} {unit}
                        </label>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default SideList;
