import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";

import Navbar from "../../components/NavBar/Navbar";
import Content from "../../components/Content/Content";

const Home = () => {
  const [activeTab, setActiveTab] = useState("home");

  const changeContent = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <Navbar changeContent={changeContent} />
      <Content activeTab={activeTab} />

      <Footer />
    </div>
  );
};

export default Home;
