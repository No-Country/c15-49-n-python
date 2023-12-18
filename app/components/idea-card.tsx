import React from 'react';
import Image from 'next/image';

export default function IdeaCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="shadow-lg border-2 m-4 rounded-md w-64 h-64 relative">
      <div className="h-60 relative">
        <Image
          className="h-full w-auto"
          src={image}
          alt="Idea"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-x-0 bottom-0 p-2 text-white text-md font-medium">
        <h2 className="text-lg font-bold">{title}</h2>
        </div>
      </div>
    </div>
  );
}