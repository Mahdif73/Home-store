import { useQuery, useQueryClient } from "@tanstack/react-query";

import { useParams, useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";
import { getProducts } from "../../Services/apiProducts";

const sortOptions = [
  "createdAt-asc",
  "price-asc",
  "price-desc",
  "discount-desc",
];
export function useProducts() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const { category, group } = useParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const sortByRaw = searchParams.get("sortBy") || "createdAt-asc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  const filters = Array.from(searchParams.entries())
    .filter(([key, value]) => key.includes("_") && value === "true")
    .map(([key]) => decodeURIComponent(key));

  const {
    isLoading,
    data: { data: products, count, filtersData } = {},
    error,
  } = useQuery({
    queryKey: ["products", category, group, sortBy, filters, page],
    queryFn: () => getProducts({ category, group, sortBy, filters, page }),
  });

  const pageCount = Math.ceil(count / PAGE_SIZE);

  // Prefetch next page
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["products", category, group, sortBy, filters, page + 1],
      queryFn: () =>
        getProducts({ category, group, sortBy, filters, page: page + 1 }),
    });
  }

  // Prefetch previous page
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["products", category, group, sortBy, filters, page - 1],
      queryFn: () =>
        getProducts({ category, group, sortBy, filters, page: page - 1 }),
    });
  }

  // Prefetch sort
  sortOptions.forEach((sort) => {
    if (sort !== sortByRaw) {
      const [field, direction] = sort.split("-");

      queryClient.prefetchQuery({
        queryKey: [
          "products",
          category,
          group,
          { field, direction },
          filters,
          page,
        ],
        queryFn: () =>
          getProducts({
            category,
            group,
            sortBy: { field, direction },
            filters,
            page,
          }),
      });
    }
  });

  return { isLoading, products, count, error, filtersData };
}
