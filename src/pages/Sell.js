import React, { useState } from 'react';
import { CiMobile3 } from "react-icons/ci";
import { LiaBookSolid } from "react-icons/lia";
import { GiClothes } from "react-icons/gi";
import { LuLaptop2 } from "react-icons/lu";
import { MdDevicesOther } from "react-icons/md";
import { Button } from 'react-bootstrap';

const Sell = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const renderForm = () => {
    switch (selectedCategory) {
      case 'mobiles':
        return (
          <div>
            <label for="mobileBrand">Select Mobile Brand:</label>
                <select id="mobileBrand">
                    <option value="Samsung">Samsung</option>
                    <option value="Apple">Apple</option>
                    <option value="Xiaomi">Xiaomi</option>
                    {/* <!-- Add more brands as options --> */}
                </select>
                <br></br>
                <label for="modelName">Model Name:</label>
                <input type="text" id="modelName"/>
                <br></br>
                <label for="condition">Condition:</label>
                <select id="mobileBrand">
                    <option value="Good">good</option>
                    <option value="Normal">Normal</option>
                    <option value="Bad">Bad</option>
                    {/* <!-- Add more brands as options --> */}
                </select>
                <br></br>
                <label for="Discription">Discription:</label>
                <input type="text" id="Discription"/>
                <br></br>
                <label for="mobileprice">Price:</label>
                <input type="text" id="mobileprice"/>
                <br></br>
                <label for="mobileImage1">Upload Photo 1:</label>
                <input type="file" id="mobileImage1" accept="image/*" capture="camera"/>
                <br></br>
                <label for="mobileImage2">Upload Photo 2:</label>
                <input type="file" id="mobileImage2" accept="image/*" capture="camera"/>
                <br></br>
                <label for="mobileImage3">Upload Photo 3:</label>
                <input type="file" id="mobileImage3" accept="image/*" capture="camera"/>
                <br></br>
                <label for="mobileImage4">Upload Photo 4:</label>
                <input type="file" id="mobileImage4" accept="image/*" capture="camera"/>
                <br></br>
                <div className="button-container">
                <Button variant="success" className="mt-4 ">Submit</Button>
                </div>

          </div>
        );
      case 'books':
        return (
          <div>
            <label for="bookCategory">Select Book Category:</label>
                <select id="bookCategory">
                    <option value="Science Fiction">Science Fiction</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Romance">Romance</option>
                    {/* <!-- Add more book categories as options --> */}
                </select>
                <br></br>
                <label for="BookName">BookName:</label>
                <input type="text" id="BookName"/>
                <br></br>
                <label for="author">Author:</label>
                <input type="text" id="author"/>
                <br></br>
                <label for="condition">Condition:</label>
                <select id="mobileBrand">
                    <option value="Good">good</option>
                    <option value="Normal">Normal</option>
                    <option value="Bad">Bad</option>
                    {/* <!-- Add more brands as options --> */}
                </select>
                <br></br>
                <label for="Discription">Discription:</label>
                <input type="text" id="Discription"/>
                <br></br>
                <label for="bookprice">Price:</label>
                <input type="text" id="bookprice"/>

                <br></br>
                <label for="bookImage1">Upload Photo 1:</label>
                <input type="file" id="bookImage1" accept="image/*" capture="camera"/>
                <br></br>
                <label for="bookImage2">Upload Photo 2:</label>
                <input type="file" id="bookImage2" accept="image/*" capture="camera"/>
                <br></br>
                <label for="bookImage3">Upload Photo 3:</label>
                <input type="file" id="bookImage3" accept="image/*" capture="camera"/>
                <br></br>
                <label for="bookImage4">Upload Photo 4:</label>
                <input type="file" id="bookImage4" accept="image/*" capture="camera"/>
                <br></br>
                <div className="button-container">
                <Button variant="success" className="mt-4 ">Submit</Button>
                </div>
          </div>
        );
      case 'clothes':
        return (
          <div>
            <label for="clothingCategory">Select Clothing Category:</label>
                <select id="clothingCategory">
                    <option value="T-shirts">T-shirts</option>
                    <option value="Dresses">Dresses</option>
                    <option value="Jeans">Jeans</option>
                    {/* <!-- Add more clothing categories as options --> */}
                </select>
                <label for="size">Size:</label>
                <select id="size">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    {/* <!-- Add more sizes as options --> */}
                </select>
                <br></br>
                <label for="brand">Brand:</label>
                <select id="size">
                    <option value="small">Zara</option>
                    <option value="medium">Allen Solly</option>
                    <option value="large">Levi's</option>
                    <option value="small">Louis Philippe</option>
                    <option value="medium">Flying Machine</option>
                    {/* <!-- Add more sizes as options --> */}
                </select>
                <br></br>
                <label for="Discription">Discription:</label>
                <input type="text" id="Discription"/>
                <br></br>
                <label for="clothesprice">Price:</label>
                <input type="text" id="clothesprice"/>
                <br></br>
                <label for="clothesImage1">Upload Photo 1:</label>
                <input type="file" id="clothesImage1" accept="image/*" capture="camera"/>
                <br></br>
                <label for="clothesImage2">Upload Photo 2:</label>
                <input type="file" id="clothesImage2" accept="image/*" capture="camera"/>
                <br></br>
                <label for="clothesImage3">Upload Photo 3:</label>
                <input type="file" id="clothesImage3" accept="image/*" capture="camera"/>
                <br></br>
                <label for="clothesImage4">Upload Photo 4:</label>
                <input type="file" id="clothesImage4" accept="image/*" capture="camera"/>
                <br></br>
                <div className="button-container">
                <Button variant="success" className="mt-4 ">Submit</Button>
                </div>
          </div>
        );
      case 'laptops-tv':
        return (
          <div>
             <label for="Laptop/Tv">Laptop/Tv:</label>
                <select id="type">
                    <option value="Laptop">Laptop</option>
                    <option value="TV">TV</option>
                    {/* <!-- Add more brands as options --> */}
                </select>
                <br></br>
                <label for="brand">Brand:</label>
                <select id="electronics">
                    <option value="Dell">Dell</option>
                    <option value="Apple">Apple</option>
                    <option value="Hp">Hp</option>
                    {/* <!-- Add more brands as options --> */}
                </select>
                <br></br>
                <label for="modelName">Model Name:</label>
                <input type="text" id="modelName" />
                <br></br>
                <label for="condition">Condition:</label>
                <select id="conditionBrand">
                    <option value="Good">good</option>
                    <option value="Normal">Normal</option>
                    <option value="Bad">Bad</option>
                    {/* <!-- Add more brands as options --> */}
                </select>
                <br></br>
                <label for="Discription">Discription:</label>
                <input type="text" id="Discription"/>
                <br></br>
                <label for="laptopprice">Price:</label>
                <input type="text" id="laptopprice" />
                <br></br>
                <label for="electronicsImage1">Upload Photo 1:</label>
                <input type="file" id="electronicsImage1" accept="image/*" capture="camera" />
                <br></br>
                <label for="electronicsImage2">Upload Photo 2:</label>
                <input type="file" id="electronicsImage2" accept="image/*" capture="camera" />
                <br></br>
                <label for="electronicsImage3">Upload Photo 3:</label>
                <input type="file" id="electronicsImage3" accept="image/*" capture="camera" />
                <br></br>
                <label for="electronicsImage4">Upload Photo 4:</label>
                <input type="file" id="electronicsImage4" accept="image/*" capture="camera" />
                <br></br>
                <div className="button-container">
                <Button variant="success" className="mt-4 ">Submit</Button>
                </div>
          </div>
        );
      case 'others':
        return (
          <div>
            <h3>Other Categories</h3>
                <p>Information about other categories goes here.</p>
                <br></br>
                <label for="ProductName">Product Name:</label>
                <input type="text" id="ProductName"/>
                <br></br>
                <label for="Discription">Discription:</label>
                <input type="text" id="Discription"/>
                <br></br>
                <label for="mobileprice">Price:</label>
                <input type="text" id="mobileprice" />
                <br></br>
                <label for="otherImage1">Upload Photo 1:</label>
                <input type="file" id="otherImage1" accept="image/*" capture="camera" />
                <br></br>
                <label for="otherImage2">Upload Photo 2:</label>
                <input type="file" id="otherImage2" accept="image/*" capture="camera" />
                <br></br>
                <label for="otherImage3">Upload Photo 3:</label>
                <input type="file" id="otherImage3" accept="image/*" capture="camera" />
                <br></br>
                <label for="otherImage4">Upload Photo 4:</label>
                <input type="file" id="otherImage4" accept="image/*" capture="camera" />
                <br></br>
                <div className="button-container">
                <Button variant="success" className="mt-4 ">Submit</Button>
                </div>
          </div>
        );
      default:
        return <p>Select a category to see details.</p>;
    }
  };

  return (
    <div className='pb-4 mt-5'>
      <section id="categories">
      <h2 style={{color:"green"}}>Selling Page</h2>
        <div className="container">
          <h2>Categories</h2>
          <div className="category-list">
            <div className="category" id="mobiles" onClick={() => handleCategoryClick('mobiles')}>
              <CiMobile3 className='h-50 w-50'/>
              <p>Mobiles</p>
            </div>
            <div className="category" id="books" onClick={() => handleCategoryClick('books')}>
              <LiaBookSolid  className='h-50 w-50'/>
              <p>Books</p>
            </div>
            <div className="category" id="clothes" onClick={() => handleCategoryClick('clothes')}>
              <GiClothes className='h-50 w-50'/>
              <p>Clothes</p>
            </div>
            <div className="category" id="laptops-tv" onClick={() => handleCategoryClick('laptops-tv')}>
              <LuLaptop2 className='h-50 w-50'/>
              <p>Laptops/TV</p>
            </div>
            <div className="category" id="others" onClick={() => handleCategoryClick('others')}>
              <MdDevicesOther className='h-50 w-50'/>
              <p>Others</p>
            </div>
          </div>
        </div>
      </section>

      <section id="category-details">
        <div className="container-fluid categories-details">
          <div id="category-content">
            {renderForm()}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sell;
