import React, { useContext } from 'react'
import Shows from "../App"
const Dashboard = () => {
    const Showdash=useContext(Shows)

    if({Showdash}===true) {
        return (
            <div>
                 <h1>Dashboard: Private Route {Showdash}</h1>
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

export default Dashboard
