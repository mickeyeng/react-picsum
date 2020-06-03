import React, { useContext } from 'react';
import { Context } from '../context/context';
import Image from '../components/Image';
import styled from 'styled-components';

const Photos = () => {
  const { allPhotos } = useContext(Context);

  console.log('all photos', allPhotos);

  const newPhotos = allPhotos.map((photo) => (
    <Image key={photo.id} img={photo} />
  ));
  return <StyledImagesContainer>{newPhotos}</StyledImagesContainer>;
};

const StyledImagesContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export default Photos;
