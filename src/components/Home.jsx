import React from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";

function Home(){
    return (
        <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="flex-grow-1">
         <Hero />
        </div>
        <Footer />
      </div>
    )
}

export default Home;