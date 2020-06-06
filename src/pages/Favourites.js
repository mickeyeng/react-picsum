import React, { useContext } from 'react';
import { Context } from '../context/context';
import FavouriteItem from '../components/FavouriteItem';
import styled from 'styled-components';

const Favourites = () => {
  const { favourites } = useContext(Context);
  const newFavourites = favourites.map((item) => (
    <FavouriteItem key={item.id} item={item} />
  ));

  return <StyledFavouritesContainer>{newFavourites}</StyledFavouritesContainer>;
};

const StyledFavouritesContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  img {
    width: 100%;
    height: 350px;
  }
`;

export default Favourites;
