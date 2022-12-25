import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Chat from './pages/Chat'
import SetAvatar from './pages/SetAvatar';
import Logins from './pages/Wel';
const App = () => {
  return (
    <>
         <BrowserRouter>
             <Routes>
                {/* <Route path="" element={<Logins/>}/> */}
                <Route path="register" element={<Register/>}/>
                <Route path="" element={<Login/>}/>
                <Route path="setAvatar" element={<SetAvatar/>}/>
                <Route path="chat" element={<Chat/>}/>
             </Routes>
         </BrowserRouter>
     </>
  )
}

export default App;

// chat appuser