import supabase from "./supabase";

export async function getFavorites() {
  const { data, error } = await supabase.from("Favorites").select("*");

  if (error) {
    console.error(error);
    throw new Error("Error fetching favorite");
  }

  return data;
}

export async function getFavorite({ product_id }) {
  const { data, error } = await supabase
    .from("Favorites")
    .select("*")
    .eq("product_id", product_id)
    .maybeSingle();

  if (error) {
    console.error(error);
    throw new Error("Error fetching favorite");
  }

  return data;
}

export async function createFavorite(newFavorites) {
  const { data, error } = await supabase
    .from("Favorites")
    .insert(newFavorites)
    .select();

  if (error) throw new Error("Error add favorite");

  return data;
}

export async function deleteFavorite(id) {
  const { data, error } = await supabase
    .from("Favorites")
    .delete()
    .eq("id", id)
    .select();

  if (error) throw new Error("Error delete favorite");

  return data;
}

export async function getFavoritesByUserAndProduct(user_id, product_id) {
  const { data, error } = await supabase
    .from("Favorites")
    .select("*")
    .eq("user_id", user_id)
    .eq("product_id", product_id);

  if (error) throw new Error("Error fetching favorite");

  return data;
}
