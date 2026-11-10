import supabase from "./supabase";

export async function getAddress() {
  const { data, error } = await supabase
    .from("Address")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    console.error(error);
    throw new Error("Error fetching address");
  }

  return data;
}

export async function createEditAddress(newAddress, id) {
  let query = supabase.from("Address");

  if (!id) query = query.insert(newAddress);

  if (id) query = query.update(newAddress).eq("id", id);

  const { data, error } = await query.select().single();
  // const { data, error } = await supabase
  //   .from("Address")
  //   .insert(newAddress)
  //   .select()
  //   .single();

  if (error) throw new Error("Error creating new address");

  if (data) console.log("adda");

  return data;
}

export async function deleteAddress(id) {
  const { data, error } = await supabase
    .from("Address")
    .delete()
    .eq("id", id)
    .select();

  if (error) throw new Error("Error updating cart");

  return data;
}

export async function getUpdateAddressOrg({ id, isTitle, resetAll }) {
  if (resetAll) {
    await supabase.from("Address").update({ isTitle: false }).neq("id", id);
  }

  if (isTitle) {
    const { data, error } = await supabase
      .from("Address")
      .update({ isTitle: true })
      .eq("id", id)
      .select()
      .single();

    if (error) throw new Error("Error updating first address ");
    return data;
  }

  return null;
}
