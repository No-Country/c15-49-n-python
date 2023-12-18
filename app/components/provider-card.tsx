import React from 'react';
import Image from 'next/image';

export default function ProviderCard({
  name,
  job,
  address,
  image,
}: {
  name: string;
  job: string;
  address: string;
  image: string;
}) {
  return (
    <div className="m-1 p-1 relative w-80 h-80 bg-white rounded-lg shadow-md p-4 transition duration-300 transform hover:scale-105">
      <div className="h-40 relative">
        <Image
          className="object-cover w-full h-full rounded-t-lg"
          src={image}
          alt="Proveedor"
          layout="fill"
        />
      </div>

      <div className="p-1 flex">
        <div className="p-2">
          <div className="flex mt-2 items-center m-1 p-1">
            <svg className="w-6 h-6 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>

            <svg className="w-6 h-6 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>

            <svg className="w-6 h-6 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>

            <svg className="w-6 h-6 text-gray-500 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>

            <svg className="w-6 h-6 text-gray-500 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>
          </div>

          <div className="font-medium text-lg">{name}</div>
          <div className="text-sm">{job}</div>
          <div className="text-sm">{address}</div>
        </div>

        <div className="flex justify-center mt-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
}