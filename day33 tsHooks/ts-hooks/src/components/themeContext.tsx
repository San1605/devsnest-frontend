
import { createContext } from 'react'
export interface ThemeContexttype {
    theme: boolean,
    settheme: (theme: boolean) => void
}

const initialState: ThemeContexttype = {
    theme: false,
    settheme: (theme: boolean) => { }
}
const themeContext = createContext<ThemeContexttype>(initialState)

export  default themeContext
