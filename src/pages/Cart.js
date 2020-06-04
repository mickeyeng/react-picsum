import React, { useContext } from 'react';
import { Context } from '../context/context';
import styled from 'styled-components';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cartItems, removeItemFromCart } = useContext(Context);
  const totalCost = cartItems.length * 5.99;
  const totalCostDisplay = totalCost.toLocaleString('en-US', {
    style: 'currency',
    currency: 'GBP',
  });

  const items = cartItems.map((item) => (
    <CartItem
      key={item.id}
      remove={removeItemFromCart}
      id={item.id}
      url={item.url}
    />
  ));

  return (
    <StyledCartWrapper>
      <h1>Shopping Cart</h1>
      {items}
      <h2>Total cost: {totalCostDisplay}</h2>
    </StyledCartWrapper>
  );
};

const StyledCartWrapper = styled.div`
  h1 {
    font-size: 3.2rem;
    text-align: center;
  }

  h2 {
    font-size: 2.2rem;
    font-weight: normal;
  }
`;

const StyledCartCard = styled.div`
  border: 1px solid black;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;

  span {
    font-size: 1.4rem;
  }

  img {
    width: 25%;
  }
`;

export default Cart;
