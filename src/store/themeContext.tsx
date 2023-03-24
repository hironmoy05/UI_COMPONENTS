import React, { createContext, useContext, useState } from 'react';

type DefaultValuesTypes = {
    theme: {
        mode: string,
    },
    updateTheme: (state: object) => void
}

type AppProviderTypes = {
    children: React.ReactNode
}

const defaultValues = {
    theme: {
        mode: 'dark',
    },
    updateTheme: (state) => { }
};

const AppContext = createContext<DefaultValuesTypes>(defaultValues);

export const AppProvider: React.FC<AppProviderTypes> = ({ children }) => {
    const [theme, setTheme] = useState({ mode: 'light' });

    const updateTheme = (data: {}) => {
        setTheme(theme => ({ ...theme, ...data }));
    };

    return (
        <AppContext.Provider value={ { theme, updateTheme } }>
            { children }
        </AppContext.Provider>
    )
}

export const useThemeContext = () => useContext(AppContext);