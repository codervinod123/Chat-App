import React from 'react'
// import "./Chats.css";


const chats=[
    {
     from:"hello bhai kaise hai tu",
     to:"bhai yahi hu tu kaha hai"
    },
     {
       from:"abe mai bhi yahi hu",
       to:"kon si jagah pe"
     },
     {
       from:"gate ke samne hu bhai",
       to:"nai mai vaha nai hu"
     },
     {
       from:"tab kaha hai tu bhai",
       to:"mai cafeteria me hu bhai"
     },
     {
       from:"accha !!! to kabtak aayega bhai",
       to:"mai sam tak aa rha hu "
     },
     {
       from:"to mairoom pr ja rha hu",
       to:"done"
     },
     {
       from:"hello bhai kaise hai tu",
       to:"bhai yahi hu tu kaha hai"
     },
     {
       from:"hello bhai kaise hai tu",
       to:"bhai yahi hu tu kaha hai"
     }
   
   ]

const Chats = () => {
  return (
    <div className="chat_messages">
       {
        chats.map((data,id)=>{
          return(
            <>
              <div className="message sender"><p  key={id}  className="content">{data.from}</p></div>
              </>
          )
        })
       }
    </div>
  )
}

export default Chats









