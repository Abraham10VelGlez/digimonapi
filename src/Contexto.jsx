import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const Contexto = ({ children }) => {

    const [themeChecked, setThemeChecked] = useState(false);

    useEffect(() => {

        document.body.className = themeChecked ? 'night-mode' : 'day-mode';

    }, [themeChecked]);

    return (
        <ThemeContext.Provider value={{ themeChecked, setThemeChecked }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
