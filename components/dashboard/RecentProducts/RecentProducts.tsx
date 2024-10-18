import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const recentProducts = [
  {
    id: 1,
    name: 'Ocean View Suite',
    status: true,
    availableRooms: 5,
    pricePerNight: '$300.00',
  },
  {
    id: 2,
    name: 'Mountain Cabin',
    status: true,
    availableRooms: 8,
    pricePerNight: '$150.00',
  },
  {
    id: 3,
    name: 'City Center Deluxe Room',
    status: false,
    availableRooms: 2,
    pricePerNight: '$200.00',
  },
  {
    id: 4,
    name: 'Standard Room',
    status: true,
    availableRooms: 12,
    pricePerNight: '$100.00',
  },
  {
    id: 5,
    name: 'Luxury Penthouse',
    status: false,
    availableRooms: 1,
    pricePerNight: '$500.00',
  },  
  // {
  //   id: 5,
  //   name: 'Yellow T-Shirt',
  //   status: false,
  //   qty: 10,
  //   price: '$15.20',
  // },
];

const RecentProducts = () => {
  return (
    <Table>
      <TableCaption>A list of your recently uploaded products.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Product name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Available Rooms</TableHead>
          <TableHead className="text-right">Price Per Night</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentProducts.map((product, idx) => (
          <TableRow key={idx}>
            <TableCell className="font-medium">{product.name}</TableCell>
            {/* <TableCell>{product.status ? 'Enabled' : 'Disabled'}</TableCell> */}
            <TableCell>
              <Badge variant={product.status ? 'outline' : 'default'}>
                {product.status ? 'Enabled' : 'Disabled'}
              </Badge>
            </TableCell>
            <TableCell>{product.availableRooms}</TableCell>
            <TableCell className="text-right">{product.pricePerNight}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RecentProducts;
