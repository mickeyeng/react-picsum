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
  padding: 1rem;
  background: red;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
