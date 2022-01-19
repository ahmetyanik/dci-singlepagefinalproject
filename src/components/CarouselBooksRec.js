import React, { useContext } from "react";
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import BookCard from "../components/BookCard";
import DataStore from "../components/DataStore";


function CarouselBooks() {
  const { recBooks, setRecBooks } = useContext(DataStore);

  const sliderSettings = {
    dots:true,
    slidesToShow: 4,
    slidesToScroll:4,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
         slidesToShow: 2,
         slidesToScroll:2,
        }
      },
      {
        breakpoint: 600,
        settings: {
         slidesToShow: 1,
         slidesToScroll:1,
        }
       }
    ]
  }
  
  return (
      <div className='container mb-5'>
        <h6 className="home-title">Empfehlungen</h6>
      <Slider {...sliderSettings}>
        
      {
       recBooks.map((book,index)=>{

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