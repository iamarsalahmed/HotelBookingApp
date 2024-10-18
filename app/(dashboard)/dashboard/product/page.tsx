import { Metadata } from 'next';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ListPlus, GalleryThumbnails } from 'lucide-react';

import {HotelRoom, columns } from './columns';
import DataTable from './data-table';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard',
};

async function getData(): Promise<HotelRoom[]> {
  // Fetch data from your API here.
  return [
    {
      id: '1',
      thumbnail:
        'https://example.com/hotel1.jpg',
      name: 'Grand Hotel',
      type: 'Deluxe',
      roomNumber: '101',
      availableRooms: 10,
      status: 'Available',
      description: 'A luxurious hotel located downtown with deluxe rooms and amenities.',
      pricePerNight: 350.4,
    },
    {
      id: '2',
      thumbnail:
        'https://example.com/hotel2.jpg',
      name: 'City Lodge',
      type: 'Standard',
      roomNumber: '102',
      availableRooms: 5,
      status: 'Available',
      description: 'A budget-friendly hotel with standard rooms in the city center.',
      pricePerNight: 50.0,
    },
    {
      id: '3',
      thumbnail:
        'https://example.com/hotel3.jpg',
      name: 'Seaside Resort',
      type: 'Suite',
      roomNumber: '103',
      availableRooms: 15,
      status: 'Available',
      description: 'Spacious suites with ocean views, perfect for a relaxing stay.',
      pricePerNight: 120.0,
    },
    {
      id: '4',
      thumbnail:
        'https://example.com/hotel4.jpg',
      name: 'Mountain Retreat',
      type: 'Family',
      roomNumber: '104',
      availableRooms: 20,
      status: 'Available',
      description: 'Family-friendly hotel nestled in the mountains with outdoor activities.',
      pricePerNight: 200.1,
    },
    {
      id: '5',
      thumbnail:
        'https://example.com/hotel5.jpg',
      name: 'Luxury Inn',
      type: 'Executive',
      roomNumber: '105',
      availableRooms: 10,
      status: 'Unavailable',
      description: 'Executive rooms with premium facilities for business travelers.',
      pricePerNight: 350.4,
    },
    {
      id: '6',
      thumbnail:
        'https://example.com/hotel6.jpg',
      name: 'Budget Hotel',
      type: 'Standard',
      roomNumber: '106',
      availableRooms: 5,
      status: 'Available',
      description: 'A basic hotel with clean rooms at an affordable price.',
      pricePerNight: 50.0,
    },
    {
      id: '7',
      thumbnail:
        'https://example.com/hotel7.jpg',
      name: 'Urban Suites',
      type: 'Suite',
      roomNumber: '107',
      availableRooms: 15,
      status: 'Available',
      description: 'Modern suites located in the heart of the city with all conveniences.',
      pricePerNight: 120.0,
    },
    {
      id: '8',
      thumbnail:
        'https://example.com/hotel8.jpg',
      name: 'Lakeside Cabin',
      type: 'Cabin',
      roomNumber: '108',
      availableRooms: 20,
      status: 'Unavailable',
      description: 'Cozy lakeside cabins with beautiful views and outdoor fireplaces.',
      pricePerNight: 200.1,
    },
    {
      id: '9',
      thumbnail:
        'https://example.com/hotel9.jpg',
      name: 'Downtown Hotel',
      type: 'Executive',
      roomNumber: '109',
      availableRooms: 10,
      status: 'Unavailable',
      description: 'Executive rooms in the city with great access to business districts.',
      pricePerNight: 350.4,
    },
    {
      id: '10',
      thumbnail:
        'https://example.com/hotel10.jpg',
      name: 'City Lodge',
      type: 'Standard',
      roomNumber: '110',
      availableRooms: 5,
      status: 'Available',
      description: 'Standard rooms in the city with affordable pricing.',
      pricePerNight: 50.0,
    },
    {
      id: '11',
      thumbnail:
        'https://example.com/hotel11.jpg',
      name: 'Seaside Resort',
      type: 'Suite',
      roomNumber: '111',
      availableRooms: 15,
      status: 'Available',
      description: 'Comfortable suites with seaside views and luxury amenities.',
      pricePerNight: 120.0,
    },
    {
      id: '12',
      thumbnail:
        'https://example.com/hotel12.jpg',
      name: 'Mountain Lodge',
      type: 'Family',
      roomNumber: '112',
      availableRooms: 20,
      status: 'Unavailable',
      description: 'Family-friendly lodge with access to hiking and skiing.',
      pricePerNight: 200.1,
    },
    {
      id: '13',
      thumbnail:
        'https://example.com/hotel13.jpg',
      name: 'Luxury Inn',
      type: 'Executive',
      roomNumber: '113',
      availableRooms: 10,
      status: 'Available',
      description: 'High-end executive rooms for business and leisure stays.',
      pricePerNight: 350.4,
    },
    {
      id: '14',
      thumbnail:
        'https://example.com/hotel14.jpg',
      name: 'City Lodge',
      type: 'Standard',
      roomNumber: '114',
      availableRooms: 5,
      status: 'Unavailable',
      description: 'Budget-friendly standard rooms in a central location.',
      pricePerNight: 50.0,
    },
    {
      id: '15',
      thumbnail:
        'https://example.com/hotel15.jpg',
      name: 'Seaside Resort',
      type: 'Suite',
      roomNumber: '115',
      availableRooms: 15,
      status: 'Available',
      description: 'Spacious seaside suites with premium amenities.',
      pricePerNight: 120.0,
    },
    {
      id: '16',
      thumbnail:
        'https://example.com/hotel16.jpg',
      name: 'Mountain Retreat',
      type: 'Family',
      roomNumber: '116',
      availableRooms: 20,
      status: 'Available',
      description: 'Ideal for families, with mountain views and activities.',
      pricePerNight: 200.1,
    },
  ];
}

const Product = async () => {
  const data = await getData();

  return (
    <>


      <div className="flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Products</h2>
            <div className="flex items-center">
              <Button>
                <ListPlus className="mr-2 h-4 w-4" /> Add New Product
              </Button>
            </div>
          </div>
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </>
  );
};

export default Product;
