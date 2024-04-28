import React, { useState } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  /* overflow:scroll; */
  margin-bottom:100px;
  max-width:400px;
  max-height:400px;
  
`;


const CarImage = styled.img`
  width: 80%; /* Set the desired width */
  height: 60%; /* Maintain aspect ratio */
  border-radius: 8px;
  cursor: pointer;
  margin-left:10%;
`;

const CarDescription = styled.div`
  margin-top: 8px;
`;

const ImageNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

const ArrowButton = styled.button`
  background-color: #ccc;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
`;

const CarListingCard = ({ car }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % (car.images.length || 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? (car.images.length || 1) - 1 : prevIndex - 1
    );
  };

  const openFullScreen = () => {
    // Placeholder function for opening image in full screen
    console.log('Open image in full screen');
  };

  return (
    <CardContainer>
      {car.images && car.images.length > 0 && (
        <CarImage
          src={car.images[currentImageIndex]}
          alt={car.model}
          onClick={openFullScreen}
        />
      )}
      <CarDescription>
        <h2>{car.model}</h2>
        <p>{car.description}</p>
      </CarDescription>
      <ImageNavigation>
        <ArrowButton onClick={prevImage}>&lt;</ArrowButton>
        <ArrowButton onClick={nextImage}>&gt;</ArrowButton>
      </ImageNavigation>
    </CardContainer>
  );
};

export default CarListingCard;
