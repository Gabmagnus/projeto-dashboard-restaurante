import type role from "../config/enums/role";

interface User {
  username: string | null;
  nickname: string | null;
  password: string | null;
  role: role | null;
}

export const Login = async (user: User) => {
  try {
    setTimeout(() => {
      if (user.password === "123") {
        sessionStorage.setItem("user-data", JSON.stringify(user));
      }
    }, 5000)
  } catch(e) {
    console.log(e)
  }

}

export const checkAuth = (): boolean => {
    return (localStorage.getItem("user-data") ? true : false)
}

export const Logout = async () => {
  try {
    sessionStorage.removeItem("user-data");
  } catch (e) {
    console.log(e)
  }
}