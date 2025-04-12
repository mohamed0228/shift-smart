// import React, { useState } from 'react';
// import styled from 'styled-components';

// const CardContainer = styled.div`
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   padding: 16px;
//   /* overflow:scroll; */
//   margin-bottom:100px;
//   max-width:300px;
//   max-height:300px;
//   background-color:black;
  
// `;


// const CarImage = styled.img`
//   width: 80%; /* Set the desired width */
//   height: 40%; /* Maintain aspect ratio */
//   border-radius: 8px;
//   cursor: pointer;
//   margin-left:10%;
// `;

// const CarDescription = styled.div`
//   margin-top: 8px;
// `;

// const ImageNavigation = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 8px;
// `;

// const ArrowButton = styled.button`
//   background-color: #ccc;
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   padding: 8px;
//   cursor: pointer;
// `;

// const CarListingCard = ({ car }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const nextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % (car.images.length || 1));
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? (car.images.length || 1) - 1 : prevIndex - 1
//     );
//   };

//   const openFullScreen = () => {
//     // Placeholder function for opening image in full screen
//     console.log('Open image in full screen');
//   };

//   return (
//     <CardContainer>
//       {car.images && car.images.length > 0 && (
//         <CarImage
//           src={car.images[currentImageIndex]}
//           alt={car.model}
//           onClick={openFullScreen}
//         />
//       )}
//       <CarDescription>
//         <h2>{car.model}</h2>
//         <p>{car.description}</p>
//       </CarDescription>
//       <ImageNavigation>
//         <ArrowButton onClick={prevImage}>&lt;</ArrowButton>
//         <ArrowButton onClick={nextImage}>&gt;</ArrowButton>
//       </ImageNavigation>
//     </CardContainer>
//   );
// };

// export default CarListingCard;

import React, { useState } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 20px;
  width: 300px;
  height: 460px; /* Fixed height for consistency */
  background-color: black;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const CarImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const DetailsContainer = styled.div`
  margin-top: 12px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CarTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: white;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const CarDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const DetailText = styled.p`
  font-size: 14px;
  color: #fff;
  line-height: 1.6;
`;

const Price = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #e63946;
`;

const ImageNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

const ArrowButton = styled.button`
  background-color: #444;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #888;
  }
`;

const OverlayContainer = styled.div`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 0; /* No padding for full-screen overlay */
`;

const OverlayContent = styled.div`
  background-color: #000;
  position: relative;
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #e63946;
  color: #fff;
  border: none;
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #d43f3f;
  }
`;

const FullScreenImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 8px;
  cursor: pointer;
`;

const CarListingCard = ({ car }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % (car.images.length || 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? (car.images.length || 1) - 1 : prevIndex - 1
    );
  };

  const openFullScreen = () => {
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <>
      <CardContainer onClick={openFullScreen}>
        {car.images && car.images.length > 0 && (
          <CarImage src={car.images[currentImageIndex]} alt={car.model} />
        )}
        <DetailsContainer>
          <CarTitle>{car.model}</CarTitle>
          <CarDetails>
            <DetailText><strong>Year:</strong> {car.year}</DetailText>
            <DetailText><strong>VIN:</strong> {car.vin}</DetailText>
            <DetailText><strong>Price:</strong> <Price>${car.price}</Price></DetailText>
          </CarDetails>
        </DetailsContainer>
        <ImageNavigation>
          <ArrowButton onClick={prevImage}>&lt;</ArrowButton>
          <ArrowButton onClick={nextImage}>&gt;</ArrowButton>
        </ImageNavigation>
      </CardContainer>

      {/* Full-screen Overlay */}
      <OverlayContainer show={showOverlay}>
        <OverlayContent>
          <CloseButton onClick={closeOverlay}>&times;</CloseButton>
          {car.images && car.images.length > 0 && (
            <FullScreenImage
              src={car.images[currentImageIndex]}
              alt={car.model}
              onClick={nextImage}
            />
          )}
        </OverlayContent>
      </OverlayContainer>
    </>
  );
};

export default CarListingCard;
