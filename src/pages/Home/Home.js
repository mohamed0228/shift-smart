import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";

import Navbar from "../../components/NavBar/Navbar";
import MainBody from "../../components/Content/MainBody";

const Home = () => {
  const [activeTab, setActiveTab] = useState("home");

  const changeContent = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <Navbar changeContent={changeContent} />
      <MainBody activeTab={activeTab} />

      <Footer />
    </>
  );
};

export default Home;
