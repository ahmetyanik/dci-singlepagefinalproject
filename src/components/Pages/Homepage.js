import React, { useContext, useEffect, useState } from "react";

import Header from "../Header";
import Carousel from "../Carousel";
import Footer from "../Footer";
import BookCard from "../BookCard";
import DataStore from "../DataStore";

import CarouselBook from "../CarouselBooks";
import CarouselBookRec from "../CarouselBooksRec";
import CarouselBookChild from "../CarouselBooksChild";

function Homepage() {
  const { allBooks, setAllBooks } = useContext(DataStore);


  return (
    <div>
      <Header />
      <Carousel />
      <CarouselBook />
      <CarouselBookRec />
      <div className="container pb-5 pt-5 border-banner">
        <div class="banner"></div>
      </div>
      <CarouselBookChild />
      <Footer />
    </div>
  );
}

export default Homepage;
