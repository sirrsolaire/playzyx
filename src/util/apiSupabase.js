import { supabase } from "../../supabase.js";

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
        avatar_image: "",
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
