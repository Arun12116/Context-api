import Form from "./Components/Form";
import Home from "./Components/Home";
import { myContext } from "./Components/Context";
import { useContext } from "react";
import Nav from "./Components/Nav";

function App() {
  const {isLogin}=useContext(myContext);
  return (
    <>
    {
      isLogin ? <><Nav /><Home/></> : <Form/>
    }
   
    
    </>
  );
}

export default App;
