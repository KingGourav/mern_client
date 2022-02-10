import React, {  useContext, useEffect, useState  } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../App";

const Navbar = () =>{
  const {state } = useContext(UserContext);
  const [show,setShow] = useState(true);
 
  console.log(state);
 const fun = () =>{
   setShow(false);
 }
   const RenderNav = () =>{
    
       return(
         <>
          <li className="nav-item">
          <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link " activeClassName="active" >About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link " activeClassName="active" >Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/logout" className="nav-link " activeClassName="active" onClick={fun}>Logout</NavLink>
        </li>
       
         
         </>
       )
   }
     const RenderNavs = () =>{
       return(
         <>
          <li className="nav-item">
          <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link " activeClassName="active" >About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link " activeClassName="active" >Contact</NavLink>
        </li>
        <li className="nav-item">
         <NavLink to="/login" className="nav-link " activeClassName="active" >Login</NavLink> 
        </li>
        <li className="nav-item">
          <NavLink to="/signup" className="nav-link " activeClassName="active" >Register</NavLink>
        </li>
      
         </>
       )
     
   }
  

return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container">
    <a className="navbar-brand">Docker</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       
      {show==state ? <RenderNav/> : <RenderNavs/>}
      
      </ul>
      
    </div>
  </div>
</nav>
    </>
)
}

export default Navbar;