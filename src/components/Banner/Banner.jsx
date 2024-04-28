import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  width: 90%;
  height: 400px;
  overflow: hidden;
  position: relative;
  margin-left:50px;

`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  transition: opacity 0.5s ease-in-out;
`;

const Banner = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [images]);

  return (
    <BannerContainer>
      {images.map((image, index) => (
        <BannerImage
          key={index}
          src={image}
          alt={`Banner Image ${index + 1}`}
          style={{ opacity: index === currentImageIndex ? 1 : 0 }}
        />
      ))}
    </BannerContainer>
  );
};

export default Banner;

