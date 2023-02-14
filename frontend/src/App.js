import React from 'react'
import Home from './Components/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './Components/Login';
import Register from './Components/Register';
import About from './Components/About';
import Chathome from './chatcomponent/Chathome';

const App = () => {
  return (
    <React.Fragment>
              <BrowserRouter>
                <Routes>
                   <Route path='/' element={<Home/>}/>
                   <Route path='/login' element={<Login/>}/>
                   <Route path='/register' element={<Register/>}/>
                   <Route path='/about' element={<About/>}/>
                   <Route path='/chat' element={<Chathome/>}/>
                </Routes>
              </BrowserRouter>
    </React.Fragment>
  )
}

export default App