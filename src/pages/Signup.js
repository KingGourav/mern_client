import React, { useState } from "react";
import img from "../images/signup.svg";
import {Link,useNavigate} from "react-router-dom";


const Signup = () => {

  const history = useNavigate();
  const [state,setState] = useState({
name:"",
email:"",
phone:"",
password:"",
cpassword:""
  });
let name ,value;
  const handleInput = (event) => {
name=event.target.name;
value=event.target.value;
setState({...state,[name]:value});
  }

  // passing frontend data to server
  const PostData = async (event) =>{
event.preventDefault();
const {name,email,phone,work,password,cpassword} = state;

const res = await fetch("/register",{
  method:"POST",
  headers:{
    "Content-Type" : "application/json"
  },
  body:JSON.stringify({
    name,email,phone,work,password,cpassword

  })
});

const data = await res.json();
if(data.status===422 || !data){
  window.alert("Invalid Registrations");
  console.log("invalid registration");
}else{
  window.alert(" Registrations success");
  console.log("Registration complete");
  history("/login");
}

}
/////////////

    return(
        <>
        <section className="reg">
        <div className="container">
           <h4 className="heading">SignUp</h4>
           <div className="wrap">
               <form method="POST" >
           <div className="left">
           <div className="input-group flex-nowrap">
  <span className="input-group-text" id="addon-wrapping"><i class="fas fa-user"></i></span>
  <input type="text" className="" placeholder="Username" name="name" value={state.name} onChange={handleInput} aria-label="Username" aria-describedby="addon-wrapping" />
</div>
<div className="input-group flex-nowrap">
  <span className="input-group-text" id="addon-wrapping"><i class="fas fa-envelope"></i></span>
  <input type="text" className="" placeholder="Email" name="email" value={state.email} onChange={handleInput} aria-label="Email" aria-describedby="addon-wrapping" />
</div>
<div className="input-group flex-nowrap">
  <span className="input-group-text" id="addon-wrapping"><i class="fas fa-phone-alt"></i></span>
  <input type="text" className="" placeholder="Phone" name="phone" value={state.phone} onChange={handleInput} aria-label="Phone" aria-describedby="addon-wrapping" />
</div>
<div className="input-group flex-nowrap">
  <span className="input-group-text" id="addon-wrapping"><i class="fas fa-briefcase"></i></span>
  <input type="text" className="" placeholder="Profession" name="work" value={state.work} onChange={handleInput} aria-label="Profession" aria-describedby="addon-wrapping" />
</div>
<div className="input-group flex-nowrap">
  <span className="input-group-text" id="addon-wrapping"><i class="fas fa-lock"></i></span>
  <input type="text" className="" placeholder="Password" name="password" value={state.password} onChange={handleInput} aria-label="Password" aria-describedby="addon-wrapping" />
</div>
<div className="input-group flex-nowrap">
  <span className="input-group-text" id="addon-wrapping"><i class="fas fa-lock"></i></span>
  <input type="text" className="" placeholder="Confirm Password" name="cpassword" 
  value={state.cpassword} onChange={handleInput} aria-label="Confirm Password" aria-describedby="addon-wrapping" />
</div>

           </div>
           <button type="submit" name="submit" value="submit" className="btn1 set" onClick={PostData}>SignUp</button>
           </form>
           <div className="right">
               <img src={img} alt="login"/>
               <Link to="/login" className="light">Already accout</Link>
           </div>
           </div>
      
       </div>
        </section>
       
        </>
    )
}

export default Signup;