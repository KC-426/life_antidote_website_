import SectionTitleOne from "../../../components/Sections/SectionTitle/SectionTitleOne";

// import Button from "../../../Control/Button";
// import Image from "next/image";

import { PrevArrow, NextArrow } from "../../../components/Other/SliderArrow";
import axios from "axios";
import React, { useState, useEffect } from "react";
import BrandsOne from "../Brands/BrandsOne";

export default function BrandSlideOne({ data }) {
  const [minData, setMainData] = useState([]);
  console.log("start");

  const fetchData = async () => {
    try {
    //   const url = `${process.env.PUBLIC_URL + "/api/get/brand"}`;
        const url = "http://localhost:5000/api/get/brand";
      const res = await axios.get(url);

      console.log("sorce", res.data.findBrands);
      setMainData(res.data.findBrands);
    } catch (error) {
      console.log(error);
    }

    useEffect(() => {
      fetchData();
    }, []);

    console.log(minData);

    const settings = {
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      className: "product-slide__wrapper",
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
      responsive: [
        {
          breakpoint: 1170,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    return (
      <div className="product-slide">
        <div className="container">
          <SectionTitleOne align="center" spaceBottom="50px">
            Our Brands
          </SectionTitleOne>

          <BrandsOne data={minData} sliderSettings={settings} />
          <div className="text-center"></div>
        </div>
      </div>
    );
  };
}
