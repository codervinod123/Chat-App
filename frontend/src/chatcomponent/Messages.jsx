import React, { useEffect, useState } from "react";
import user from "../Asset/Suraiya.jpg";
import "./Messages.css";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import Chats from "./Chats";
import axios from "axios";

const Messages = ({ currentChat, currentUser }) => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    async function fetchMessage() {
      const res = await axios.post("/getMessage", {
        from: currentUser._id,
        to: currentChat._id,
      });
      setMessages(res.data);
      console.log(messages);
      console.log("vinod");
    }
    fetchMessage();
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
    console.log(res);
    console.log(msg);
  };

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
            <div>
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
