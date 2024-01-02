import React from 'react'
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import Products from '../components/Products';


const Home = () => {
  return (
    <>
    <div className='mt-5'>
      <section id="testimonials">
        <div
          id="testimonial-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-pause="hover"
          data-bs-interval="2000"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <h2>
              Discover joy in every purchase. Our customers testify to the unbeatable combination of quality, style, and affordability. Elevate your experience!
              </h2>
              <img
                className="testimonial-img"
                src="asserts/CLOTH-01-01.jpg"
                alt="offer" />
              <em>india</em>
            </div>
            <div className="carousel-item">
              <h2 className="testimonial-text">
              Experience fashion bliss. Customers rave about our stylish finds and unbeatable prices. Join them in embracing affordable elegance. Shop smartly today!              </h2>
              <img
                className="testimonial-img"
                src="asserts/LAPTOP-01-01.jpg"
                alt="offer" />
              <em>india</em>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonial-carousel"
            data-bs-slide="prev"
          >
            <FaAngleDoubleLeft style={{ backgroundColor: "white" , color:"#000"}}/>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonial-carousel"
            data-bs-slide="next"
          >
            <FaAngleDoubleRight  style={{ backgroundColor: "white" , color:"#000"}} />
          </button>
        </div>
      </section>

      {/* category filter and products */}
      <Products />

      {/* performance  */}

      <section id="features">
        <div className="row">
          <div className="feature-box col-lg-4 ">
            <i className="icon love fa-solid fa-heart fa-4x"></i>
            <h3>Easy to use.</h3>
            <p>So easy to use, even your child also like it .</p>
          </div>
          <div className="feature-box col-lg-4 ">
            <i className="icon smile fa-solid fa-face-smile fa-4x"></i>
            <h3>Elite Clientele</h3>
            <p>We have all the products , new and old.</p>
          </div>
          <div className="feature-box col-lg-4 ">
            <i className="icon correct fa-solid fa-circle-check fa-4x"></i>
            <h3>Guaranteed to work.</h3>
            <p>Your satisfaction, our guarantee</p>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

export default Home