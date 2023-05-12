import { create } from "zustand";

interface MenuState {
    darkMode: boolean,
    padding: number,
    selectedLanguage: string,
    selectedTheme: string,
    selectedGradident: string,
    toggleDarkMode: () => void,
    setPadding: (value: number) => void,
    setSelectedLanguage: (value: string) => void,
    setSelectedGradident: (value: string) => void,
}
export default create<MenuState>()((set) => {
    return {
        darkMode: true,
        padding: 30,
        selectedLanguage: 'javascript',
        selectedGradident: '',
        selectedTheme: 'prism-tomorrow',

        toggleDarkMode: () => {
            set((state) => ({ darkMode: !state.darkMode }))
        },
        setPadding: (value: number) => {
            set(() => ({ padding: value }))
        },
        setSelectedLanguage: (value: string) => {
            set(() => ({ selectedLanguage: value }))
        },
        setSelectedGradident: (value: string) => {
            set(() => ({ selectedGradident: value }))
        },
        setSelectedTheme: (value: string) => {
            set(() => ({ selectedTheme: value }))
        },
    };
});