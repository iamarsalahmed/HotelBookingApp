export interface Location {
    city: string;
    country: string;
    address: string;
  }
  
  export interface RoomType {
    type: string;
    price: number;
    availability: boolean;
  }
  
  export interface Hotel {
    id: number;
    name: string;
    location: Location;
    price_per_night: number;
    currency: string;
    rating: number;
    reviews_count: number;
    amenities: string[];
    room_types: RoomType[];
    image_urls: string[];
  }
  