import React, { useContext } from "react";
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import BookCard from "../components/BookCard";
import DataStore from "../components/DataStore";
import Child from "../images/child.png"


function CarouselBooksChild() {
  const { childBooks, setChildBooks } = useContext(DataStore);

  const sliderSettings = {
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }

  return (
    <div className='container mb-5'>
      <h6 className="home-title mt-5">Kinderbücher</h6>
      <div className="row">
        <div className="col-lg-6">
          <Slider {...sliderSettings}>

            {
              childBooks.map((book, index) => {

                return (
                  <BookCard book={book} index={index} />
                )
              })
            }
          </Slider>
        </div>
        <div className="col-lg-6 row banner-child mt-3 mb-3 ms-2">
          <img className="" src={Child} alt=""></img>
        </div>

        
      </div>

    </div>
  )
}

export default CarouselBooksChild;