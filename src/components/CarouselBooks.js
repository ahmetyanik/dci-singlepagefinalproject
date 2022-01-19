import React, { useContext } from "react";
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import BookCard from "../components/BookCard";
import DataStore from "../components/DataStore";


function CarouselBooks() {
  const { newBooks, setnewBooks } = useContext(DataStore);

  const sliderSettings = {
    dots:true,
    slidesToShow: 4,
    slidesToScroll:5,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
         slidesToShow: 2,
         slidesToScroll:40,
        }
      },
      {
        breakpoint: 600,
        settings: {
         slidesToShow: 1,
         slidesToScroll:50,
        }
       }
    ]
  }
  
  return (
      <div className='content container mb-5'>
      <Slider {...sliderSettings}>
        
      {
       newBooks.map((book,index)=>{

         return(
           <BookCard book={book} index={index}/>
         )
       })
     }
      </Slider>
        
    </div>
  )
}

export default CarouselBooks;
