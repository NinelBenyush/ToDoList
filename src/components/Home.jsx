import React from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Todo from "./Todo";

function Home(){
    return (
        <div className="d-flex flex-column min-vh-100">
        <div className="flex-grow-1">
         <Hero />
         <Todo />
        </div>
      </div>
    )
}

export default Home;