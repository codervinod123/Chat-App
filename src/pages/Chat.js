import React,{useEffect,useState} from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import {allUsersRoute,host} from '../util/APIRoutes';
import Contacts from '../components/Contacts';
import Welcome from '../components/Welcome';
import Chatcontainer from '../components/Chatcontainer';
//chat appuser
 import {io} from "socket.io-client";
import { useRef } from 'react';


 const Chat = () => {

   const socket=useRef();

    const navigate=useNavigate();

 const [contacts,setContacts] = useState([]);
 const [currentUser,setCurrentUser] = useState(undefined);
 const [currentChat,setCurrentChat]=useState(undefined);
 const [isLoaded, setIsLoaded] = useState(false);


 useEffect(() => {
      async function fetchaMyAPI()
  {

  if (!localStorage.getItem("chat-app-user")) {
    navigate("/login");
  } else {
    setCurrentUser(JSON.parse(localStorage.getItem('chat-app-user')));
    setIsLoaded(true);
  }
}
fetchaMyAPI();
}, []);


  useEffect(()=>{
      if(currentUser){
        socket.current=io(host); 
        socket.current.emit("add-user",currentUser._id);
      }
  },[currentUser])


useEffect(() => {

  async function fetchaMyAPI()
  {
  if (currentUser) {
      if (currentUser.isAvatarImageSet) {
       
      const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
      setContacts(data.data);
    } else {
      navigate("/setAvatar");
    }
  }
}
fetchaMyAPI();
}, [currentUser]);


 const handleChatChange=(chat)=>{
   setCurrentChat(chat);
 }

  return (
    <Container>
          <div className="container">
             <Contacts 
                      currentUser={currentUser} 
                      contacts={contacts} 
                      changeChat={handleChatChange}
                   />
                  {
                    isLoaded && currentChat===undefined ? (
                  <Welcome  currentUser={currentUser}/>
                  ):(
                     <Chatcontainer currentChat={currentChat} currentUser={currentUser} socket={socket}/>
                  )
                  }
          </div>
         
    </Container>
  )
}

export default Chat;

const Container=styled.div` 
    height:100vh;
    width:100vw;
    display:flex;
    flex-direction:column;
    background-color:#131324;
    gap:1rem;
    justify-content:center;
    align-items:center;
    .container{
        height:85vh;
        width:80vw;
        background-color:#253B7C;
        display:grid; 
        grid-template-columns:25% 75%;
        border-radius:.5rem;
        @media screen and (min-width:720px) and (max-width:1080px){
          grid-template-columns:35% 65%;
        }
      }
`;

