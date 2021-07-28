import { useContext } from "react"
import Shows from "../App"
const Profile = () => {
    const showprofile = useContext(Shows)
    
        if ({showprofile}===true) {
            return (
                <div>
                    <h1>Profile {showprofile}</h1>
                </div>
            )

        }
        else {
            return(
                <>
                <h1>you are not logged in</h1>
            </>
            )
        
        }
    }




export default Profile
