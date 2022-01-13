import React from 'react'
import '../App.css';
import Img1 from '../images/7.png'
import Img2 from '../images/8.png'
import Img3 from '../images/10.png'


function Carousel() {
  return (
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active banner">
          <img src={Img1} class="d-block w-100" alt="..."></img>
        </div>
        <div class="carousel-item banner">
          <img src={Img2}  class="d-block w-100" alt="..."></img>
        </div>
        <div class="carousel-item banner">
          <img src={Img3}  class="d-block w-100" alt="..."></img>
        </div>
        
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carousel
