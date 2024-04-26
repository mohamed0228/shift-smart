import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// import CarListings from "../components/CarListings";
const Home = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h1>Welcome to our Used Car Dealership!</h1>
        {/* <CarListings /> */}
      </div>
      {/* Additional sections or components for the home page */}
      <Footer />
    </div>
  );
};
export default Home;
