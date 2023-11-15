import { supabase, supabaseUrl } from "../../supabase.js";

export const login = async (loginEmail, loginPassword) => {
  const { error } = await supabase.auth.signInWithPassword({
    email: loginEmail,
    password: loginPassword,
  });

  if (error) {
    throw new Error(error.message);
  }
};

export const register = async (registerPayload) => {
  const { data, error } = await supabase.auth.signUp({
    email: registerPayload.email,
    password: registerPayload.password,
    options: {
      data: {
        username: registerPayload.username,
        fullName: registerPayload.fullName,
      },
    },
  });

  if (error) throw new Error(error.message);
};

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logOut() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
}

export async function updateUser({ fullName, bio, avatar }) {
  const { data, error } = await supabase.auth.updateUser({
    data: { fullName, bio },
  });

  if (error) throw new Error(error.message);
  if (!avatar) return data;

  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatar")
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatar/${fileName}`,
    },
  });

  if (error2) throw new Error(error2.message);
  return updatedUser;
}

export async function updatePassword({ newPassword }) {
  const { data, error } = await supabase.auth.updateUser({
    password: newPassword,
  });

  if (error) throw new Error(error.message);
}

export async function updateEmail({ newEmail }) {
  const { error } = await supabase.auth.updateUser({
    email: newEmail,
  });

  if (error) throw new Error(error.message);
}
//////////////////////////////////////////////////
export async function postFavouriteGames(data) {
  const { error } = await supabase
    .from("favourite")
    .insert([
      {
        id: data.id,
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

/////////////////////////////////////////////////////////

export async function postAllGames(data) {
  const { error } = await supabase
    .from("games")
    .insert([
      {
        id: data.id,
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

export async function getAllGames() {
  let { data: allGames, error } = await supabase.from("games").select("*");

  if (error) throw new Error(error.message);

  if (!error) {
    return allGames;
  }
}

export async function updateGames(data) {
  const { error } = await supabase
    .from("games")
    .update({ status: data.status }, { is_wishlist: data.wishlist })
    .eq("id", data.id)
    .select();

  if (error) throw new Error(error.message);
}

export async function deleteGame(data) {
  const { error } = await supabase.from("games").delete().eq("id", data.id);

  if (error) throw new Error(error.message);
}

/////////////////////////////////////////////////////////

export async function getWishlist() {
  let { data: wishlist, error } = await supabase.from("wishlist").select("*");

  if (error) throw new Error(error.message);

  if (!error) return wishlist;
}

export async function addToWishlist(data) {
  const { error } = await supabase
    .from("wishlist")
    .insert([
      {
        id: data.id,
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
  const { error } = await supabase.from("wishlist").delete().eq("id", data.id);

  if (error) throw new Error(error.message);
}

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//read
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
export async function deleteReview() {
  const { error } = await supabase
    .from("reviews")
    .delete()
    .eq("some_column", "someValue");

  if (error) throw new Error(error.message);
}
