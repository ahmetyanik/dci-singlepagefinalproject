import React, { useContext } from "react";

import Header from "../Header";
import Carousel from "../Carousel";
import Footer from "../Footer";
import BookCard from "../BookCard";
import DataStore from "../DataStore";

import CarouselBook from "../CarouselBooks";

function Homepage() {
  const { allBooks, setAllBooks } = useContext(DataStore);

  console.log(allBooks)

  return (
    <div>
      <Header />
      <Carousel />
      <CarouselBook/>
      <div className="container d-flex flex-row flex-wrap justify-content-around">
     
     {
       allBooks.map((book,index)=>{

         return(
           <BookCard book={book} index={index}/>
         )
       })
     }

      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
