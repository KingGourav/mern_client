import React, { createContext, useReducer } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {Routes,Route} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import "./App.css";
import Logout from "./pages/Logout";
import { initialState,reducer } from "./reducers/UseReducer";
import Footer from "./pages/Footer";
export const UserContext = createContext();

const App = () =>{

  
  const [state,dispatch] = useReducer(reducer,initialState);

return(
  
  <>
  <UserContext.Provider value={{state, dispatch}}>
   <Navbar/>
  <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/about" element={<About/>} />
    <Route exact path="/contact" element={<Contact/>} />
    <Route exact path="/login" element={<Login/>} />
    <Route exact path="/signup" element={<Signup/>} />
    <Route exact path="/logout" element={<Logout/>} />
    <Route path="/*" element={<Error/>} />
  </Routes>
<Footer></Footer>
</UserContext.Provider>
  </>
 
)
}

export default App;