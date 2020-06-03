import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">PicSome</Link>
      <Link to="/cart">
        <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
      </Link>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 1.2rem;
  background: #95d5b2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 900;

  a {
    font-size: 1.4rem;
    text-decoration: none;
    color: white;
  }
`;

export default Header;
