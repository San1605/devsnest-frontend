
import { createContext } from 'react'
export interface Themecontexttype{
    theme:boolean,
    settheme:(theme:boolean)=>void
}

const initialState:Themecontexttype={
  theme:false ,
  settheme:(theme:boolean)=>{} 
}
const themecontext = createContext<Themecontexttype>(initialState)


export default themecontext
