import React from 'react'
import imgOne from '../../assets/images/img1.jpg'
import imgTwo from '../../assets/images/img2.jpg'
import imgThree from '../../assets/images/img3.jpg'

const Slider = () => {
  return (
    <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner h-100">
    <div className="carousel-item active">
      <img src={imgOne}className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={imgTwo} className="d-block w-100 " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={imgThree} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Slider