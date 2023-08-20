import React from 'react';
import {  FaUsers, FaGlobeAsia, FaShoppingBasket } from 'react-icons/fa';
import { MdDiscount } from 'react-icons/md';

const Counter = () => {
    return (
      <div>
            
        <div className="main_container">
        <div className="no1">
            <div className="font_data">
              <h1><FaUsers /> </h1>
              
            </div>
            <h1>21900+</h1> <br />
            <p>Happy Customers</p>
          </div>
  
          <div className="no1">
            <div className="font_data">
           <h1><FaShoppingBasket /></h1>
            </div>
            <h1>326+</h1> <br />
            <p>Products</p>
          </div>
  
          <div className="no1">
            <div className="font_data">
              <h1> <MdDiscount /></h1>
            </div>
            <h1>311+</h1> <br />
            <p>Brands</p>
          </div>
  
          <div className="no1">
            <div className="font_data">
             <h1><FaGlobeAsia /></h1>
            </div>
            <h1>190+</h1> <br />
            <p>Countries</p>
          </div>
        </div>
        
      </div>
    );
  };
  
  export default Counter;