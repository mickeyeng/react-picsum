import React from 'react';
import Header from './components/Header';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Photos from './pages/Photos';
import Cart from './pages/Cart';
import styled from 'styled-components';

const App = () => {
  return (
    <div className="App">
      <Header />
      <StyledWrapper>
        {/* <h1>Home Page</h1> */}

        <Switch>
          <Route exact path="/">
            <Photos />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </StyledWrapper>
    </div>
  );
};

const StyledWrapper = styled.div`
  width: 80vw;
  margin: 5rem auto;
`;

export default App;
