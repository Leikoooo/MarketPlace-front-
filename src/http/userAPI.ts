import jwtDecode from "jwt-decode";
import { $authHost, $host } from "./index";

export const registration = async (username: string, email: string, password: string) => {
    const { data } = await $host.post("api/registration", {username, email, password, role: "ADMIN" });
    return jwtDecode(data.token);
}

export const login = async (email: string, password: string) => {
    const { data } = await $host.post("api/login", { email, password });
    return jwtDecode(data.token);
}

export const check = async () => {
    const { data } = await $authHost.get("api/auth");
    return jwtDecode(data.token);
}

export async function getProfile(id: number) {
    const { data } = await $host.get(`api/profile/getProfile?id=${id}`);
    return data;
}
