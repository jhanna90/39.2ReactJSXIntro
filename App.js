import logo from './logo.svg';
import './App.css';
import React from 'react';
import Person from './Person';

const App = () => {
  const personData = [
    { name: 'John Doe', age: 25, hobbies: ['Reading', 'Coding', 'Traveling'] },
    { name: 'Jane', age: 17, hobbies: ['Painting', 'Swimming'] },
    { name: 'Bob the Builder', age: 30, hobbies: ['Building', 'Fixing'] },
  ];

  return (
    <div>
      {personData.map((person, index) => (
        <Person key={index} name={person.name} age={person.age} hobbies={person.hobbies} />
      ))}
    </div>
  );
};
export default App;
