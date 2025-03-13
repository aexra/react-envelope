import api from './config';

export const me = async () => {
    const response = await api.get("/users-me");
    return response;
};

export const update = async (data) => {
    const auth = JSON.parse(localStorage.getItem('user'));
    const response = await api.put(`/users/${auth?.id}`, data);
    return response;
};