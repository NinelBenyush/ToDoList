import React from "react";
import Hero from "./Hero";

function Home(){
    return (
        <div className="d-flex flex-column min-vh-100">
        <div className="flex-grow-1">
         <Hero />
        </div>
      </div>
    )
}

export default Home;