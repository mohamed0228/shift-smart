import React from 'react';
import styled from 'styled-components';
import Banner from '../Banner/Banner';
import Contact from './Contact-us/Contact';
import car14 from "../../Images/Cars/21.jpg";
import car15 from "../../Images/Cars/20.jpg";
import CarListingCard from '../Reuseble/CarListingCard';
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
const ContentWrapper = styled.div`
  padding: 20px;
`; 
const cars = [
    {
      model: "Tiguan vw",
      description: "A reliable sedan with great fuel efficiency.",
      images: [ car8,car9, car10, car11, car12, car13],
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
    
  ];
  
const images = [car14, car15];
const Content = ({ activeTab }) => {
  return (
    <ContentWrapper>
      {activeTab === 'home' && (
        <>
          <h2>Welcome to Our Website</h2>
          <p>This is the home page content.</p>
          <Banner images={images} />
        </>
      )}
      {activeTab === 'about' && (
        <>
          <h2>About Us</h2>
          <p>Learn more about our company here.</p>
        </>
      )}
      {activeTab === 'shop' && (
        <>
          <h2>Shop Cars</h2>
          <p>View our collection of cars for sale.</p>
          <div
        style={{
          width: "100%" /* Set the desired width */,
          height: "100%" /* Maintain aspect ratio */,
        }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-around",
          }}>
          {cars.map((car, index) => (
            <CarListingCard key={index} car={car} />
          ))}
        </div>
      </div>
        </>
      )}
      {activeTab === 'sellTrade' && (
        <>
          <h2>Sell/Trade</h2>
          <p>Information about selling or trading your car.</p>
        </>
      )}
       {activeTab === 'contact' && (
        <>
          <Contact/>
        </>
      )}
    </ContentWrapper>
  );
}

export default Content;
