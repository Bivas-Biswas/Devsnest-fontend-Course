import {createContext} from "react";

export interface IThemeContextType {
    theme: boolean,
    setTheme: (theme: boolean) => void
}

const initialState: IThemeContextType = {
    theme: false,
    setTheme: (theme: boolean) => {
    }
}

const ThemeContext = createContext<IThemeContextType>(initialState)

export default ThemeContext