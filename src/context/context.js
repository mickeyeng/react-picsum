import React, { createContext, useState, useEffect } from 'react';

const Context = createContext();
const PHOTOS_URL = `https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json`;

const ContextProvider = ({ children }) => {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    console.log('get item useEffect');
    const data = localStorage.getItem('cartItems');
    return data && setCartItems(JSON.parse(data));
  }, []);

  useEffect(() => {
    fetch(PHOTOS_URL)
      .then((response) => response.json())
      .then((data) => setAllPhotos(data));
  }, []);

  useEffect(() => {
    console.log('set item useEffect');
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const toggleFavorite = (id) => {
    console.log('clicked toggle favorite', id);
    const newPhotos = allPhotos.map((photo) => {
      if (photo.id === id) {
        console.log(id);
        console.log(!photo.isFavorite);
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });

    setAllPhotos(newPhotos);
  };

  const addItemsToCart = (newItem) => {
    setCartItems((prevCartItems) => [...prevCartItems, newItem]);
    console.log('added new item to the cart', cartItems.length);
  };

  const removeItemFromCart = (id) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== id)
    );
    console.log('new cart items after removed', cartItems.length);
  };

  const addItemsToFavourites = (newItem) => {
    console.log('clicked');
    console.log('new favourite item', newItem);
    setFavourites((prevFavouriteItems) => [...prevFavouriteItems, newItem]);
    console.log('added new item to favourites', favourites.length);
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavorite,
        addItemsToCart,
        cartItems,
        removeItemFromCart,
        emptyCart,
        favourites,
        addItemsToFavourites,
      }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
