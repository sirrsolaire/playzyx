import { supabase } from "../../../../supabase.js";

export async function postAllGames(data) {
  const { error } = await supabase
    .from("games")
    .insert([
      {
        name: data.name,
        image: data.image,
        meta: data.meta,
        added: data.added,
        platforms: data.platforms,
        status: data.status,
      },
    ])
    .select();

  if (error) throw new Error(error.message);
}

export async function getAllGames(id) {
  let { data: allGames, error } = await supabase
    .from("games")
    .select("*")
    .eq("account_id", id);

  if (error) throw new Error(error.message);

  if (!error) {
    return allGames;
  }
}

export async function updateGames(data) {
  const { error } = await supabase
    .from("games")
    .update({ status: data.status }, { is_wishlist: data.wishlist })
    .eq("name", data.name)
    .eq("account_id", data.userId)
    .select();

  if (error) throw new Error(error.message);
}

export async function deleteGame(data) {
  const { error } = await supabase
    .from("games")
    .delete()
    .eq("name", data.name)
    .eq("account_id", data.userId);

  if (error) throw new Error(error.message);
}
