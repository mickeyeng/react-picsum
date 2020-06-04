import React, { useContext } from 'react';
import { Context } from '../context/context';
import styled from 'styled-components';

const Cart = () => {
  const { cartItems } = useContext(Context);

  const items = cartItems.map((item) => {
    return (
      <StyledCartCard>
        <img src={item.url} alt={item.url} />
      </StyledCartCard>
    );
  });

  return (
    <>
      <h1>Shopping Cart</h1>
      {items}
    </>
  );
};

const StyledCartCard = styled.div`
  border: 1px solid black;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;

  img {
    width: 25%;
  }
`;

const styledImage = styled.img``;

export default Cart;
