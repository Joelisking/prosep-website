/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface Props {
  image: string;
  name: string;
  role: string;
}

function TeamCard({ image, name, role }: Props) {
  return (
    <div className="flex flex-col">
      <div className="rounded-2xl overflow-hidden">
        <img
          src={image}
          alt={`Image of ${name}`}
          className="aspect-square object-cover w-full object-top"
        />
      </div>
      <div className="flex flex-col justify-center mt-3">
        <span className="font-bold text-lg md:text-xl">{name}</span>
        <span className="text-xs md:text-sm font-light">{role}</span>
      </div>
    </div>
  );
}

export default TeamCard;
