import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    // Sample cart data
    {
      name: 'Whirlpool 240 L',
      price: 29999,
      quantity: 1,
      image: 'asserts/FRIDGE-01-01.jpg',
      details: 'Whirlpool 240 L Frost Free Triple-Door Refrigerator (FP 263D PROTTON ROY ARCTIC STEEL(N).',
    },
    {
      name: 'Macbook Air',
      price: 149999,
      quantity: 1,
      image: 'asserts/LAPTOP-01-01.jpg',
      details: 'Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver.',
    },
  ]);

  const [cartTotal, setCartTotal] = useState(0);
  const [showBuyForm, setShowBuyForm] = useState(false);

  useEffect(() => {
    updateCart();
  }, []);

  const updateCart = () => {
    let total = 0;

    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });

    setCartTotal(total);
  };

  const handleBuyNow = () => {
    setShowBuyForm(true);
  };

  const confirmOrder = () => {
    // Add logic to handle order confirmation
    alert('Order Successfully Confirmed!');
    // Redirect or perform other actions as needed
    setShowBuyForm(false);
  };

  const handleRemoveFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
    updateCart();
  };

  return (
    <div>
      {/* Your JSX content here */}
      <section id="cart" className="container mt-4 ">
        {/* Cart items will be dynamically added here */}
        {cartItems.map((item, index) => (
          <div key={index} className="product-section container-fluid my-5 bg-black text-white row ">
            <div className='container-fluid row bg-dark text-white'>
            <div className="container-fluid cart-item-image mb-md-0 mb-3 col-lg-6 col-md-6 col-sm-12  mt-4">
              <img className="img-fluid mb-4 " style={{ width: '300px', height: '300px' }} src={item.image} alt={item.name} />
            </div>
            <div className="detailsDiv col-lg-6 col-md-6 col-sm-12  mt-4">
              <h5>{item.name}</h5>
              <p>{item.details}</p>
              <div className="quantity-control mb-2">
                <p className="mr-2">Quantity: {item.quantity}</p>
                <button
                  className="btn btn-danger quantity-decrease"
                  onClick={() => {
                    if (item.quantity > 1) {
                      item.quantity--;
                      updateCart();
                    }
                  }}
                >
                  -
                </button>
                <button
                  className="btn btn-success quantity-increase"
                  onClick={() => {
                    item.quantity++;
                    updateCart();
                  }}
                >
                  +
                </button>
              </div>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>Total: ${item.price * item.quantity.toFixed(2)}</p>
              <button
                  className="btn btn-danger btn-sm remove-item"
                  onClick={() => handleRemoveFromCart(index)}
                >
                  Remove
                </button>
            </div>
          </div>
          </div>
        ))}
        
      </section>

      <section id="total" className="container mt-4 bg-light p-3 text-center bg-black text-white mb-5">
        <h3>Total: ${cartTotal.toFixed(2)}</h3>
      </section>

      <section id="total" className="container mt-4 bg-white p-3 text-center">
        <button className="btn btn-success btn-lg" onClick={handleBuyNow}>
          Buy Now
        </button>
      </section>

{showBuyForm && (
  <div className='container-fluid mt-5 mb-5 '>
  <section id="buy" className="container-fluid mt-5 mb-5 text-center bg-black text-white">
      {/* <!-- User Information --> */}
      <div class="row">
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <h3>User Information</h3>
          <form id="buyForm">
              {/* <!-- User Information Fields (e.g., Phone Number) --> */}
              <div class="form-group">
                  <label for="userPhoneNumber">User Phone Number</label>
                  <input type="tel" class="form-control" id="userPhoneNumber" placeholder="User Phone Number" required />
              </div>
              {/* <!-- Add more user information fields as needed --> */}
              <div class="form-group">
                  <label for="receiverPhoneNumber">Receiver's Phone Number:</label>
                  <input type="text" class="form-control" id="receiverPhoneNumber" name="receiverPhoneNumber" required />
              </div>

              <div class="form-group">
                  <label for="ReceiverName">Receiver's Name:</label>
                  <input type="text" class="form-control" id="receivername" name="receivername" required />
              </div>
          </form>
      </div>

      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <h3>Address Information</h3>
          <form id="buyForm">
              {/* <!-- Address Information Fields (e.g., Country, State) --> */}
              <div class="form-group">
                  <label for="areaTown">Area/Town:</label>
                  <input type="text" class="form-control" id="areaTown" name="areaTown" required />
              </div>
  
              <div class="form-group">
                  <label for="country">Country:</label>
                  <input type="text" class="form-control" id="country" name="country" required />
              </div>
  
              <div class="form-group">
                  <label for="state">State:</label>
                  <input type="text" class="form-control" id="state" name="state" required />
              </div>
  
              <div class="form-group">
                  <label for="village">Village:</label>
                  <input type="text" class="form-control" id="village" name="village" required />
              </div>
  
              <div class="form-group">
                  <label for="pincode">Pincode:</label>
                  <input type="text" class="form-control" id="pincode" name="pincode" required />
              </div>
          </form>
      </div>
      
      {/* <!-- Payment Method --> */}
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <h3>Payment Method</h3>
          <form id="buyForm">
              {/* <!-- Payment Method Fields (e.g., Payment Options) --> */}
              <div class="btn-group-vertical" role="group">
                  <button type="button" class="btn btn-outline-secondary" onclick="selectPaymentMethod('netbanking')">Netbanking</button>
                  <button type="button" class="btn btn-outline-secondary" onclick="selectPaymentMethod('upi')">UPI</button>
                  <button type="button" class="btn btn-outline-secondary" onclick="selectPaymentMethod('card')">Card</button>
                  <button type="button" class="btn btn-outline-secondary" onclick="selectPaymentMethod('scanner')">Scanner</button>
                  {/* <!-- Add a new payment method --> */}
                  <button type="button" class="btn btn-outline-secondary" onclick="selectPaymentMethod('cash')">Cash on Delivery</button>
              </div>
              <input type="hidden" id="selectedPaymentMethod" name="selectedPaymentMethod" />
          </form>
      </div>
      </div>
      {/* <!-- Confirm Order Button --> */}
      <button type="button" className="btn btn-success mt-5 mb-3" onClick={confirmOrder}>
            Confirm Order
          </button>
      
      </section>
      </div>
)
}
</div>

  );
};

export default Cart;
