import React from "react";
import Slider from "react-slick";

import Slider1 from "../../assets/Banner/slider1.jpg";
import Slider2 from "../../assets/Banner/slider2.jpg";
import Slider3 from "../../assets/Banner/silder3.jpg";
import Slider4 from "../../assets/Banner/silder4.jpg";

import {
  SliderImage,
  BannerSection,
  BannerCards,
} from "../../style/bannerStyle";
import FourCard from "../FourCard/FourCard";

import { fourcardImage } from "../../assets/data";

// const LeftButton = ({ className, style, onClick }) => {
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     >
//       <PrevArrow>S</PrevArrow>
//     </div>
//   );
// };

const Banner = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <BannerSection>
      <SliderImage>
        <Slider {...settings}>
          <div>
            <img src={Slider1} alt="Silder1" />
          </div>
          <div>
            <img src={Slider2} alt="Silder2" />
          </div>
          <div>
            <img src={Slider3} alt="Silder3" />
          </div>
          <div>
            <img src={Slider4} alt="Silder4" />
          </div>
        </Slider>
        {/* <img src={Slider1} alt="Silder1" /> */}
      </SliderImage>

      <BannerCards>
        <FourCard
          cardTitle="Styles of the season | Launching Autumn"
          images={fourcardImage}
        ></FourCard>
        <FourCard
          cardTitle="Styles of the season | Launching Autumn"
          images={fourcardImage}
        ></FourCard>
        <FourCard
          cardTitle="Styles of the season | Launching Autumn"
          images={fourcardImage}
        ></FourCard>
        <FourCard
          cardTitle="Styles of the season | Launching Autumn"
          images={fourcardImage}
        ></FourCard>
      </BannerCards>
    </BannerSection>
  );
};

export default Banner;
