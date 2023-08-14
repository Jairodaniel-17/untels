import React, { useState, useEffect } from 'react';
import { useTheme } from '@nextui-org/react';

const DarkModeSwitch = () => {
    const [darkMode, setDarkMode] = useState(false);
    const { setTheme } = useTheme();

    useEffect(() => {
        if (darkMode) {
            setTheme('dark');
        } else {
            setTheme('default');
        }
    }, [darkMode, setTheme]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <label className="switch">
            <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
            <span className="slider"></span>
        </label>
    );
};

export default DarkModeSwitch;
