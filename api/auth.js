import api from './config';

export const login = async ({ username, password }) => {
    const response = await api.post(`/account/login`, {
        login: username,
        password: password
    });
    return response;
};

export const register = async ({ firstName, lastName, middleName, username, password }) => {
    const response = await api.post(`/account/register`, {
        firstName: firstName, 
        lastName: lastName, 
        middleName: middleName, 
        login: username, 
        password: password
    });
    return response;
};
