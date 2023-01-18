import React from "react";
import CostomerSection from "../Components/FarmerSec";
import FarmerHero from "../Components/CostomerSec";
import Header from "../Components/Header";
import Hero from "./Hero";
import WholeSellerSec from "../Components/WholeSellerSec";
import Footer from "../Components/Footer";
function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <CostomerSection />
      <FarmerHero />
      <WholeSellerSec />
      <Footer />
    </div>
  );
}

export default Home;
