import { supabase, supabaseUrl } from "../../../../supabase.js";

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
  const { error, data } = await supabase.auth.signUp({
    email: registerPayload.email,
    password: registerPayload.password,
    options: {
      data: {
        username: registerPayload.username,
        fullName: registerPayload.fullName,
      },
    },
  });

  console.log(data);

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
  const { error } = await supabase.auth.updateUser({
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

export async function recoverPassword({ email }) {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "http://example.com/account/update-password",
  });

  if (error) throw new Error(error.message);
}
