import { RegisterEntity } from "@/types.project";
import client from "./client";

const login = (email: string, password: string) =>
  client.post("login", {
    email,
    password,
  });

const register = (data: RegisterEntity) => client.post("register", data);

export default {
  login,
  register,
};
