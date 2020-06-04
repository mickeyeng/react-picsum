import React from 'react';
import styled from 'styled-components';

const CartItem = ({ url, id, remove }) => {
  return (
    <StyledCartCard>
      <span>Item: {id}</span>
      <hr />
      <div className="card-image-price">
        <img src={url} alt={url} />
        <h3>£5.99</h3>
      </div>
      <strong>
        <p>Item Description:</p>
      </strong>
      <div class="card-description">
        <p>
          Cupidatat Lorem nostrud ad laboris non laborum id excepteur.
          Reprehenderit cillum dolor anim Lorem elit sit proident duis irure qui
          cillum do exercitation elit. Duis duis aliquip ea officia voluptate.
        </p>
      </div>
      <div className="buttons">
        <button>Place Order</button>
        <i
          onClick={() => remove(id)}
          class="ri-delete-bin-line remove-icon"></i>
      </div>
    </StyledCartCard>
  );
};

const StyledCartCard = styled.div`
  border: 1px solid black;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);

  .card-image-price {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
  }

  .card-description {
    padding: 1rem 0;
  }

  p {
    font-size: 1rem;
  }

  span {
    font-size: 1.4rem;
  }

  h3 {
    font-size: 1.4rem;
  }

  img {
    width: 25%;
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
  }

  button&:hover {
      background: black:
      color: white;
      opacity: 0.8;

  }

  .buttons {
      display: flex;
      justify-content: space-between;
      align-items: center;
  }

  .remove-icon {
    font-size: 1.6rem;
  }

`;

export default CartItem;
