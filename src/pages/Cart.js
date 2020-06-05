import React, { useContext, useState } from 'react';
import { Context } from '../context/context';
import styled from 'styled-components';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cartItems, removeItemFromCart, emptyCart } = useContext(Context);
  const [orderBtnText, setOrderBtnText] = useState('Place Order');

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

  const orderItems = () => {
    if (cartItems.length > 0) {
      setTimeout(() => {
        console.log('order placed!');
        setOrderBtnText('Ordering...');
        emptyCart();
      }, 3000);
    }
  };

  const orderDisabled =
    cartItems.length <= 0 ? (
      <button disabled onClick={orderItems}>
        {orderBtnText}
      </button>
    ) : (
      <button onClick={orderItems}>{orderBtnText}</button>
    );

  return (
    <StyledCartWrapper>
      <h1>Shopping Cart</h1>
      {cartItems.length <= 0 && (
        <p>shopping Cart Empty. Please add items to checkout 👍</p>
      )}
      {items}
      <h2>Total cost: {totalCostDisplay}</h2>
      {orderDisabled}
    </StyledCartWrapper>
  );
};

const StyledCartWrapper = styled.div`
  h1 {
    font-size: 3.2rem;
    text-align: center;
  }

  p {
    text-align: center;
    font-size: 1.4rem;
  }

  h2 {
    font-size: 2.2rem;
    font-weight: normal;
  }

  button {
    width: 15%;
    padding: 1rem;
    border: 3px solid black;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: bold;
    transition: opacity ease;
    outline: none;
    cursor: pointer;
    margin-top: 2rem;

    &:hover {
      background: black;
      color: white;
    }

    &:disabled {
      cursor: not-allowed;
    }
  }
`;

export default Cart;
