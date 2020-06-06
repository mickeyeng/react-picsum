import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/context';
import styled from 'styled-components';

const Header = () => {
  const { cartItems } = useContext(Context);

  const cartIcon = () => {
    if (cartItems.length > 0) {
      return <i className="ri-shopping-cart-fill ri-fw ri-2x cart-full"></i>;
    }

    return <i className="ri-shopping-cart-line ri-fw ri-2x"></i>;
  };

  return (
    <StyledHeader>
      <ul className="header-main-links">
        <Link to="/">PicSome</Link>
        <Link to="/favourites">Favourites</Link>
      </ul>

      <ul className="header-cart">
        {cartItems.length > 0 && (
          <StyledCartItemCount>{cartItems.length}</StyledCartItemCount>
        )}
        <Link to="/cart">{cartIcon()}</Link>
      </ul>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 1.2rem;
  background: white;
  border-bottom: 0.1px solid grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 900;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);

  ul {
    display: flex;

    a {
      margin-right: 1rem;
    }
  }

  a {
    font-size: 1.4rem;
    text-decoration: none;
    color: black;
  }

  .cart-full {
    color: --var(blue);
  }
`;

const StyledCartItemCount = styled.div`
  background: black;
  color: white;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`;

export default Header;
