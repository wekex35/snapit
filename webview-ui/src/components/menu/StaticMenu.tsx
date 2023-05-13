import React, { useState } from 'react';
import './StaticMenu.css'
import { shallow } from 'zustand/shallow'
import useMenuStore from '../stores/useMenuStore';
import { gradients, languages } from '../../data/menu-data';
import Logo from '../svgs/Logo';
import { CopyIcon, SettingIcon } from '../svgs/Icons';


interface NameValue {
    name: string
    value: string
}
interface MenuItem {
    label: string;
    options?: string[] | NameValue[];

}

interface StaticMenu {
    onShutterClick: (isCopy: boolean) => void
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

    const handleShowMenu = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const isShowMenu = !showMenu
        var elementLeft = document.querySelector(".menu-group-left")
        var elementRight = document.querySelector(".menu-group-right")

       
        elementLeft?.classList.toggle("active");
        elementRight?.classList.toggle("active");

        
        setShowMenu(isShowMenu); 
    }

    return (
        <div className="menu-parent">
            <div className="menu">
                <div className="menu-items menu-group-left" style={{ visibility: showMenu ? "visible" : 'hidden' }}>
                    <div className="menu-item">
                        <label className='menu-label' htmlFor="gradient-select">Gradient</label>
                        <select id="gradient-select" value={selectedGradident} onChange={handleGradientToggle}>
                            <option value="">Select Gradient</option>
                            {(menuItems[0].options as []).map((option: any, index: any) => (
                                <option key={index} value={option.value}  >
                                    {option.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="menu-item">
                        <label className='menu-label' htmlFor="padding-range">Padding</label>
                        <input
                            type="range"
                            id="padding-range"
                            min="0"
                            max="75"
                            value={padding}
                            onChange={handlePaddingChange}
                        />
                    </div>
                </div>
                <div className="menu-shutter menu-items">
                    <span className='menu-shutter-childs' ><SettingIcon onClick={handleShowMenu}/></span>
                    <span className='menu-shutter-icon' style={{ width: "100px", float: 'left' }} onClick={() => onShutterClick(false)}>  <Logo /></span>
                    <span className='menu-shutter-childs' onClick={() => onShutterClick(true)} > <CopyIcon /></span>
                </div>
                <div className="menu-items  menu-group-right" style={{ visibility: showMenu ? "visible" : 'hidden' }}>
                    <div className="menu-item">
                        <label className='menu-label' htmlFor="language-select">Language</label>
                        <select id="language-select" value={selectedLanguage} onChange={handleLanguageChange}>
                            <option value="">Select Language</option>
                            {(menuItems[2].options as []).map((option: any, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="menu-item">
                        <label className='menu-label' htmlFor="dark-mode-switch">Dark Mode</label>
                        <input
                            type="checkbox"
                            id="dark-mode-switch"
                            checked={darkMode}
                            onChange={handleDarkModeToggle}
                        />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default StaticMenu;

