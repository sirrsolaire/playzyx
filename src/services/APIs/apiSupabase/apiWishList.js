import { supabase } from "../../../../supabase.js";

export async function getWishlist(id) {
  let { data: wishlist, error } = await supabase
    .from("wishlist")
    .select("*")
    .eq("account_id", id);

  if (error) throw new Error(error.message);

  if (!error) return wishlist;
}

export async function addToWishlist(data) {
  const { error } = await supabase
    .from("wishlist")
    .insert([
      {
        name: data.name,
        image: data.image,
        meta: data.meta,
        added: data.added,
        platforms: data.platforms,
      },
    ])
    .select();

  if (error) throw new Error(error.message);
}

export async function deleteWishlist(data) {
  const { error } = await supabase
    .from("wishlist")
    .delete()
    .eq("name", data.name)
    .eq("account_id", data.userId);

  if (error) throw new Error(error.message);
}
