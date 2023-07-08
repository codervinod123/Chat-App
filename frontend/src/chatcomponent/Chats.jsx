import React from 'react'
// import "./Chats.css";




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









