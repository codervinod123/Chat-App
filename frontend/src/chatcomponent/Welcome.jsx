import React from "react";
import "./Welcome.css";

const Welcome = ({currentUser}) => {
  return (
    <div className="welcome_container">
      <div className="inner">
        <h1>rocket.chat for Desktop</h1>
        {/* <h3>Welcome {currentUser.name} select fiend to start chat</h3> */}
        <span>
          Send and recieve messages without keeping your phone online.
          <br />
          Use rocket.chat on up to 4 linked devices and one phone at a same
          time.
        </span>
      </div>
    </div>
  );
};

export default Welcome;
