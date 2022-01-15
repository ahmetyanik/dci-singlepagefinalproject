import React from "react";

import Header from "../Header";
import Carousel from "../Carousel";
import Footer from "../Footer";
import BookCard from "../BookCard";
import BookPage from "./BookPage";




function Homepage() {
  
  return (
    <div>
      <Header />
      <Carousel />
      <BookPage/>
      <BookCard/>
      <Footer />
      
    </div>
  );
}

export default Homepage;
