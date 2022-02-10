import React, { useEffect, useState } from "react";

const Home = () => {

    const [state,setState] = useState('');
    const [show,setShow] = useState(false);
    
    
        const userHome = async () => {
            try{
                const res = await fetch('/getdata',{
                    method:"GET",
                    headers:{
                      
                        "Content-Type":"application/json"
                    }
                    
                });
                const data = await res.json();
                setShow(true);
                setState(data);
            
            }catch (error) {
                console.log(error);
           
            }
        }
    useEffect(()=>{
        userHome();
    },[]);
    
      




    return(
        <>
        <section className="home">
        <div className="container">
            <div>
                
            <h2>Welcome  { state.name }</h2>
<h2>We are MERN Developer </h2>
<strong><span> {show === true ? "Happy to see you back" : " just create accout and get started" }  </span></strong>
            </div>

         </div>
        </section>
      
        </>
    )
}

export default Home;