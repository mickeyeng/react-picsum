import React, { createContext, Provider, useState, useEffect } from 'react';

const Context = createContext();

const PHOTOS_URL = `https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json`;

const ContextProvider = ({ children }) => {
  const [allPhotos, setAllPhotos] = useState([]);

  useEffect(() => {
    fetch(PHOTOS_URL)
      .then((response) => response.json())
      .then((data) => setAllPhotos(data));
  }, []);

  return <Context.Provider value={allPhotos}>{children}</Context.Provider>;
};

export { ContextProvider, Context };
