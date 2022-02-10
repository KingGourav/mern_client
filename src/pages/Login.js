import React, { useContext, useState } from "react";
import img from "../images/login.svg";
import { Link,useNavigate } from "react-router-dom";
import { UserContext } from "../App";
const Login = () => {



    const {state , dispatch} = useContext(UserContext);
    const Navigate = useNavigate();
    const [statex,setState] = useState({
        email:"",
        password:""
    });
    let name,value;
    const handleInput = (event) =>{
name=event.target.name;
value=event.target.value;
setState({...statex,[name]:value});
    }
//// passing data to server

const userLogin = async(event) => {
event.preventDefault();
const {email,password} = statex;
const res = await fetch("/signin",{
    method:"POST",
    headers:{
        "Content-type" : "Application/json"
    },
    body:JSON.stringify({
        email,password
    })
});

const data = res.json();
if(res.status === 400 || !data)
{
    window.alert("Invalid Credintials");
    console.log("Invalid Credintials");
}else{
    dispatch({type:"USER", payload:true});

    window.alert("Login Successfully");
    console.log("login success");
    Navigate("/");
}

}

/////

    return(
        <>
        <section className="login">
       <div className="container">
       
<div className="box">

    <div className="left">
    <h4 className="heading">Login</h4>
        <form method="POST">
        <div className="input-group flex-nowrap">
  <span className="input-group-text" id="addon-wrapping"><i class="fas fa-user"></i></span>
  <input type="email" className="" placeholder="Username" name="email" value={statex.email} onChange={handleInput}  />
</div>
<div className="input-group flex-nowrap">
  <span className="input-group-text" id="addon-wrapping"><i class="fas fa-lock"></i></span>
  <input type="password" className="" placeholder="Password" name="password" value={statex.password} onChange={handleInput}  />
</div>
<button type="submit" name="submit" value="submit" className="btn1 set" onClick={userLogin}>Login</button>
        </form>
    </div>
    <div className="right"> <img src={img} alt="login"/>
               <Link to="/signup" className="light">Create New Account</Link></div>
</div>
       </div>
       </section>
        </>
    )
}

export default Login;