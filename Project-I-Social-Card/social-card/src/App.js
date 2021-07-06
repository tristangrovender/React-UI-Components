import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';

const App = () => {
  return (
    <div className = "entireApp">
      <HeaderContainer />
      <CardContainer />
    </div>
  );
};

export default App;
