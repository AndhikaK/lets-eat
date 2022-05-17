import React from "react";
import DetailContainer from "../components/food-detail/DetailContainer";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

function FoodDetail() {
  return (
    <div>
      <Header />
      <DetailContainer />
      <Footer />
    </div>
  );
}

export default FoodDetail;
