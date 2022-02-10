import React, { useEffect, useState } from "react";
import img from "../images/login.svg";
import img1 from "../images/error.png";
import { Link,useNavigate } from "react-router-dom";

const About = () => {
    const [state,setState] = useState({});
const Navigate = useNavigate();

    const callAboutPage = async () => {
        try{
            const res = await fetch('/about',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            });
            const data = await res.json();
            console.log(data);
            setState(data);
            
            if(!res.status === 200){
                const err = new Error(res.error);
                throw err;
            }
        }catch (error) {
            console.log(error);
           Navigate("/login");
        }
    }


   useEffect(()=>{
callAboutPage();
   },[]);
   
    return(
        <>
 <div className="about">
     <form method="GET"><div className="container">
         <div className="box">
             <div className="left">
                 <img src={state.name === "gourav" ? img : img1 } alt="hii"></img>
                 <div>
                     <h5>Work links</h5>
                     <Link to="#">Youtube</Link><br></br>
                     <Link to="#">Instagram</Link><br></br>
                     <Link to="#">Linkedin</Link><br></br>
                     <Link to="#">Facebook</Link><br></br>
                     <Link to="#">Profiler</Link><br></br>
                 </div>
             </div>
             <div className="right">
                 <div className="first">
                     <div>
                         <h5>{ state.name }</h5>
                         <h6>{state.work}</h6>
                         <p>Rankings:<span>1/10</span></p>

                     </div>
                     <div><button typeof="submit" value="Edit Profile" className="bt">Edit Profile</button></div>
                 </div>
                
                 <h6 className="ab">About</h6>
                 <hr></hr>
                 <div className="second">
                    
                     <div className="left1">
                         <h6>User Id</h6>
                         <h6>Name</h6>
                         <h6>Email</h6>
                         <h6>Phone</h6>
                         <h6>Proffession</h6>
                         
                     </div>
                     <div className="right">
                     <h6>{ state._id }</h6>
                         <h6>{ state.name }</h6>
                         <h6>{ state.email }</h6>
                         <h6><span>+91</span>{ state.phone}</h6>
                         <h6>{ state.work }</h6>
                     </div>
                 </div>
                 <div className="bar"></div>
         </div>
        
         </div>
        </div>
         </form>
     
 </div>
        </>
    )
}

export default About;