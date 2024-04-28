import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CarListingCard from "../../components/Reuseble/CarListingCard";
import car1 from "../../Images/Cars/1.jpg";
import car2 from "../../Images/Cars/2.jpg";
import car3 from "../../Images/Cars/3.jpg";
import car4 from "../../Images/Cars/4.jpg";
import car5 from "../../Images/Cars/5.jpg";
import car6 from "../../Images/Cars/6.jpg";
import car7 from "../../Images/Cars/7.jpg";
import car8 from "../../Images/Cars/a.jpg";
import car9 from "../../Images/Cars/b.jpg";
import car10 from "../../Images/Cars/c.jpg";
import car11 from "../../Images/Cars/d.jpg";
import car12 from "../../Images/Cars/e.jpg";
import car13 from "../../Images/Cars/f.jpg";

const cars = [
  {
    model: "Tiguan vw",
    description: "A reliable sedan with great fuel efficiency.",
    images: [car8, car9, car10, car11, car12, car13],
  },
  {
    model: "Volvo C70 T5",
    description: "A rare convertible car known for its reliability.",
    images: [car1, car2, car3, car4, car5, car6, car7],
  },
  {
    model: "Volvo C70 T5",
    description: "A rare convertible car known for its reliability.",
    images: [car1, car2, car3, car4, car5, car6, car7],
  },
  {
    model: "Volvo C70 T5",
    description: "A rare convertible car known for its reliability.",
    images: [car1, car2, car3, car4, car5, car6, car7],
  },
  // Add more cars here as needed
];

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h1>Welcome to our Used Car Dealership!</h1>
        {/* Remove the unnecessary CarListingCard component */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}>
          {cars.map((car, index) => (
            <CarListingCard key={index} car={car} />
          ))}
        </div>
      </div>
      {/* Additional sections or components for the home page */}
      <Footer />
    </div>
  );
};

export default Home;
