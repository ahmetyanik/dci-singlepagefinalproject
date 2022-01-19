import React, { useContext, useEffect, useState } from "react";

import Header from "../Header";
import Carousel from "../Carousel";
import Footer from "../Footer";
import BookCard from "../BookCard";
import DataStore from "../DataStore";

import CarouselBook from "../CarouselBooks";

function Homepage() {
  const { allBooks, setAllBooks } = useContext(DataStore);


  return (
    <div>
      <Header />
      <Carousel />
      <CarouselBook/>

      <Footer />
    </div>
  );
}

export default Homepage;
