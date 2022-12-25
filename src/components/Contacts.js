import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import Logo from "../assets/logo.svg"

const Contacts = ({currentUser,contacts,changeChat}) => {

    const [currentUserName , setCurrentUserName] = useState(undefined);
    const [currentUserImage, setCurrentUserImage] = useState(undefined);
    const [currentSelected, setCurrentSelected] = useState(undefined);
  
  useEffect(()=>{
   
      if(currentUser)
      {
        setCurrentUserImage(currentUser.avatarImage);
        setCurrentUserName(currentUser.username);
      }

  },[currentUser]);

const changeCurrentChat=(index,contact)=>{
  
    setCurrentSelected(index);
    changeChat(contact);

};

  
  return (
       <>
          {
          currentUserImage && currentUserName &&( 
             <Container>
                  <div className="brand">
                    <img src={Logo} alt="logo" />
                    <h3>snappy</h3>
                  </div>

                  <div className="contacts">
                    {
                      contacts.map((contact,index)=>{
                        return (
                          <div className={`contact ${
                              
                              index===currentSelected?"selected" : ""

                          }`} key={index}
                            onClick={()=>changeCurrentChat(index,contact)}
                          >

                                <div className="avatar">
                                  <img src={`data:image/svg+xml;base64,${contact.avatarImage}`} alt="avatar" />
                                </div>
                                   
                                <div className="username">
                                    <h4>{contact.username}</h4>
                                </div>

                          </div>
                        )
                      })
                  }
               </div>
                  

                 <div className="current-user">
                     <div className="avatar">
                        <img src={`data:image/svg+xml;base64,${currentUserImage}`} alt="NOT SETTED" />
                     </div>

                     <div className="username">
                          <h4>{currentUserName}</h4>
                     </div>
                  </div>




              </Container>
            )
          }
       </>
  )
}

export default Contacts
const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 75% 15%;
  overflow: hidden;
  background-color: #080420;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 2rem;
    }
    h3 {
      color: white;
      text-transform: uppercase;
    }
  }
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;
    &::-webkit-scrollbar {
      width: 0rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .contact {
      background-color: #ffffff34;
      min-height: 5rem;
      cursor: pointer;
      width: 90%;
      border-radius: 0.2rem;
      padding: 0.4rem;
      display: flex;
      gap: 1rem;
      align-items: center;
      transition: 0.5s ease-in-out;
      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
        h3 {
          color: white;
        }
      }
    }
    .selected {
      background-color: #9a86f3;
    }
  }

  .current-user {
    background-color: #0d0d30;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    .avatar {
      img {
        height: 4rem;
        max-inline-size: 100%;
      }
    }
    .username {
      h2 {
        color: white;
      }
    }
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      gap: 0.5rem;
      .username {
        h2 {
          font-size: 1rem;
        }
      }
    }
  }
`;


// const Container=styled.div`
//     display:grid;
//     grid-template-rows:10% 75% 15%;
//     overflow:hidden;
//     background-color:#080420;
//     color:white;
//     .brand{
//       display:flex;
//       align-items:center;
//       justift-content:center;
//       gap:1.5rem;
//       img{
//         height:3rem;
//       }
//       h3{
//         color:white;
//         text-transform:uppercase;
//       }
//     }




//     .contacts {
//           display:flex;
//           flex-direction:column;
//           align-items:center;
//           overflow:hidden;
//           gap:0.80rem;

//       .contact{
//           background-color:#ffffff39;
//           min-height:4rem;
//           width:95%;
//           cursor:pointer;
//           border-radius:.3rem;
//           padding:.7rem;
//           gap:.5rem;
//           align-item:center;
//           display:flex;
//           transition: 0.5s ease-in-out;
//           .avatar {
//             img {
//               height:3rem;
//             }
//           }
//       .username{
//        h4{
//         color:white;
//         margin-top:.8rem;

//        }
//      }
//      }
//      .selected {
//        background-color:#9186f3;
//      }
//   }


// .current-user{
//      background-color:#ffffff39;
//      display:flex;
//      align-items:center;
//      justify-content: center;
//      gap:2rem;
//      .avatar {
//         img{
//              height:4rem;
//              max-inline-size:100%;
//         }
//      }
//    .username{
//        h4{
//         color:white;
//        }
//      }
//      @media screen and (min-width:720px) and (max-width:1080px){
//           ${'' /* grid-template-columns:35% 65%; */}

//           gap: 0.5rem;
//           .username{
//             h4{
//               font-size:1rem;
//             }
//           }
//         }
// }


// `;