import React, { useContext } from 'react';
import { Context } from '../context/context';
import FavouriteItem from '../components/FavouriteItem';
import styled from 'styled-components';

const Favourites = () => {
  const { favourites } = useContext(Context);
  const newFavourites = favourites.map((item) => (
    <FavouriteItem key={item.id} item={item} />
  ));

  return (
    <StyledFavouritesContainer>
      <h1>Favourites page</h1>
      {newFavourites}
    </StyledFavouritesContainer>
  );
};

const StyledFavouritesContainer = styled.div`s`;

export default Favourites;
