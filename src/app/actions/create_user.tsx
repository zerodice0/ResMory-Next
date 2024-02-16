"use server";

export const createUser = async (prevState: any, formData: FormData) => {
  const email = formData.get("email");
  const nickname = formData.get("nickname");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  console.log(email, nickname, password, confirmPassword);

  // createUserWithEmailAndPassword(auth, email, password);
  return {
    message: "Please"
  }
}

