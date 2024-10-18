"use client"

import Link from 'next/link';
import React from 'react';
import { Hotel } from './types'; // Adjust the path as needed

interface CardProps {
  hotels: Hotel[];
}

export const Card = ({ hotels } : CardProps) => {
  return (
    <div className="flex flex-wrap justify-center">
      {hotels?.map((hotel, idx) => (
        <div key={idx} className="w-72 h-88 rounded-lg overflow-hidden shadow-md border-2 border-gray-300 bg-white mx-4 my-6">
          <img className="w-full h-32 object-cover" src={hotel.image_urls[0]} alt={hotel.name} />
          <div className="px-3 py-2">
            <div className="font-bold text-sm mb-1">{hotel.name}</div>
            <p className="text-gray-600 text-xs mb-2">{hotel.location.city}, {hotel.location.country}</p>
            <div className="flex items-center justify-between">
              <span className="text-gray-800 font-semibold text-sm">${hotel.price_per_night}</span>
              <Link href={`/hotels/${hotel.id}`} className="bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
