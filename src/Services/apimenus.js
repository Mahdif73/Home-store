import supabase from "./supabase";

export async function getMenus() {
  const { data, error } = await supabase
    .from("Menus")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.error(error);
    throw new Error("Error fetching Menus");
  }

  return data;
}
