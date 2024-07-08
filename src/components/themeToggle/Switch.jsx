import * as React from 'react';  
import useTheme from './../../hooks/useThemes';
import "./Switch.scss"
const ThemeSwitcher = () => {
    const [theme, handleChange] = useTheme('light');

    return (
        <div className='container-switch'>
                    <span className='switchlabel'>{theme}</span>

            <label className="switch">
        <input type="checkbox" onChange={handleChange} checked={theme === 'dark'} />
        <span className="slider"></span>
    </label>
           
        </div>
    );
};

export default ThemeSwitcher;
