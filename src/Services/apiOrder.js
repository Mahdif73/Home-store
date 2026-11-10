import supabase from "./supabase";

export async function getOrders() {
  const { data, error } = await supabase
    .from("Order")
    .select(
      "id, totalPrice, totalDiscount, payWay, items, created_at,order_code, orderStatus, payStatus",
    );

  if (error) {
    console.error(error);
    throw new Error("Error fetching products");
  }

  return data;
}

export async function getOrder(id) {
  const { data, error } = await supabase
    .from("Order")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Order not found");
  }

  return data;
}

export async function createOrder(newOrder) {
  const { data, error } = await supabase
    .from("Order")
    .insert(newOrder)
    .select();

  if (error) throw new Error("Error creating cart");

  return data;
}

export async function updateOrder(id, obj) {
  const { data, error } = await supabase
    .from("Order")
    .update(obj)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Order could not be updated");
  }
  return data;
}
