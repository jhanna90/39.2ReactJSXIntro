// import logo from './logo.svg';
import React from 'react'
import FirstComponent from './FirstComp';
import NamedComponent from './NamedComp';
import './App.css';
const App = () => {
  return (
    <>
      <FirstComponent />
      <NamedComponent name="John" />
    </>
  );
};

export default App;
