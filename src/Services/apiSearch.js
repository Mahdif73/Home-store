import supabase from "./supabase";

export async function getSearch({ searchTerm }) {
  const { data } = await supabase
    .from("Products")
    .select("*")
    .ilike("title", `%${searchTerm}%`);

  return data;
}

export async function getOrderSearch({ searchOrder }) {
  const { data } = await supabase
    .from("Order")
    .select("*")
    .ilike("order_code", `%${searchOrder}%`);

  return data;
}
