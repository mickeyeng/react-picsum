import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../context/context';
import styled from 'styled-components';

const Image = ({ img }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { toggleFavorite, addItemsToCart } = useContext(Context);

  // const heartIcon = isHovered && (
  //   <i
  //     onClick={() => toggleFavorite(img.id)}
  //     className="ri-heart-line favorite"></i>
  // );

  function heartIcon() {
    if (img.isFavorite) {
      return (
        <i
          className="ri-heart-fill favorite favorite-fill"
          onClick={() => toggleFavorite(img.id)}></i>
      );
    } else if (isHovered) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => toggleFavorite(img.id)}></i>
      );
    }
  }

  // const filledHeartIcon = <i className="ri-heart-fill favorite fill"></i>;
  const plusIcon = isHovered && (
    <i
      onClick={() => addItemsToCart(img)}
      className="ri-add-circle-line plus"></i>
  );

  return (
    <StyledImageWrapper
      className="favorite"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <StyledImage src={img.url} alt={img.url} />
      {heartIcon()}
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
    color: var(--red);
  }

  .favorite-fill {
    opacity: 0.7;
  }

  .plus {
    position: absolute;
    font-size: 2rem;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
`;

Image.propTypes = {
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
