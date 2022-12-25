import React from 'react'
import styled from 'styled-components';
import Robot from '../assets/robot.gif';


const Welcome = ({currentUser}) => {
  return (
    <Container>
         <img src={Robot} alt="welcome-Robot" />
         <h3>
            Welcome <span>{currentUser.username}</span> choose a user to chatting dating
         </h3> 
     </Container>
  )
}

export default Welcome;

const Container=styled.div`
       display:flex;
       flex-direction: column;
       justift-content:center;
       align-items: center;
       color:white;
   img{
    height:25rem;
   }
   span{
    color:#963A79;
   }
       
`;