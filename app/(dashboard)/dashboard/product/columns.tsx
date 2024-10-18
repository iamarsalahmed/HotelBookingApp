'use client';

import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, MoreHorizontal, Edit, Trash2 } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DataTableColumnHeader } from '@/components/common';

// This type is used to define the shape of our data.
export type HotelRoom = {
  id: string;
  thumbnail: string;
  name: string;
  type: string; // Room type (e.g., Suite, Standard, Deluxe)
  roomNumber: string;
  availableRooms: number; // The number of available rooms
  status: string; // Available or Unavailable
  description: string;
  pricePerNight: number ; // Price per night for the room
};

export const columns: ColumnDef<HotelRoom>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        className="ml-2"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'thumbnail',
    header: 'Thumbnail',
    cell: ({ row }) => {
      const thumbnail: string = row.getValue('thumbnail');

      return (
        <div className="flex items-center">
          <Image
            className="w-10 h-10 rounded-full object-cover"
            src={thumbnail}
            width={40}
            height={40}
            alt="Hotel room thumbnail"
          />
        </div>
      );
    },
  },
  {
    accessorKey: 'name',
    header: 'Hotel Name',
  },
  {
    accessorKey: 'type',
    header: 'Type',
  },
  {
    accessorKey: 'roomNumber',
    header: 'Room Number',
  },
  {
    accessorKey: 'availableRooms',
    header: 'Available Rooms',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status: string = row.getValue('status');
      return (
        <div
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            status === 'Available'
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {status}
        </div>
      );
    },
  },
  {
    accessorKey: 'description',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Short Description" />
    ),
  },
  {
    accessorKey: 'pricePerNight',
    header: ({ column }) => (
      <DataTableColumnHeader
        className="justify-end"
        column={column}
        title="Price Per Night"
      />
    ),
    cell: ({ row }) => {
      const price: number = row.getValue('pricePerNight');
    
      // Format currency
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(price);
    
      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const hotelRoom = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="cursor-pointer">
              <Edit className="mr-2 h-4 w-4" /> Edit
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => navigator.clipboard.writeText(hotelRoom.id)}
            >
              Copy Room ID
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
