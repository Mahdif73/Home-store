import supabase from "./supabase";

export async function createEditComment(comment, id) {
  let query = supabase.from("Comments");
  if (!id) {
    const { data: existing } = await supabase
      .from("Comments")
      .select("id")
      .eq("user_id", comment.user_id)
      .eq("product_id", comment.product_id)
      .maybeSingle();

    if (existing) id = existing.id;
  }

  if (!id) query = query.insert(comment);
  if (id) query = query.update(comment).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) throw new Error("Error create comment");
  return data;
}

export async function getComment(id) {
  const { data, error } = await supabase
    .from("Comments")
    .select("*")
    .eq("product_id", id);

  if (error) {
    console.error(error);
    throw new Error("Error fetching comment");
  }

  return data;
}

export async function getComments(id) {
  const { data, error } = await supabase
    .from("Comments")
    .select("*")
    .eq("user_id", id)
    .order("id", { descending: true });

  if (error) {
    console.error(error);
    throw new Error("Error fetching comments");
  }

  return data;
}

export async function deleteComment(id) {
  const { data, error } = await supabase
    .from("Comments")
    .delete()
    .eq("id", id)
    .select();

  console.log("deleted:", data);

  if (error) throw new Error("Error Delete Comment");

  return data;
}
