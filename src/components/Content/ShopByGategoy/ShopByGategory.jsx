import React from 'react';
import styled from 'styled-components';

import car1 from "../../../Images/Cars2/1.png";
import car2 from "../../../Images/Cars2/2.png";
import car3 from "../../../Images/Cars2/3.png";
import car4 from "../../../Images/Cars2/4.png";
import car5 from "../../../Images/Cars2/55.png";
import car6 from "../../../Images/Cars2/6.png";
import car7 from "../../../Images/Cars2/2.png";
import car8 from "../../../Images/Cars2/3.png";

// Sample car images
// import car1 from './car1.jpg';
// import car2 from './car2.jpg';
// import car3 from './car3.jpg';
// import car4 from './car4.jpg';
// import car5 from './car5.jpg';
// import car6 from './car6.jpg';
// import car7 from './car7.jpg';
// import car8 from './car8.jpg';

// Sample car data
const cars = [
  { image: car1, type: 'SUV' },
  { image: car2, type: 'Sedan' },
  { image: car3, type: 'Hatchback' },
  { image: car4, type: 'Convertible' },
  { image: car5, type: 'Truck' },
  { image: car6, type: 'Sports Car' },
  { image: car7, type: 'Electric' },
  { image: car8, type: 'Luxury' },
];

// Styled components
const CarsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
  
`;

const CarItem = styled.div`
  flex: 1 0 calc(25% - 20px); /* 25% width with 20px margin */
  margin: 10px;
  text-align: center;
`;

const CarImage = styled.img`
  width: 70%;
  height: auto;
  cursor: pointer;
`;

const CarType = styled.p`
  margin-top: 5px;
  font-weight: bold;
  color:red;
`;

const ShopByGategory = () => {
  return (
    <CarsContainer>
      {cars.map((car, index) => (
        <CarItem key={index}>
          <CarImage src={car.image} alt={`Car ${index + 1}`} />
          <CarType>{car.type}</CarType>
        </CarItem>
      ))}
    </CarsContainer>
  );
};

export default ShopByGategory;