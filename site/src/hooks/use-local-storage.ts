import { useEffect, useState } from 'react';

export const useLocalStorage = <T>(key: string, getInitialState: () => T) => {
    const [value, setValue] = useState<T>(null as T);

    useEffect(() => {
        const value = localStorage.getItem(key);
        if (value === null) {
            const initialValue = getInitialState();
            setValue(initialValue);
            localStorage.setItem(key, JSON.stringify(initialValue));
        } else {
            setValue(JSON.parse(value));
        }
    }, [getInitialState, key]);

    useEffect(() => {
        if (value !== null) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }, [key, value]);

    return [value as T, setValue] as const;
};
