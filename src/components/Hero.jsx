import React from "react";
import img from "../assets/Landing-page-background.jpg";



function Hero(){
    return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: `url(${img})`,height: '100vh',
        backgroundSize: 'cover',backgroundRepeat: 'no-repeat' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>To Do List</h1>
              <h4 className='mb-3'>A to-do list helps you organize your tasks and ensures you don't forget anything</h4>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
    
export default Hero;