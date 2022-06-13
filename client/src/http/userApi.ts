import { $autHost, $host } from ".";
import jwtDecode from 'jwt-decode';
import { User } from "../utils/types";


export const registration = async (email: string, username: string, password: string): Promise<User> => {
    const { data } = await $host.post('api/user/registration', { email, username, password, role: 'ADMIN' });
    localStorage.setItem('token', data.jToken);
    return jwtDecode(data.jToken);
}

export const login = async (email: string, password: string): Promise<User> => {
    const { data } = await $autHost.post('api/user/login', { email, password });
    localStorage.setItem('token', data.jToken);
    return jwtDecode(data.jToken);
}

export const check = async () => {
    const { data } = await $autHost.post('api/user/check');
    localStorage.setItem('token', data.jToken);
    return jwtDecode(data.jToken);
}