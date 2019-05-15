import React from 'react';

const dog = {
  name: 'Spot',
  age: 25,
  weight: '80 lbs'
};

export default function Dog() {
  return (
    <dl>
      <dt>Name</dt>
      <dd>{dog.name}</dd>

      <dt>Age</dt>
      <dd>{dog.age}</dd>

      <dt>Weight</dt>
      <dd>{dog.weight}</dd>
    </dl>
  );
}
