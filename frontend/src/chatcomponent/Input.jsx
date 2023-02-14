import React, { useState } from "react";
import "./Input.css";
import { BiSend } from "react-icons/bi";
import { MdAttachFile } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { MdFullscreen } from "react-icons/md";

import EmojiPicker from "emoji-picker-react";

import screenfull from 'screenfull';


const Input = ({sendedMessage}) => {
  const [showEmoji, setShowEmoji] = useState(false);
  const [message, setMessage] = useState("");

  const handleEmojiClick = () => {
    setShowEmoji(!showEmoji);
  };
   
  const handleEmojiPick=(emoji)=>{
     let msg=message;
     msg+=emoji.emoji;
     setMessage(msg);
  }

  const sendMessage=(e)=>{
    e.preventDefault();
    if(message.length>0)
    {
      // console.log(message);
      sendedMessage(message);
      setMessage("");
    }
  }

  const handleFulscreen=(e)=>{
      e.preventDefault();
        screenfull.toggle();
  }

  
  return (
    <>
      <div className="input_container">
        <form>
          <div className="emoji" >
            <BsEmojiSmile onClick={handleEmojiClick}/>
            <div className="emoji_list">
               {showEmoji ? <EmojiPicker onEmojiClick={handleEmojiPick} theme="dark" height={"330px"} /> : ""}
            </div>
          </div>
          <MdAttachFile />
          <input
          
            className="inputbox"
            type="text"
            placeholder="Type a Message"
            value={message}
            onChange={(e)=>{setMessage(e.target.value)}}
            
          />
        
          <BiSend onClick={(e)=>{sendMessage(e)}}/>
          <MdFullscreen onClick={(e)=>{handleFulscreen(e)}}/>
        </form>
      </div>
    </>
  );
};

export default Input;
