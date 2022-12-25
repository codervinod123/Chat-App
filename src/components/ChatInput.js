import React,{useState} from 'react'
import styled from 'styled-components';
import Picker from "emoji-picker-react";
import {IoMdSend} from 'react-icons/io';
import {BsEmojiSmileFill} from 'react-icons/bs';
const ChatInput = ({handleSendMsg}) => {

       const [showEmojiPicker, setShowEmojiPicker] = useState(false);
       const [msg, setMsg] = useState("");
     
       const handleEmojiPickerHideShow=()=>{
          setShowEmojiPicker(!showEmojiPicker);
       };

      const sendChat=(event)=>{
           event.preventDefault();
           if(msg.length>0){
            handleSendMsg(msg);
              setMsg("");
           }

      }

  return (
       <Container>
          <div className="button-container">
            <div className="emoji"> 
                <BsEmojiSmileFill/>
                {/* {showEmojiPicker && <Picker/>} */}
            </div>
          </div>
          <form className="input-container" onSubmit={(event)=>sendChat(event)}>
              <input 
                    type="text" 
                    placeholder='Type Your SMS Here' 
                    value={msg} 
                    onChange={(event) => setMsg(event.target.value)}/>
              <button className="submit">
                <IoMdSend/>
              </button>
          </form>
       </Container>
  )
}

export default ChatInput;

const Container=styled.div`
      display:grid;
      grid-template-columns:5% 95%;
      align-items:center;
      background-color:#080420;
      padding:0 2rem;
      gap:1rem;
    .button-container{
      display:flex;
      align-items:center;
      color:yellow;
      gap:1rem;
      .emoji{
            position:relative;
            padding-top:.2rem;
            svg{
              font-size: 1.5rem;
               color: #ffff00c8;
               cursor: pointer;
            }
            emoji-picker-react{
              position:absolute:
              top:-350px;
            }
       }
    }
    .input-container{
      width:100%;
      border-radius:2rem;
      display:flex;
      height:1.5rem;
      align-content:center;
      background-color:#ffffff34;
      input{
        width:100%;
        height:90%;
        padding-left:1rem;
        padding-top:.3rem;
        border-radius:1rem;
        background-color:transparent;
        color:white;
        border:none;
        font-size:1rem;
        &::selection{
          background-color:#A647E5;
        }
        &:focus{
          outline:none;
        }
      }
      button{
        padding:.3rem 2rem;
        border-radius:2rem;
        display:flex;
        justift-content:center;
        background-color:#A647E5;
        border:none;
        svg{
          color:white;
        }

      }
 
    }

`;