import React, { useState } from 'react';
import './Menu.css'
import { Button } from '@vscode/webview-ui-toolkit';
interface MenuItem {
    label: string;
    options?: string[];
}

const StaticMenu: React.FC = () => {

    const [darkMode, setDarkMode] = useState(false);
    const [padding, setPadding] = useState(0);
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [selectedGradident, setSelectedGradident] = useState('');

    const menuItems: MenuItem[] = [
        { label: 'Gradient', options: ['Gradient 1', 'Gradient 2', 'Gradient 3'] },
        { label: 'Padding' },
        { label: 'Language', options: ['JavaScript', 'TypeScript', 'Python'] },
        { label: 'Dark Mode' },
        { label: 'Export' },
    ];

    const handleGradientToggle = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedGradident(event.target.value);
    };

    const handleDarkModeToggle = () => {
        setDarkMode((prevState) => !prevState);
    };

    const handlePaddingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPadding(parseInt(event.target.value));
    };

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedLanguage(event.target.value);
    };

    return (
        <div className={`menu ${darkMode ? 'dark-mode' : ''}`}>
            <ul>
                {menuItems.map((menuItem, index) => (
                    <li key={index}>
                        {menuItem.label === 'Gradient' && (
                            <>
                                <label htmlFor="gradient-select">Gradient:</label>
                                <select id="gradient-select" value={selectedGradident} onChange={handleGradientToggle}>
                                    <option value="">Select Gradient</option>
                                    {menuItem.options &&
                                        menuItem.options.map((option, index) => (
                                            <option key={index} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                </select>
                            </>
                        )}
                        {menuItem.label === 'Padding' && (
                            <>
                                <label htmlFor="padding-range">Padding:</label>
                                <input
                                    type="range"
                                    id="padding-range"
                                    min="0"
                                    max="50"
                                    value={padding}
                                    onChange={handlePaddingChange}
                                />
                            </>
                        )}
                        {menuItem.label === 'Language' && (
                            <>
                                <label htmlFor="language-select">Language:</label>
                                <select id="language-select" value={selectedLanguage} onChange={handleLanguageChange}>
                                    <option value="">Select Language</option>
                                    {menuItem.options &&
                                        menuItem.options.map((option, index) => (
                                            <option key={index} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                </select>
                            </>
                        )}
                        {menuItem.label === 'Dark Mode' && (
                            <>
                                <label htmlFor="dark-mode-switch">Dark Mode:</label>
                                <input
                                    type="checkbox"
                                    id="dark-mode-switch"
                                    checked={darkMode}
                                    onChange={handleDarkModeToggle}
                                />
                            </>
                        )}
                        {menuItem.label === 'Export' && (
                          
                               <button>Export</button>
                        
                        )}

                        
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StaticMenu;
