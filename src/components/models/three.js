'use client'
import React from 'react';
import 'animate.css';


const data = [
    {
        title: 'Tutorials by industry experts',
    },
    {
        title: 'Peer & expert code review',
    },
    {
        title: 'Coding exercises',
    },
    {
        title: 'Access to our GitHub repos',
    },
    {
        title: 'Community forum',
    },
    {
        title: 'Flashcard decks',
    },
    {
        title: 'New videos every week',
    },
];

function Three() {
  return (
    <div className="w-[300px] h-60 bg-[#4abebd] p-8 rounded-b-xl md:rounded-b-none md:rounded-br-xl animate__animated animate__backInRight animate__delay-2s">
      <h2 className=" font-bold mb-1">Why Us</h2>
      <ol className=" space-y-1">
        {data.map((item, index) => (
          <li key={index} className="text-lightGray text-sm">
            {item.title}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Three;
