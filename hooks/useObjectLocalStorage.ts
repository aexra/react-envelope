import { useLocalStorage } from "./useLocalStorage";

export const useObjectLocalStorage = () => {
    const { setItem: setsItem, getItem: getsItem, removeItem: removesItem } = useLocalStorage();

    const setItem = (key: string, value: any) => {
        setsItem(key, JSON.stringify(value));
    };

    const getItem = (key: string) => {
        const value = getsItem(key);
        if (value) return JSON.parse(value);
        return value;
    };

    const removeItem = (key: string) => {
        removesItem(key);
    };

    return { setItem, getItem, removeItem };
};
