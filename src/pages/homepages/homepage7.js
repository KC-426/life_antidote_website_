import React from 'react';
// import classNames from "classnames";
// import { faUsersLine } from '@fortawesome/fontawesome-free/solid';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Counter = () => {
    return (
      <div>
            {/* <ul className={`${classNames(classNames)} social-icons`}></ul> */}
        <div className="main_container">
        <div className="no1">
        {/* <FontAwesomeIcon icon={faUsersLine} /> */}
            <div className="font_data">
              <i className="fa-solid fa-users-line"></i>
            </div>
            <h1>21900+</h1> <br />
            <p>Happy Customers</p>
          </div>
  
          <div className="no1">
            <div className="font_data">
              <i className="fa-solid fa-users-line"></i>
            </div>
            <h1>326+</h1> <br />
            <p>Products</p>
          </div>
  
          <div className="no1">
            <div className="font_data">
              <i className="fa-solid fa-users-line"></i>
            </div>
            <h1>311+</h1> <br />
            <p>Brands</p>
          </div>
  
          <div className="no1">
            <div className="font_data">
              <i className="fa-solid fa-users-line"></i>
            </div>
            <h1>190+</h1> <br />
            <p>Countries</p>
          </div>
        </div>
        
      </div>
    );
  };
  
  export default Counter;