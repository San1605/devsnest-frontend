import React, { useContext ,useState} from 'react'
import Shows from "../App"
const Home = () => {
    const [buttontext, setButtontext] = useState("login")
    var ShowHome=useContext(Shows)
    const logout=()=>{

        setButtontext("logout")
        ShowHome=true;

    }
    return (
        <div>

        
            <h1>Home</h1>
            <h2>If not logged in cant access, Profile & Dashboard</h2>
            <button onClick={logout}>{buttontext}</button>
        </div>
    )
}

export default Home
