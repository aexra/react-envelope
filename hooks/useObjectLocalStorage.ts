import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useObjectLocalStorage = () => {
    const { setItem: setsItem, getItem: getsItem, removeItem: removesItem } = useLocalStorage();
    const [ value, setValue ] = useState<any | null>(null); 

    const setItem = (key: string, value: any) => {
        setsItem(key, JSON.stringify(value));
        setValue(value);
    };

    const getItem = (key: string) => {
        const value = getsItem(key);
        if (value) return JSON.parse(value);
        return value;
    };

    const removeItem = (key: string) => {
        removesItem(key);
        setValue(null);
    };

    return { value, setItem, getItem, removeItem };
};
