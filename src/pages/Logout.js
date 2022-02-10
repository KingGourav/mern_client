import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const Logout = () =>{
const { state ,dispatch } = useContext(UserContext);
const Navigate = useNavigate();


// const logoutfun = async () => {
//     try{
//         const res = await fetch('/logout',{
//             method:"GET",
//             headers:{
//               Accept:"application/json",
//                 "Content-Type":"application/json"
//             },
//             credentials:"include"
            
//         });
//         const data = await res.json();
//         console.log(data);
//         if(data)
//         {
//             dispatch({type:"USER", payload:false});
//         }
//         if(!res.status === 200){
           
//             const err = new Error(res.error);
//             throw err;
            
//         }
//         else{
            
//         }
        
//     }catch (error) {
       
//         console.log(error);
       
//         Navigate("/login");
   
//     }
// }

// useEffect(()=>{logoutfun();},[])

useEffect(()=>{
    fetch('/logout',{
                     method:"GET",
                    headers:{
                      Accept:"application/json",
                        "Content-Type":"application/json"
                    },
                    credentials:"include"
                    
                }).then((res)=>{
                    dispatch({type:"USER1", payload:false});
                    Navigate("/login");
                    if(!res.status === 200){
           
                                   const err = new Error(res.error);
                                    throw err;
                                    
                                }
                })
});

    return(
        <>
        <h2>logout page</h2>
        </>
    )
}

export default Logout;