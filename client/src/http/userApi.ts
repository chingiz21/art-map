import { $autHost, $host } from ".";
import jwtDecode from 'jwt-decode';


export const registration = async (email: string, username: string, password: string) => {
    const { data } = await $host.post('api/user/registration', { email, username, password, role: 'ADMIN' });
    return jwtDecode(data.jToken);
}

export const login = async (email: string, password: string) => {
    const { data } = await $autHost.post('api/user/login', { email, password });
    return jwtDecode(data.jToken);
}

export const check = async () => {
    const response = await $host.post('api/user/check');
    return response;
}