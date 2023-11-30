import { supabase } from "../../../../supabase.js";

export async function postFavouriteGames(data) {
  const { error } = await supabase
    .from("favourite")
    .insert([
      {
        // id: data.id,
        name: data.name,
        image: data.image,
        meta: data.meta,
        added: data.added,
        platforms: data.platforms,
        slug: data.slug,
      },
    ])
    .select();

  if (error) throw new Error(error.message);
}

export async function getFavouriteGames(id) {
  let { data: favourite, error } = await supabase
    .from("favourite")
    .select("*")
    .eq("account_id", id);

  if (!error) {
    return favourite;
  }

  if (error) throw new Error(error.message);
}

export async function deleteFavouriteGame(data) {
  const { error } = await supabase.from("favourite").delete().eq("id", data.id);

  if (error) throw new Error(error.message);
}

export async function updateFavouriteGame(data) {
  const { error } = await supabase
    .from("favourite")
    .update({
      id: data.id,
      name: data.name,
      image: data.image,
      meta: data.meta,
      added: data.added,
      platforms: data.platforms,
    })
    .eq("id", data.id)
    .select();

  if (error) throw new Error(error.message);
}
