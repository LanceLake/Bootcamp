import React from 'react';
import Card from './Card';

const feline = {
  catName: 'Fluffykins',
  description: 'A cat that acts like a dog',
  id: 1,
};

export default function Display() {
  return (
    <div>
		<Card name={feline.catName} description={feline.description} id={feline.id}/>
    </div>
  );
}

