import api from './config';

export const me = async () => {
    const response = await api.get("/users-me");
    return response;
};

export const update = async (data) => {
    const auth = JSON.parse(localStorage.getItem('auth'));
    const response = await api.put(`/users/${auth?.data?.id}`, data);
    return response;
};