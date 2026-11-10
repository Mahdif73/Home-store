import supabase from "./supabase";

export async function getCart() {
  const { data, error } = await supabase
    .from("Cart")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.error(error);
    throw new Error("Error fetching Cart");
  }

  return data;
}

export async function createCart(newCart) {
  const { data, error } = await supabase
    .from("Cart")
    .insert([newCart])
    .select();

  if (error) throw new Error("Error creating cart");
  return data;
}

export async function updateCartQuantity({
  quantity,
  totalPrice,
  totalOffPrice,
  id,
}) {
  const { data, error } = await supabase
    .from("Cart")
    .update({ quantity, totalPrice, totalOffPrice })
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error("Error updating cart");

  return data;
}

export async function deleteCart(id) {
  const { data, error } = await supabase
    .from("Cart")
    .delete()
    .eq("id", id)
    .select();

  if (error) throw new Error("Error updating cart");

  return data;
}

export async function deleteCarts() {
  const { data, error } = await supabase.from("Cart").delete().gt("id", 0);
  if (error) console.log(error.message);

  return data;
}
