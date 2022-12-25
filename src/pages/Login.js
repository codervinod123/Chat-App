import React,{useState} from "react";
import { Link, useNavigate} from "react-router-dom";
import styled from "styled-components";

import Logo from '../assets/logo.svg';

import {toast,ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import axios from 'axios';



import { loginRoute } from "../util/APIRoutes"; 


const Login = () => {

   const navigate=useNavigate();
 
   const  [values, setValues] = useState({
        email:"",
        password:"",

   });

         const handleSubmit=async(event)=>{
               event.preventDefault();
               if(validateForm())
               {
                //  console.log("in validation");
                 const {email,password}=values;
                 const {data}=await axios.post(loginRoute,{
                  email,
                  password,
                  
                });
                if(data.status===false)
                {
                  toast.error(data.msg,errorMessage);
                }

                if(data.status===true)
                {
                  
                  localStorage.setItem('chat-app-user',JSON.stringify(data.user));
                   navigate("/chat");
                }
               
              
              };
         };    
         

        //  useEffect(()=>{
        //   if(localStorage.getItem('chat-app-user'))
        //   navigate("/chat");
        //  },[])
         
         const handleChange=(event)=>{
          event.preventDefault();
          setValues({...values,[event.target.name]:event.target.value})
          
      };



      const errorMessage={
         
          position:"bottom-right",
          autoClose:4000,
          pauseOnHover:true,
          draggable:true,
          theme:"dark"
        }
    

         const validateForm=()=>{
          const {email,password}=values;
          
             if(password==="")
           {
            toast.error("Pass should be filled",errorMessage);
            return false;
           }
           else if(email==="")
           {
               toast.error("Pass should be filled",errorMessage);
               return false;
           }
           return true;
        } 


         return (
          <>
            <FormContainer>
              <form onSubmit={(event) => handleSubmit(event)}>
                <div className="brand">
                <img src={Logo} alt="Logo" />  
                  <h1>Snappy</h1>
                </div>
      

      
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={(event) => handleChange(event)}
                />
      
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={(event) => handleChange(event)}
                />

               <button type="submit">Login User</button>
               <span>
                  don't Have account? <Link to="/register">Register</Link>
               </span>
              </form>
      
              
              </FormContainer>
              <ToastContainer/>
          </>
        );
};



const FormContainer=styled.div`
     height:100vh;
     width:100vw;
     display:flex;
     flex-direction: column;
     justify-content: center;
     align-items:center;
     background-color: #131324;
     gap:1rem;
     .brand{
      display:flex;
      align-items:center;
      justify-content: center;
      gap:1rem;
      img{
        height:5rem;
      }
      h1{
        color:white;
        text-transform:uppercase;
      }
     }
     form{
      display:flex;
      flex-direction: column;
      gap:2rem;
      background-color: #00000076;
      border-radius:1rem;
      padding:3rem 5rem;
      input{
         background-color: transparent;
         padding:.6rem;
        decoration:none;
        width:100%;
        border-radius:0.4rem;
        color:white;
        font-size:1rem;
        border:0.1rem solid #4e0eff;

        &:focus{
            border:0.1rem solid #997af0;
             outline:none;
        }
      }
      button{
        background-color: #51E3EC;
        color:white;
        padding:1rem 2rem;
        cursor:pointer;
        border:none;
        font-size:1rem;
        text-transform:uppercase;
        font-weight:bold;
        transition:0.5s ease-in-out;
        border-radius:0.4rem;
        &:hover{
          background-color: #076D74;
        }
      }
      span{
        color:white;
        text-transform:uppercase;
        a{
          text-decoration:none;
          font-weight:bold;
          
        }
      }
     }
`;

export default Login;