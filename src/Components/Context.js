import { createContext, useState } from "react"

export const myContext = createContext();

const Custemcontextapi = ({ children }) => {
    const [isLogin,setLogin]=useState(false)
    return <myContext.Provider value={{isLogin, setLogin}} >
        {children}
    </myContext.Provider>

}

export default Custemcontextapi;