"use client";
import '../../../globals.css';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { hotels } from '../../user/data'; // Adjust the path as needed
import { Hotel } from '../../user/types'; // Adjust the path as needed

export default () => {
  const { id } = useParams();
  const hotel: Hotel | undefined = hotels.find(h => h.id === parseInt(id as string, 10));

  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [selectedRoomType, setSelectedRoomType] = useState<string>(hotel?.room_types[0].type || '');

  if (!hotel) return <p className="p-6 text-red-500">Hotel not found</p>;

  // Find the selected room details
  const selectedRoom = hotel.room_types.find(room => room.type === selectedRoomType);

  // Calculate the total price based on room price and stay duration
  const calculateTotalPrice = () => {
    if (checkInDate && checkOutDate && selectedRoom) {
      const diffTime = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
      return selectedRoom.price * diffDays;
    }
    return 0;
  };

  return (
    <>
      <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-extrabold mb-6 text-gray-800">{hotel.name}</h1>
        <img className="w-full h-64 object-cover mb-6 rounded-lg" src={hotel.image_urls[0]} alt={hotel.name} />
        <div className="mb-6">
          <p className="text-lg text-gray-600 mb-2">
            <span className="font-semibold">Location:</span> {hotel.location.address}, {hotel.location.city}, {hotel.location.country}
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <span className="font-semibold">Price per night:</span> ${hotel.price_per_night}
          </p>
          <p className="text-lg text-gray-600 mb-4">
            <span className="font-semibold">Rating:</span> {hotel.rating} ({hotel.reviews_count} reviews)
          </p>
        </div>

        {/* Date Picker Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Book Your Stay</h2>
          <div className="flex space-x-4">
            <div className="w-full">
              <label className="block text-gray-700 mb-1">Check-in Date</label>
              <DatePicker
                selected={checkInDate}
                onChange={(date: Date | null) => setCheckInDate(date)}
                dateFormat="yyyy/MM/dd"
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholderText="Select check-in date"
              />
            </div>
            <div className="w-full">
              <label className="block text-gray-700 mb-1">Check-out Date</label>
              <DatePicker
                selected={checkOutDate}
                onChange={(date: Date | null) => setCheckOutDate(date)}
                dateFormat="yyyy/MM/dd"
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholderText="Select check-out date"
              />
            </div>
          </div>
          <div className="mt-4 text-lg font-semibold text-gray-800">
            <span>Total Bill: </span>
            <span className="font-bold">${calculateTotalPrice()}</span>
          </div>
        </div>

        {/* Room Type Selection */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Select Room Type</h2>
          <select
            value={selectedRoomType}
            onChange={(e) => setSelectedRoomType(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          >
            {hotel.room_types.map((room, index) => (
              <option key={index} value={room.type}>
                {room.type} - ${room.price} per night
              </option>
            ))}
          </select>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Amenities</h2>
          <ul className="list-disc list-inside pl-6 text-gray-600">
            {hotel.amenities.map((amenity, index) => (
              <li key={index} className="mb-1">{amenity}</li>
            ))}
          </ul>
        </div>

        {/* Reviews Section */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Reviews</h2>
          <div className="border-t pt-4">
            <p className="text-gray-600">No reviews yet. Be the first to review!</p>
            {/* Add a form to submit reviews if needed */}
          </div>
        </div>
      </div>
    </>
  );
};
