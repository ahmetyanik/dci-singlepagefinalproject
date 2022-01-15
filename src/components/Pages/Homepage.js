import React from "react";
import Header from "../Header";
import Carousel from "../Carousel";
import Footer from "../Footer";
import BookCard from "../BookCard";

function Homepage() {
  return (
    <div>
      <Header />
      <Carousel />
      <BookCard/>
      <Footer />
    </div>
  );
}

export default Homepage;
