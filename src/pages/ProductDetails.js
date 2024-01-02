import React from 'react';
import { Carousel } from 'react-bootstrap';

const ProductDetails = () => {
  return (
    <div className="container-fluid mb-5 mt-5 row" style={{ paddingTop: '100px' }}>
      <div className="container-fluid col-lg-6">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="asserts/FRIDGE-04-01.jpg" // Replace with your image source
              alt="First slide"
              style={{ maxWidth: '450px', maxHeight: '450px', width: '100%', height: 'auto' }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="asserts/FRIDGE-04-02.jpg" // Replace with your image source
              alt="Second slide"
              style={{ maxWidth: '450px', maxHeight: '450px', width: '100%', height: 'auto' }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="asserts/FRIDGE-04-03.jpg" // Replace with your image source
              alt="Third slide"
              style={{ maxWidth: '450px', maxHeight: '450px', width: '100%', height: 'auto' }}
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="col-lg-6 product-info-div ">
        <div className="product-info">
          <h1>Amayra</h1>
          <p className="product-description">
            Amayra Women's Rayon Nayra Cut Embroidered Kurta with Pant and Dupatta Set size-M
          </p>
          <p className="price">Price: ₹999</p>
          <div className="buttons">
            <button id="buy-button" className="btn btn-primary">
              Buy
            </button>
            <button id="add-to-cart-button" className="btn btn-success">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
