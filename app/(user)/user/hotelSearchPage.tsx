"use client";
import { useState } from 'react';
import SubscribeSection from './search'; // Adjust the path as needed
import { hotels } from './data'; // Adjust the path as needed
import { Card } from './card';

const HotelSearchPage = () => {
  const [filteredHotels, setFilteredHotels] = useState(hotels);

  // Handle search input and update filtered hotels
  const handleSearch = (searchTerm: string) => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    const results = hotels.filter(hotel =>
      hotel.location.city.toLowerCase().includes(lowercasedSearchTerm)
    );
    setFilteredHotels(results);
  };

  return (
    <div>
      <SubscribeSection />
      <Card hotels={filteredHotels} />
    </div>
  );
};

export default HotelSearchPage;
