import React from 'react'
import "./Home.css";
import PIC from "../Asset/login_bg.jpg";
import Navbar from './Navbar';

const Home = () => {
  return (
    <>
        <div className="home_container">
            <div className="inner_container">
               <Navbar/>
              <div className="home_body">
                  <div className="intro">
                       <div className="details">
                            <h1>The Ultimate <br/> communication <br/>platform</h1>
                            <br/>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
                               illum minus libero dignissimos qui expedita at aperiam ab, vel numquam 
                               repellat soluta voluptatum blanditiis praesentium! Eius delectus 
                               repellendus recusandae dignissimos?
                            </p>
                       </div>
                       
                       <div className="buttons">
                        <button className='btn demo'>Schedule demo</button>
                        <button className='btn trail'>Try Now</button>
                       </div>

                  </div>
                  <div className="animation">
                      <p>Loreapiente nisi. Ratione nobis magnam eligendi, necessitatibus, adipisci quib Loreapiente nisi. Ratione nobis magnam eligendi, necessitatibus, adipisci quibLoreapiente nisi. Ratione nobis magnam eligendi, necessitatibus, adipisci quib Loreapiente nisi. Ratione nobis magnam eligendi, necessitatibus, adipisci quib Loreapiente nisi. Ratione nobis magnam eligendi, necessitatibus, adipisci quib Loreapiente nisi. Ratione nobis magnam eligendi, necessitatibus, adipisci quibLoreapiente nisi. Ratione nobis magnam eligendi, necessitatibus, adipisci quibLoreapiente nisi. Ratione nobis magnam eligendi, necessitatibus, adipisci quib Loreapiente nisi. Ratione nobis magnam eligendi, necessitatibus, adipisci quib Loreapiente nisi. Ratione nobis magnam eligendi, necessitatibus, adipisci quib</p>
                  </div>
              </div>

            </div>
        </div>
    </>
  )
}

export default Home