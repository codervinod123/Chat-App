import React, { useState, useEffect } from "react";
import "./Contacts.css";
import user from "../Asset/dp/7.jpg";
import { MdGroups } from "react-icons/md";
import { ImSpinner10 } from "react-icons/im";
import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import Setting from "./component/Setting";

import { useNavigate } from "react-router-dom";





const Contacts = (props) => {
  const [selected, setSelected] = useState(undefined);
  const [loggedin, setLoggedin] = useState(undefined);
  const [currentSelected,setCurrentSelected]=useState(undefined);
  
  const users = props.contacts;
  

  useEffect(() => {
    if (props.currentUser) {
      const username = props.currentUser.name;
      // console.log(username);
      // setLoggedin(username);
    }
  }, [props.currentUser]);


 



  
  const [show, setShow] = useState(false);
  
  

  const changeCurrentChat=(index,data)=>{

      setCurrentSelected(index);
      props.changeChat(data);
  }
  
  const [searchText, setSearchText] = useState("");
  const handleSearchChnage=(e)=>{
      setSearchText(e.target.value);
      
  }


  const [isOpen,setIsOpen]=useState(false);

  const handleSettingClick=()=>{
    setIsOpen(!isOpen);
    console.log(isOpen);
  }
  

  const navigate = useNavigate();
  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/login");
  };



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
          <BsThreeDots onClick={handleSettingClick} className="setting"/>

        </div>
      </div>

     

      <div className="user_search">
        <input onChange={handleSearchChnage} type="text" placeholder="Search or Start a chat" />
        <CiSearch />
      </div>

      <div className="user_profile">
        {users.map((data,index) => {
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


        {isOpen && (
        <div className="modal" style={{position:"absolute", left:"275px", top:"55px", width:"150px", borderRadius:"3px", background:"#83858e"}}>
             <ul className="seittngOption">
                 <li>New groups</li>
                 <li>New community</li>
                 <li>Starrd messages</li>
                 <li>Select chats</li>
                 <li>Setting</li>
                 <li onClick={(e) => handleLogOut(e)}>Logout</li>
             </ul>
        </div>
      )}
      </div>
     
    </div>
  );
};

export default Contacts;
