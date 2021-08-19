import React from "react";
import { product } from "../assets/data";
import LargeAds from "../components/Ads/LargeAds";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import SubFooter from "../components/Footer/SubFooter";
import Header from "../components/Header/Header";
import SubHeader from "../components/Header/SubHeader";
import LoginSection from "../components/LoginSection/LoginSection";
import Products from "../components/Products/Products";

const Home = () => {
  return (
    <>
      <Header />
      <SubHeader />
      <Banner />

      <Products name="Todays Deals" product={product} />
      <Products
        name="Everyday essentials that you might like
"
        product={product}
      />
      <LargeAds />
      <LoginSection />
      <Footer />
      <SubFooter />
    </>
  );
};

export default Home;
