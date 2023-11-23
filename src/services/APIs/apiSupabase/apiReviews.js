import { supabase } from "../../../../supabase.js";

export async function getReviews() {
  let { data: reviews, error } = await supabase.from("reviews").select("*");

  if (error) throw new Error(error.message);

  if (!error) return reviews;
}
//post
export async function postReview(data) {
  const { error } = await supabase
    .from("reviews")
    .insert([
      {
        // id: data.id,
        user_name: data.user_name,
        user_avatar: data.user_avatar,
        review: data.review,
        rate: data.rate,
        tags: data.tags,
        game_name: data.game_name,
        game_slug: data.game_slug,
      },
    ])
    .select();

  if (error) throw new Error(error.message);
}
//update
export async function updateReview() {
  const { data, error } = await supabase
    .from("reviews")
    .update({ other_column: "otherValue" })
    .eq("some_column", "someValue")
    .select();

  if (error) throw new Error(error.message);
}
//delete
export async function deleteReview(data) {
  const { error } = await supabase.from("reviews").delete().eq("id", data.id);

  if (error) throw new Error(error.message);
}
