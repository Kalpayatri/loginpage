import React from "react";
import { Route,Link } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";


const App=()=>{
  return(
    <div>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/chat">Chat</Link>

      <Route path="/register" component={Register}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/caht" component={Chat}></Route>


    </div>
  )
}

export default App