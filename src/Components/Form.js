import React, { useContext, useState } from 'react'
import "./Form.css"
import { myContext } from './Context'

const Form = () => {
  const { setLogin } = useContext(myContext)
  const [user, setUser] = useState({
    name: "",
    password: "",

  })
  const clikhandler = _ => {
    if (user.name === "arun" && user.password === "arun123") {
      setLogin(true)
      // setLogin("")
    } else {
      alert("please enter a valid user and password")
    }


  }
  return (
    <>
      <div className="login-Conainer">
        <div className="login">
          <h1>Login From</h1>
          <input type="text" placeholder='Enter Your user-name' onChange={(e) => setUser(
            {
              ...user,
              name: e.target.value
            })} />
          <input type="password" placeholder='Enter your Password' onChange={(e) => setUser({
            ...user,
            password: e.target.value
          })} />
          <button onClick={clikhandler}>Login</button>

        </div>


      </div>
    </>
  )
}

export default Form