import React from 'react';

const FavouriteItem = ({ item }) => {
  return (
    <div>
      <img src={item.url} alt={item.url} />
    </div>
  );
};

export default FavouriteItem;
