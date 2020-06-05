import React, { useContext } from 'react';
import { Context } from '../context/context';
import Image from '../components/Image';
import styled from 'styled-components';

const Photos = () => {
  const { allPhotos } = useContext(Context);

  const newPhotos = allPhotos.map((img) => <Image key={img.id} img={img} />);
  const showPhotos =
    newPhotos.length <= 0 ? (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    ) : (
      newPhotos
    );

  return <StyledImagesContainer>{showPhotos}</StyledImagesContainer>;
};

const StyledImagesContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;
export default Photos;
