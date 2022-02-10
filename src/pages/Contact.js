import React, { useEffect, useState } from "react";

const Contact = () => {

    const [state,setState] = useState({
        name:"",
        email:"",
        phone:"",
        message:""
    });
    
    
        const callAboutPage = async () => {
            try{
                const res = await fetch('/getdata',{
                    method:"GET",
                    headers:{
                      
                        "Content-Type":"application/json"
                    }
                    
                });
                const data = await res.json();
                console.log(data);
                setState({...state,name:data.name,email:data.email,phone:data.phone});
                
                if(!res.status === 200){
                    const err = new Error(res.error);
                    throw err;
                }
            }catch (error) {
                console.log(error);
           
            }
        }
    
    
       useEffect(()=>{
    callAboutPage();
       },[]);

const handleInput = (event) =>{
    const name = event.target.name;
    const value = event.target.value;

    setState({...state,[name]:value});
}

/// send data to the server

const contactForm = async(event) => {
    event.preventDefault();

    const {name,email,phone,message} = state;
    const res = await fetch("/contact",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            name,email,phone,message
        })
    });
    const data = await res.json();
    if(!data)
    {
        console.log("message not send");
    }
    else{
        alert("message send");
        setState({...state,message:""});
    }
} 



//////




    return(
        <>
        <div className="contact">
            <div className="container">
                <div className="left">
                    <div className="item">
                        <div className="icon"><i class="fas fa-phone-alt"></i></div>
                        <div>
                            <h6>phone</h6>
                            <h6>{state.phone}</h6>
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon"><i class="fas fa-envelope"></i></div>
                        <div>
                            <h6>Email</h6>
                            <h6>{state.email}</h6>
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon"><i class="fas fa-house-user"></i></div>
                        <div>
                            <h6>Address</h6>
                            <h6>Mohanlalganj Lucknow</h6>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <h4 className="heading">Get in Touch</h4>
                    <form method="POST">
                    <div className="box1">
                    <input type="text" name="name" value={state.name} onChange={handleInput} placeholder="Your Name" />
                    <input type="text" name="email" value={state.email} onChange={handleInput} placeholder="Your Email" />
                    <input type="text" name="phone" value={state.phone} onChange={handleInput} placeholder="Your Phone Number" />
</div>
<textarea name="message" value={state.message} onChange={handleInput} placeholder="Message"></textarea>
<button type="submit" name="submit" value="submit" className="btn1 set" onClick={contactForm}>Submit</button>
                    </form>
                   
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact;