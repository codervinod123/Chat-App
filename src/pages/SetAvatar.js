import React,{useState,useEffect} from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

import {toast,ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import axios from 'axios';
import loader from "../assets/loader.gif";

import { setAvatarRoute } from "../util/APIRoutes";

import {Buffer} from "buffer";


const SetAvatar = () => {
    
       
      

        const [avatars, setAvatars] = useState([]);
        const [isLoading, setIsLoading] = useState(true);
        const [selectedAvatar, setSelectedAvatar] = useState(undefined);

        const navigate=useNavigate();
        const api="https://api.multiavatar.com/45678956";
    
        const errorMessage={
         
          position:"bottom-right",
          autoClose:4000,
          pauseOnHover:true,
          draggable:true,
          theme:"dark"
          }
        useEffect(()=>{
                 if(!localStorage.getItem('chat-app-user'))
                      navigate("/login");
         },[])

          const setProfilePicture=async ()=> {
          if(selectedAvatar===undefined){
            toast.error("Please select The Profile Picture",errorMessage)
          }else{
                //  console.log('vinod');
                 const user=await JSON.parse(localStorage.getItem("chat-app-user"));
                 const {data}=await axios.post(`${setAvatarRoute}/${user._id}`,{
                 image:avatars[selectedAvatar],
                
            });
            // console.log(data);
             if(data.isSet){
               user.isAvatarImageSet=true;
               user.avatarImage=data.image;
               localStorage.setItem("chat-app-user",JSON.stringify(user));
               navigate("/chat");
             } 
             else{
               toast.error("Please try Again something is wrong in setting avatar",errorMessage);
             }}
            };
        
      useEffect(()=>{

        async function fetchapi()
        {
        const data=[];
        for(let i=0;i<5;i++)
        {
          const image=await axios.get(
                `${api}/${Math.round(Math.random()*1000)}`
            );
            const buffer=new Buffer(image.data);
            data.push(buffer.toString("base64"));
        }
        setAvatars(data);
        setIsLoading(false);
      }
      fetchapi();
      },[])


  return (
    <>

    {
      isLoading?(<Container>
           <img src={loader} alt="" />
    </Container>):
    (
       <Container>
             <div className="title-container">
                 <h1>Pick an avatar for your profile picture</h1>
             </div>
             <div className="avatars">
                 {
                     avatars.map((avatar,index)=>{
                         return(
                             
                             <div 
                             key={index}
                             className={`avatar ${
                                selectedAvatar===index ? "selected" : ""

                              }`}>
                                <img src={`data:image/svg+xml;base64,${avatar}`} alt="avatar"
                                  onClick={()=>setSelectedAvatar(index)}
                                 />
                             </div>
                         )
                     })
                 }
             </div>

             <button onClick={setProfilePicture} 
                   className="button"
             >
                 Set Profile Pic
             </button>
            <ToastContainer/>
       </Container>
    )
  }
       
    </>
  )
}

export default SetAvatar;
//chat appuser

const Container=styled.div `


    justify-content:center;
    align-items:center;
    display:flex;
    flex-direction:column;
    height:100vh;
    width:100vw;
    gap:3rem;
    background-color: #131324;

    .loader {
         max-inline-size: 100%;
     }

   h1{
     color:white;
   }
  
  .avatars{
    display:flex;
    gap:2rem;
    .avatar{
         justify-content:center;
         align-items:center;
         display:flex;
         border:0.2rem solid #350F93 ;
         border-radius:5rem;
         padding:.1rem;
         transition:0.5s ease-in-out;
         img{
           height:4rem;
           transition:0.5s ease-in-out;
         }
    }
    .selected{
      border: 0.4rem solid  #45C086 ;
    }
    .
 }
     
       .button{
          background-color:#51E3EC;
          color:green;
          font-size:1rem;
          padding:1rem 2rem; 
          border-radius:1rem;
          cursor:pointer;
          font-weight:bold;
          text-transform:uppercase;
          transition:0.5s ease-in-out;
          border:none;
          &:hover{
               background-color:#963A79;
          }
     }
`;



