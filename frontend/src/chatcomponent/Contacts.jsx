import React, { useState, useEffect } from "react";
import "./Contacts.css";
import user from "../Asset/Suraiya.jpg";
import { MdGroups } from "react-icons/md";
import { ImSpinner10 } from "react-icons/im";
import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import Setting from "./component/Setting";

const Contacts = (props) => {
  const [selected, setSelected] = useState(undefined);
  const [loggedin, setLoggedin] = useState(undefined);
  const [currentSelected,setCurrentSelected]=useState(undefined);

  useEffect(() => {
    if (props.currentUser) {
      const username = props.currentUser.name;
      // console.log(username);
      // setLoggedin(username);
    }
  }, [props.currentUser]);


  const users = props.contacts;

  const [show, setShow] = useState(false);
  
  

  const changeCurrentChat=(index,data)=>{

      setCurrentSelected(index);
      props.changeChat(data);
  }

  return (
    <div className="contact_details">
      <div className="loggedin_candidate">
        <div>
          <img src={user} alt="owner" />
        </div>
        <p>{loggedin}</p>
        <div className="loggedin_candidate_content_bar">
          <MdGroups />
          <ImSpinner10 />
          <AiOutlinePlus />
          <BsThreeDots/>
        </div>
      </div>

      <div className="user_search">
        <input type="text" placeholder="Search or Start a chat" />
        <CiSearch />
      </div>

      <div className="user_profile">
        {users.map((data, index) => {
          return (
            <div
              key={index}
              className={`profile ${index===currentSelected?"selected":""}`}

              onClick={()=>{changeCurrentChat(index,data)}}
            >
              <img src={user} alt="img" />
              <span>{data.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contacts;
