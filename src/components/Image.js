import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../context/context';
import styled from 'styled-components';

const Image = ({ img }) => {
  const [isHovered, setIsHovered] = useState(false);
  const {
    toggleFavorite,
    addItemsToCart,
    removeItemFromCart,
    cartItems,
  } = useContext(Context);

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

  const cartIcon = () => {
    const alreadyInCart = cartItems.some((item) => item.id === img.id);
    if (alreadyInCart) {
      return (
        <i
          onClick={() => removeItemFromCart(img.id)}
          className="ri-shopping-cart-fill cart"></i>
      );
    } else if (isHovered) {
      return (
        <i
          onClick={() => addItemsToCart(img)}
          className="ri-add-circle-line plus"></i>
      );
    }
  };

  return (
    <StyledImageWrapper
      className="favorite"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <StyledImage src={img.url} alt={img.url} />
      {heartIcon()}
      {cartIcon()}
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

  .cart {
    position: absolute;
    font-size: 2rem;
    top: 10px;
    right: 10px;
    cursor: pointer;
    color: var(--blue);
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
