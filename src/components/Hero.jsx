import React from "react";
import img from "../assets/Landing-page-background.jpg";
import Todo from "./Todo";


function Hero(){
    return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: `url(${img})`,height: '100vh',
        backgroundSize: 'cover',backgroundRepeat: 'no-repeat' }}
      >
        <Todo />
      </div>
    </header>
  );
}
    
export default Hero;