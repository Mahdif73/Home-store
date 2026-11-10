import supabase from "./supabase";

export async function sendContact(contact) {
  const { data, error } = await supabase.from("Contact").insert(contact);

  if (error) throw new Error("Error sending message");
  return data;
}
