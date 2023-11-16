import React, { useEffect, useState,useRef } from "react";

import user from "../Asset/dp/14.jpg"
import "./Messages.css";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import axios from "axios";


import {v4 as uuidv4} from "uuid";

const Messages = ({ currentChat, currentUser ,socket}) => {


  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);

  const scrollRef=useRef();

  useEffect(() => {
    if(currentChat){
      async function fetchMessage() {
        const res = await axios.post("/getMessage", {
          from: currentUser._id,
          to: currentChat._id,
        });
        setMessages(res.data);
        console.log(res);
        console.log("vinod");
      }
      fetchMessage();
    }
  }, [currentChat]);

  const navigate = useNavigate();
  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/login");
  };

  const sendedMessage = async (msg) => {
    console.log(currentChat._id);
    console.log(currentUser._id);
    const res = await fetch("/addMessage", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: currentChat._id,
        to: currentUser._id,
        message: msg,
      }),
    });


    // console.log(res);
    // console.log(msg);

    socket.current.emit("send-msg",{
      to:currentChat._id,
      from:currentUser._id,
      message:msg,
    })

     const msgs=[...messages];
     msgs.push({fromSelf:true,message:msg});
     setMessages(msgs);
     console.log(msgs);

  };


  useEffect(()=>{
    if(socket.current){
        socket.current.on("msg-recieve",(msg)=>{
            // console.log({msg});
            setArrivalMessage({fromSelf:false,message:msg});
        });
    }
},[])

useEffect(()=>{
    arrivalMessage && setMessages((prev)=>[...prev,arrivalMessage])
},[arrivalMessage])

useEffect(()=>{
    scrollRef.current?.scrollIntoView({behaviour:"smooth"})
},[messages]);

  return (
    <div className="current_chat">
      <div className="current_friend">
        <div>
          <img src={user} alt="owner" />
          <p>{currentChat.name}</p>
         </div>
        <AiOutlineLogout onClick={(e) => handleLogOut(e)} />
      </div>

      <div className="chat_messages">
        {
        messages.map((msg) => {
         return (
            <div ref={scrollRef} key={uuidv4()}>
              <div className={`message  ${ msg.fromSelf ? "recieved" : "sended"} `}>
                <div className="content">
                  <p>{msg.message}</p>
                </div>
              </div>
            </div>
          );
        })
        }
      </div>
       
       
        <Input sendedMessage={sendedMessage} />
      
      

    </div>
  );
};

export default Messages;
