import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import ChatInput from './ChatInput';
import Logout from './Logout';

import axios from 'axios';

import { getAllMessagesRoute, sendMessageRoute} from '../util/APIRoutes';
import { useRef } from 'react';
import {v4 as uuidv4} from "uuid";



const Chatcontainer = ({currentChat,currentUser,socket}) => {


    const [messages, setMessages] = useState([]);
    const [arrivalMessage, setArrivalMessage] = useState(null);

    const scrollRef=useRef();


    useEffect(() => {
      

        async function fetchaMyAPI()
        {
          if(currentChat)
          {  
             const response=await axios.post(getAllMessagesRoute,{
              from:currentUser._id,
               to:currentChat._id
          });
          setMessages(response.data);
        } 
      }
      fetchaMyAPI();
      }, [currentChat]);
      

    const handleSendMsg=async(msg)=>{
       await axios.post(sendMessageRoute,{
        from:currentUser._id,
        to:currentChat._id,
        message:msg,
       })
       socket.current.emit("send-msg",{
            to:currentChat._id,
            from:currentUser._id,
            message:msg,
       })

       const msgs=[...messages];
       msgs.push({fromSelf:true,message:msg});
       setMessages(msgs);
    };


    useEffect(()=>{
        if(socket.current){
            socket.current.on("msg-recieve",(msg)=>{
                console.log({msg});
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
    <>
     {
        currentChat&&(
       <Container>
          <div className="chat-header">
            <div className="user-deatils">
                <div className="avatar">
                    <img src={`data:image/svg+xml;base64,${currentChat.avatarImage}`} alt="NOT SETTED" />
                </div>
                <div className="username">
                    <h3>{currentChat.username}</h3>
                </div>
             </div>
             <div className='log_out_deco'>
             <Logout/>
             </div>
           </div>
        
         
       
         <div className="chat-messages">
           {
            messages.map((message)=>{
                return(
                    <div ref={scrollRef} key={uuidv4()}>
                        <div className={`message ${message.fromSelf?"sended":"recieved"}`}>
                            <div className="content">
                                <p>
                                    {
                                        message.message
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })
           }
         </div>
        <ChatInput handleSendMsg={handleSendMsg}/>
        </Container>
    )}
    </>
  )
}

export default Chatcontainer;
    const Container=styled.div`
    display:grid;
    grid-template-rows:10% 78% 12%;
    gap:0.1 rem;
    overflow:hidden;
    padding-top:.7rem;

    @media screen and (min-width:720px) and (max-width:1080px){
          grid-template-columns:15% 70% 15%;
        }
   
    .chat-header{
        padding-top:0 2rem;
        display:flex;
        justift-content:space-between;
        align-items:center;

        .user-deatils{
            display:flex;
            align-items:center;
            gap:1rem;
            padding-left:2rem;
            .avatar{
                img{
                    height:3rem;
                }
            }
            .username{
                h3{
                    color:white;
                }
            }
        }
        .log_out_deco
        {
            position: absolute;
            top: 55px;
            right: 160px;
            padding-top:.5rem;
        }
    }


    .chat-messages{

    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color:#080420;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
                .message{
                    display:flex;
                    align-items:center;

                    .content{
                        max-width:40%;
                        overflow-wrap:break-word;
                        font-size:1.1rem;
                        color:#d1d1d1;
                        background-color:#2E0646 ;
                        padding:1rem;
                        border-radius:.4rem;
                        @media screen ans (min-width:720 px)ans (max-width:1080){
                            maax-width: 70%;
                        }
                    }
                }
              
            .sended{
                justify-content:flex-end;
                .content{
                    background-color: #4f04ff21;
                }
            }

            .recieved{
                justify-content:flex-start;
                .content{
                    background-color: #9900ff20;
                }
            }
                
    }
`;