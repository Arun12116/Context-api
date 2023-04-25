import React, { useContext } from 'react'
import "./Nav.css"
import { myContext } from './Context'

const Nav = () => {
    const {setLogin}=useContext(myContext)
    return (
        <>
            <div className="nav-Container">
            <h2 style={{color:"white"}}>React Context-api</h2>
                <div className="nav-Bar">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </div>
                <div className="logout">
                <button onClick={()=>setLogin(false)}>Logout</button>
                <span style={{marginLeft:"2rem"}}>Arun</span>
                </div>

            </div>

        </>
    )
}

export default Nav