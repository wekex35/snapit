import React, { useState } from 'react';
import './Menu.css'
import { Button } from '@vscode/webview-ui-toolkit';
import useMenu from '../stores/useMenuStore';
import { shallow } from 'zustand/shallow'
import useMenuStore from '../stores/useMenuStore';
import { gradients, languages } from '../../data/menu-data';
import Logo from '../svgs/Logo';

interface NameValue {
    name: string
    value: string
}
interface MenuItem {
    label: string;
    options?: string[] | NameValue[];

}

interface StaticMenu {
    onShutterClick: () => void
}

const StaticMenu: React.FC<StaticMenu> = ({ onShutterClick }) => {
    const [showMenu, setShowMenu] = useState(false)
    const [toggleDarkMode,
        setPadding,
        setSelectedLanguage,
        setSelectedGradident,
        darkMode,
        padding,
        selectedLanguage,
        selectedGradident,
    ] = useMenuStore(
        (state) => [
            state.toggleDarkMode,
            state.setPadding,
            state.setSelectedLanguage,
            state.setSelectedGradident,
            state.darkMode,
            state.padding,
            state.selectedLanguage,
            state.selectedGradident,

        ],
        shallow
    )
    const menuItems: MenuItem[] = [
        { label: 'Gradient', options: gradients },
        { label: 'Padding' },
        { label: 'Language', options: languages },
        { label: 'Dark Mode' },
        { label: 'Export' },
    ];

    const handleGradientToggle = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedGradident(event.target.value);
    };

    const handleDarkModeToggle = () => {
        toggleDarkMode();
    };

    const handlePaddingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPadding(parseInt(event.target.value));
    };

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedLanguage(event.target.value);
    };

    return (
        <div className="main-parent">
            <div className="menu">
                <div className="settings" onClick={() => setShowMenu(!showMenu)} >
                    <span className="icon" style={{ fontSize: showMenu ? "20px" : "50px" }}>⛭</span>
                    <span className="title" style={{ display: showMenu ? "inline" : "none" }} >Settings</span>
                </div>
                <ul style={{ display: showMenu ? "inline" : "none" }} >
                    {menuItems.map((menuItem, index) => (
                        <li key={index}>
                            {menuItem.label === 'Gradient' && (
                                <>
                                    <label htmlFor="gradient-select">Gradient:</label>
                                    <select id="gradient-select" value={selectedGradident} onChange={handleGradientToggle}>
                                        <option value="">Select Gradient</option>
                                        {menuItem.options &&
                                            menuItem.options.map((option: any, index) => (
                                                <option key={index} value={option.value}  >
                                                    {option.name}
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
                                        max="75"
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
                                            menuItem.options.map((option: any, index) => (
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
            <Logo className="shutter button" onClick={onShutterClick} />
        </div>

    );
};

export default StaticMenu;

