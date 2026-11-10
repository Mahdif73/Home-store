import supabase from "./supabase";
export async function getCreateOrderCode(user_id) {
  const { data: existing } = await supabase
    .from("ordercode")
    .select("*")
    .eq("user_id", user_id)
    .maybeSingle();

  if (existing) return existing;

  function generateCode() {
    const character = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += character[Math.floor(Math.random() * character.length)];
    }
    return code;
  }

  const { data: created } = await supabase
    .from("ordercode")
    .insert({
      user_id,
      orderCode: generateCode(),
    })
    .select("*")
    .single();

  return created;
}

export async function deleteOrderCode(user_id) {
  const { error } = await supabase
    .from("ordercode")
    .delete()
    .eq("user_id", user_id);

  if (error) throw error;
  return true;
}

export async function getOrderCode(user_id) {
  const { data, error } = await supabase
    .from("ordercode")
    .select("*")
    .eq("user_id", user_id)
    .maybeSingle(); // هیچ‌وقت 406 نمی‌گیری

  if (error) throw error;
  return data;
}
