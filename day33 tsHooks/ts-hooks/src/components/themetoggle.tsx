
import { useContext } from 'react';
import themeContext from './themeContext'
import {ThemeContexttype} from './themeContext';
const Themetoggle = () => {
    const {theme,settheme}=useContext<ThemeContexttype>(themeContext);

    return (
        <div>
            <button onClick={()=>{
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
