import React from 'react'
import '../App.css';
import Img1 from '../images/7.png'
import Img2 from '../images/8.png'
import Img3 from '../images/10.png'


function Carousel() {
  return (
    
    <div id="carouselExampleControls" className="carousel slide display-none" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Img1} className="d-block w-100" alt="..."></img>
        </div>
        <div className="carousel-item">
          <img src={Img2}  className="d-block w-100" alt="..."></img>
        </div>
        <div className="carousel-item carol">
          <img src={Img3}  className="d-block w-100" alt="..."></img>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carousel
