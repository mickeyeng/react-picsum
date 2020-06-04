import React, { useState, useContext } from 'react';
import { Context } from '../context/context';
import styled from 'styled-components';

const Image = ({ img }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { toggleFavorite } = useContext(Context);

  const heartIcon = isHovered && (
    <i
      onClick={() => toggleFavorite(img.id)}
      className="ri-heart-line favorite"></i>
  );
  const plusIcon = isHovered && <i className="ri-add-circle-line plus"></i>;

  return (
    <StyledImageWrapper
      className="favorite"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <StyledImage src={img.url} alt={img.url} />
      {heartIcon}
      {plusIcon}
    </StyledImageWrapper>
  );
};

const StyledImage = styled.img`
  width: 100%;
  height: 200px;
`;

const StyledImageWrapper = styled.div`
  position: relative;
  .favorite {
    position: absolute;
    font-size: 2rem;
    top: 10px;
    left: 10px;
    cursor: pointer;
  }

  .plus {
    position: absolute;
    font-size: 2rem;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
`;

export default Image;
