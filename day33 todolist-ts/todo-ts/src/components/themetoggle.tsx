
import { useContext } from 'react'

import Themecontext, { Themecontexttype } from './themecontext'

const Themetoggle = () => {
    const {theme,settheme}=useContext<Themecontexttype>(Themecontext)
    return (
        <div>
            <button className={theme?"theme-toggle dark":"theme-toggle"}onClick={()=>{
                settheme(!theme)
            }}>
                {
                    theme?"dark":"light"
                }

            </button>
        </div>
    )
}

export default Themetoggle
