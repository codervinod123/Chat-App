import React,{useState,useEffect} from 'react';
import "./Chathome.css";
// import Messages from './Messages';
import Welcome from './Welcome';
import axios from "axios"
import Contacts from './Contacts';
import { Navigate } from 'react-router-dom';
import Messages from './Messages';


import {io} from "socket.io-client";
import { useRef } from 'react';


const Chathome = () => {

  const socket=useRef();

   function getData(data){
    console.log(data);
    console.log("ab hua h");
  }


    const  [contacts, setContacts] = useState([]);
    const  [currentUser,setCurrentUser]=useState(undefined);
    const  [currentChat, setCurrentChat] = useState(undefined);

    

    useEffect(()=>{
      async function fetchData(){
        const loggedinnUser=await (JSON.parse(localStorage.getItem("user-logged-in")));

     // ==============implementation fof log out automatically after a fixed time=====

        // const stored=loggedinnUser.time;
        // const date=new Date().getTime();
        // console.log(date);

        // if(stored<date)
        // {
        //   Navigate("/login");
        //   localStorage.clear();
        //   console.log("out");
        // }
        setCurrentUser(loggedinnUser);
      }
      fetchData();
    },[])  



    useEffect(()=>{
      if(currentUser){
        socket.current=io("http://localhost:5000/chat"); 
        socket.current.emit("add-user",currentUser._id);
      }
  },[currentUser])

    useEffect(() => {
      if(currentUser){
        async function fetchData() {
          const {data}=await axios.get(`/getAlluser/${currentUser._id}`);
          setContacts(data);
       }
       fetchData();
      }
    }, [currentUser]);


    const handleChatChange=(chat)=>{
      setCurrentChat(chat);
       console.log("vinod");
   }


   
   
  return (
    <>
       <div className="chat_container">
      
          <div className="contacts">
             <Contacts  contacts={contacts} currentUser={currentUser} changeChat={handleChatChange} />
          </div>
          <div className='dummy'>
           {
             currentChat ? <Messages currentChat={currentChat} currentUser={currentUser} socket={socket}/>:<Welcome currentUser={currentUser}/>
            }
          </div>
       </div> 
    </>
  )
}

export default Chathome;