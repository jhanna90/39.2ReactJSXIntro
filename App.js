import React from 'react';
import logo from './logo.svg';
import Tweet from './Tweet';
import './App.css';

const App = () => {
  return (
    <>
      <Tweet username="@theRealSlimShady" name="Marshall Mathers" date="2023-01-01" message="This is my first tweet!" />
      <Tweet username="@V" name="Kim Taeyung" date="2023-01-02" message="Tweet Tweeet, I'm a bird" />
      <Tweet username="@SeugminInTheBuilding" name="User Three" date="2023-01-03" message="Hello Twitter!" />
    </>
  );
};

export default App;
