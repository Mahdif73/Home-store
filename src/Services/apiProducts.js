import { PAGE_SIZE } from "../utils/constants";
import supabase from "./supabase";

export async function getDiscount() {
  const { data, error } = await supabase
    .from("Products")
    .select("*")
    .gt("discount", 0)
    .order("discount", { ascending: false })
    .limit(30);

  if (error) throw error;

  return data;
}

export async function getGroups() {
  const { data, error } = await supabase.from("Groups").select("*");

  if (error) throw error;
  return data;
}

export async function getBrands() {
  const { data, error } = await supabase
    .from("Brands")
    .select("*")
    .order("title");

  if (error) throw error;
  return data;
}

export async function getAllProducts({ brand }) {
  let query = supabase.from("Products").select("*");

  if (brand) {
    query = query.eq("brand", brand);
  }

  const { data, error } = await query;

  if (error) throw error;
  return data;
}

export async function getProducts({ category, group, filters, sortBy, page }) {
  let query = supabase.from("Products").select("*", { count: "exact" });

  if (category) {
    query = query.eq("category", category);
  }
  if (group) {
    query = query.eq("group", group);
  }

  if (filters.length) {
    const { data: filteredProducts, error: filterError } = await supabase.rpc(
      "get_filtered_product_ids",
      {
        p_filters: filters,
      },
    );

    if (filterError) {
      console.error(filterError);
      throw new Error("Error filtering products");
    }

    const validProductIds = filteredProducts.map((item) => item.product_id);

    if (!validProductIds.length) {
      return {
        data: [],
        count: 0,
        filtersData: [],
      };
    }

    query = query.in("id", validProductIds);
  }

  if (sortBy) {
    query = query.order("available", { ascending: false });
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });
  }

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data: products, count, error } = await query;

  // for filters
  let sidebarProductsQuery = supabase.from("Products").select("id");

  if (category) {
    sidebarProductsQuery = sidebarProductsQuery.eq("category", category);
  }

  if (group) {
    sidebarProductsQuery = sidebarProductsQuery.eq("group", group);
  }

  const { data: sidebarProducts } = await sidebarProductsQuery;

  const sidebarProductIds = sidebarProducts.map((p) => p.id);

  const { data: sidebarPf } = await supabase
    .from("productsfilters")
    .select("product_id, filter_id")
    .in("product_id", sidebarProductIds);

  const { data: filtersData } = await supabase
    .from("Filters")
    .select("*")
    .in(
      "id",
      sidebarPf.map((x) => x.filter_id),
    );

  if (error) {
    console.error(error);
    throw new Error("Error fetching products");
  }

  return {
    data: products || [],
    count: count || 0,
    filtersData: filtersData || [],
  };
}

export async function getProduct(id) {
  const { data, error } = await supabase
    .from("Products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("product not found");
  }

  return data;
}

