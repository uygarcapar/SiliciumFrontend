import Campaigns from "../components/Campaigns";

import Lookingfor from "../components/Lookingfor";
import Products from "../components/Products";
import Slider from "../components/Slider";
import React from "react";
import MainLayout from "../layouts/MainLayout";
import Contact from "../components/Contact";
import Drugdesc from "../components/Drugdesc";
import Drugdesc2 from "../components/Drugdesc2";

const HomePage = () => {
  return (
    <MainLayout>
      <Slider />
      <Drugdesc2 />
      <Products />
      <Campaigns />
      <Drugdesc />
      <Contact />
    </MainLayout>
  );
};

export default HomePage;
