import { supabase } from "../../../../supabase.js";

export async function getReplies() {
  let { data: replies, error } = await supabase.from("replies").select("*");

  if (error) throw new Error(error.message);

  if (!error) return replies;
}

export async function postReply(data) {
  const { error } = await supabase
    .from("replies")
    .insert([
      {
        reply: data.reply,
        avatar: data.avatar,
        username: data.username,
        reply_uid: data.id,
      },
    ])
    .select();

  if (error) throw new Error(error.message);
}

export async function deleteReply() {
  const { error } = await supabase
    .from("replies")
    .delete()
    .eq("some_column", "someValue");

  if (error) throw new Error(error.message);
}

export async function updateReply() {
  const { error } = await supabase
    .from("replies")
    .update({ other_column: "otherValue" })
    .eq("some_column", "someValue")
    .select();

  if (error) throw new Error(error.message);
}
