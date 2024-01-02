import React, { useState } from 'react';
import {Link } from'react-router-dom';

function Products() {
  const [products] = useState([
    { name: 'Whirlpool 240 L', description: 'Whirlpool 240 L Frost Free Triple-Door Refrigerator (FP 263D PROTTON ROY ARCTIC STEEL(N)', price: 'Price: ₹19999', image: 'asserts/FRIDGE-01-01.jpg' },
    { name: 'Whirlpool 240 L', description: 'Whirlpool 240 L, 3 Star, Digital Inverter, Direct-Cool Single Door Refrigerator (RR20C1723S8/HL, Silver, Elegant Inox, 2023 Model)', price: 'Price: ₹29999', image: 'asserts/FRIDGE-02-01.jpg' },
    { name: 'Haier 165L', description: 'Haier 165L 1 Star Direct Cool Single Door Refrigerator (HED-171RS-P, Red Steel)', price: 'Price: ₹39999', image: 'asserts/FRIDGE-03-01.jpg' },
    { name: 'Samsung 236 L', description: 'Samsung 236 L, 3 Star, Digital Inverter, Frost Free Double Door Refrigerator (RT28C3053S8/HL, Silver, Elegant Inox, 2023 Model)', price: 'Price: ₹19999', image: 'asserts/FRIDGE-04-01.jpg' },
    { name: 'LG 185 L', description: 'LG 185 L 5 Star Inverter Direct-Cool Single Door Refrigerator (GL-D201ABPU, Blue Plumeria, Fast Ice Making, Base stand with drawer)', price: 'Price: ₹29999', image: 'asserts/FRIDGE-05-01.jpg' },
    { name: 'HP Laptop 15s', description: 'HP Laptop 15s, AMD Ryzen 5 5500U, 15.6-inch (39.6 cm), FHD, 8GB DDR4, 512GB SSD, AMD Radeon Graphics, Thin & Light, Dual Speakers (Win 11, MSO 2019, Silver, 1.69 kg), eq2144AU', price: 'Price: ₹19999', image: 'asserts/LAPTOP-01-01.jpg' },
    { name: 'Lenovo ThinkPad E14', description: 'Lenovo ThinkPad E14 AMD Ryzen 5 7530U 14" (35.56 cm) WUXGA IPS 300 Nits Thin and Light Laptop (16GB RAM/512GB SSD/Windows 11 Home/AMD Radeon Graphics/Backlit Keyboard/FPR/Black/1.41 kg), 21JRS00U00', price: 'Price: ₹29999', image: 'asserts/LAPTOP-02-01.jpg' },
    { name: 'JioBook 11 (2023)', description: 'JioBook 11 (2023) NB1112MM(BLU) (Mediatek 8788 Octa-core 2 GHz/ARM Mali G72 MP3 @800 MHz/29.5cms 60 Hz/Thin and Light Laptop/ 4 GB LPDDR4/ 64 GB eMMC/JioOS 4G LTE, Dual Band Wi-Fi/Blue/ 990 GMS)', price: 'Price: ₹39999', image: 'asserts/LAPTOP-03-01.jpg' },
    { name: 'HP Laptop 14', description: 'HP Laptop 14, 12th Gen Intel Core i3, 14-inch (35.6 cm), FHD, 8GB DDR4, 512GB SSD, Thin & Light, Intel UHD Graphics, Dual Speakers (Win 11, MSO 2021, Silver, 1.4 kg), 14-ep0068TU', price: 'Price: ₹19999', image: 'asserts/LAPTOP-04-01.jpg' },
    { name: 'Vivobook 14', description: 'Vivobook 14, Intel Core i3-1115G4 11th Gen, 14" (35.56 cms) FHD, Thin and Light Laptop (8GB/512GB SSD/Windows 11/Office 2021/Transparent Silver/1.60 kg), X1400EA-EK322WS', price: 'Price: ₹29999', image: 'asserts/LAPTOP-05-01.jpg' },
    { name: 'Dell 15 Laptop', description: 'Dell 15 Laptop, Intel Core i5-1135G7 Processor/16GB DDR4/512GB SSD/Intel UHD Graphic/15.6" (39.562cm) FHD Display/Win 11+MSO 21/15 Month McAfee/Spill-Resistant Keyboard/Carbon/Thin & Light 1.69kg', price: 'Price: ₹39999', image: 'asserts/LAPTOP-06-01.jpg' },
    { name: 'Dell 15 Laptop', description: 'Dell 15 Laptop, Intel Core i5-1135G7 Processor/16GB DDR4/512GB SSD/Intel UHD Graphic/15.6" (39.562cm) FHD Display/Win 11+MSO 21/15 Month McAfee/Spill-Resistant Keyboard/Carbon/Thin & Light 1.69kg', price: 'Price: ₹19999', image: 'asserts/LAPTOP-07-01.jpg' },
    { name: 'HP Chromebook X360', description: 'HP Chromebook X360 Intel Celeron N4120 14 inch(35.6 cm) Micro-Edge, Touchscreen, 2-in-1 Laptop (4GB RAM/64GB eMMC/Chrome OS/Intel UHD Graphics,1.49Kg), 14a-ca0506TU', price: 'Price: ₹29999', image: 'asserts/LAPTOP-08-01.jpg' },
    { name: 'Apple MacBook Air', description: 'Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver', price: 'Price: ₹39999', image: 'asserts/LAPTOP-09-01.jpg' },
    { name: 'Samsung Galaxy Book3', description: 'Samsung Galaxy Book3 Core i7 13th Gen 1355U - (16 GB/512 GB SSD/Windows 11 Home) Galaxy Book3 Thin and Light Laptop  (15.6 Inch, Graphite, 1.58 Kg, with MS Office)', price: 'Price: ₹41999', image: 'asserts/LAPTOP-10-01.jpg' },
    { name: 'Samsung Galaxy Z', description: 'Samsung Galaxy Z Fold5 5G (Phantom Black, 12GB RAM, 512GB Storage)', price: 'Price: ₹13999', image: 'asserts/MOBILE-01-01.jpg' },
    { name: 'Redmi 13C ', description: 'Redmi 13C (Starshine Green, 4GB RAM, 128GB Storage) | Powered by 4G MediaTek Helio G85 | 90Hz Display | 50MP AI Triple Camera', price: 'Price: ₹19999', image: 'asserts/MOBILE-02-01.jpg' },
    { name: 'realme narzo', description: 'realme narzo N53 (Feather Black, 8GB+128GB) 33W Segment Fastest Charging | Slimmest Phone in Segment | 90 Hz Smooth Display', price: 'Price: ₹29999', image: 'asserts/MOBILE-03-01.jpg' },
    { name: 'TECNO Pova 5 Pro', description: 'TECNO Pova 5 Pro 5G (Dark Illusion, 8GB RAM,256GB Storage)| Segment 1st 68W Ultra Fast Charging | Indias 1st Multi-Colored Backlit ARC Interface | 50MP AI Dual Camera | 6.78”FHD+ Dot-in Display', price: 'Price: ₹13999', image: 'asserts/MOBILE-04-01.jpg' },
    { name: 'Samsung Galaxy M04', description: 'Samsung Galaxy M04 Light Green, 4GB RAM, 64GB Storage | Upto 8GB RAM with RAM Plus | MediaTek Helio P35 Octa-core Processor | 5000 mAh Battery | 13MP Dual Camera', price: 'Price: ₹19999', image: 'asserts/MOBILE-05-01.jpg' },
    { name: 'Samsung Galaxy', description: 'Samsung Galaxy A54 5G (Awesome Graphite, 8GB, 256GB Storage) | 50 MP No Shake Cam (OIS) | IP67 | Gorilla Glass 5 | Voice Focus | Without Charger', price: 'Price: ₹19999', image: 'asserts/MOBILE-06-01.jpg' },
    { name: 'Oppo F23 5G', description: 'Oppo F23 5G (Cool Black, 8GB RAM, 256GB Storage) | 5000 mAh Battery with 67W SUPERVOOC Charger | 64MP Rear Triple AI Camera with Microlens | 6.72" FHD+ 120Hz Display | with Offer', price: 'Price: ₹39999', image: 'asserts/MOBILE-07-01.jpg' },
    { name: 'Wakefit Sofa', description: 'Wakefit Sofa Set for Living Room | 1 Year Warranty | Sofa, 3 Seater Sofa, Sofa Set, Wooden Sofa Set for Living Room, Couch Sofa for Living Room, Solatio (Fabric, Dark Blue)', price: 'Price: ₹19999', image: 'asserts/SOFA-01-01.jpg' },
    { name: 'BSR ARTS Wooden', description: 'BSR ARTS Wooden Sofa Set for Living Room and Office 3 Three Seater with 2 Drawer Natural Finish', price: 'Price: ₹29999', image: 'asserts/SOFA-02-01.jpg' },
    { name: 'CASASTYLE Adonoy', description: 'CASASTYLE Adonoy 8 Seater RHS L Shape Fabric Sofa Set (Grey)', price: 'Price: ₹39999', image: 'asserts/SOFA-03-01.jpg' },
    { name: 'Mamta Furniture', description: 'Mamta Furniture Wooden Solid Sheesham Wood 5 Seater Sofa Set with Cream Cushions (5 Seater Sofa 3+1+1, Teak Finish)', price: 'Price: ₹19999', image: 'asserts/SOFA-04-01.jpg' },
    { name: 'Casacomfort Luno', description: 'Casacomfort Luno 4 Seater Fabric LHS L Shape Sofa Set (Light Grey-Dark Grey)', price: 'Price: ₹29999', image: 'asserts/SOFA-05-01.jpg' },
    { name: 'OnePlus 108 cm', description: 'OnePlus 108 cm (43 inches) Y Series 4K Ultra HD Smart Android LED TV 43Y1S Pro (Black)', price: 'Price: ₹19999', image: 'asserts/TV-01-01.jpg' },
    { name: 'VW 80 cm', description: 'VW 80 cm (32 inches) Playwall Frameless Series HD Ready Android Smart LED TV VW3251 (Black)', price: 'Price: ₹29999', image: 'asserts/TV-02-01.jpg' },
    { name: 'Kodak 100 cm', description: 'Kodak 100 cm (40 inches) Special Edition Series Full HD Smart LED TV 40SE5003BL (Black)', price: 'Price: ₹39999', image: 'asserts/TV-02-01.jpg' },
    { name: 'Sony Bravia 139 cm', description: 'Sony Bravia 139 cm (55 inches) 4K Ultra HD Smart LED Google TV KD-55X74K (Black)', price: 'Price: ₹19999', image: 'asserts/TV-03-01.jpg' },
    { name: 'Hisense 108 cm', description: 'Hisense 108 cm (43 inches) 4K Ultra HD Smart QLED Google TV 43U6K (Gray)', price: 'Price: ₹29999', image: 'asserts/TV-04-01.jpg' },
    { name: 'Toshiba 139 cm', description: 'Toshiba 139 cm (55 inches) 4K Ultra HD Smart QLED Google TV 55M550LP (Black)', price: 'Price: ₹39999', image: 'asserts/TV-05-01.jpg' },
    { name: 'Nu 109 cm', description: 'Nu 109 cm (43 inch) Google Series 4K Ultra HD LED Smart TV LED43UGNX (Black) 2023 Model', price: 'Price: ₹19999', image: 'asserts/TV-06-01.jpg' },
    { name: 'Hisense 108 cm', description: 'Hisense 108 cm (43 inches) 4K Ultra HD Smart QLED TV 43E7K (Black)', price: 'Price: ₹29999', image: 'asserts/TV-07-01.jpg' },
    { name: 'iFFALCON 138.7 cm', description: 'iFFALCON 138.7 cm (55 inches) 4K Ultra HD Smart LED Google TV iFF55U62 (Black)', price: 'Price: ₹39999', image: 'asserts/TV-08-01.jpg' },
    { name: 'LG 108 cm', description: 'LG 108 cm (43 inches) 4K Ultra HD Smart LED TV 43UR7500PSC (Dark Iron Gray)', price: 'Price: ₹26999', image: 'asserts/TV-09-01.jpg' },
    { name: 'Dennis Lingo', description: 'Dennis Lingo Mens Solid Slim Fit Cotton Casual Shirt with Spread Collar & Full Sleeves size-40', price: 'Price: ₹31990', image: 'asserts/TV-10-01.jpg' },
    { name: 'IndoPrimo Mens', description: 'IndoPrimo Mens Regular Fit Checks Cotton Casual Shirt for Men Full Sleeves - Suzuki size-38', price: 'Price: ₹499', image: 'asserts/CLOTH-01-01.jpg' },
    { name: 'U.S. POLO ASSN', description: 'U.S. POLO ASSN. Mens Shirt size-42', price: 'Price: ₹1375', image: 'asserts/CLOTH-02-01.jpg' },
    { name: 'Van Heusen', description: 'Van Heusen Mens Casual Shirt size-44', price: 'Price: ₹809', image: 'asserts/CLOTH-03-01.jpg' },
    { name: 'UCB MEN SHIRT', description: 'United Colors of Benetton Men Shirt size-40', price: 'Price: ₹1749', image: 'asserts/CLOTH-04-01.jpg' },
    { name: 'Amayra', description: 'Amayra Womens Rayon Nayra Cut Embroidered Kurta with Pant and Dupatta Set size-M', price: 'Price: ₹799', image: 'asserts/CLOTH-06-01.jpg' },
    { name: 'Stylum', description: 'Stylum Womens Floral Print Rayon A-Line Kurta size-S', price: 'Price: ₹599', image: 'asserts/CLOTH-07-01.jpg' },
  ]);

  return (
    <>
    <section className="product-filter">
        <div className="filter text-center">
          <button className="btn btn-black active" data-category="all">All</button>
          <button className="btn btn-black" data-category="clothing">Clothing</button>
          <button className="btn btn-black" data-category="electronics">Electronics</button>
          <button className="btn btn-black" data-category="others">Others</button>
        </div>
      </section>

      <section className="products bg-black">
        <div className="container-fluid mt-5">
          <h2 className="mb-5" style={{color:"white"}}>Products</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
            {products.map(product => (
              <div key={product.name} className="col-md-3 mb-5">
                <div className="card product-card">
                  <img src={product.image} className="card-img-top" alt={product.name} />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">{product.price}</p>
                    <Link to="/cart" className="btn btn-primary">
                      Add to cart
                    </Link>
                    <Link to="/productdetails" className="btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
