// "use client";
// import React, { useState, useEffect } from "react";
// import "../../../globals.css";
// import { useParams } from "next/navigation";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { hotels } from "../../user/data";
// import { Hotel } from "../../user/types";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Swal from "sweetalert2";
// import dynamic from "next/dynamic";

// const DynamicMapContainer = dynamic(
//   () => import("react-leaflet").then((mod) => mod.MapContainer),
//   { ssr: false }
// );
// const DynamicTileLayer = dynamic(
//   () => import("react-leaflet").then((mod) => mod.TileLayer),
//   { ssr: false }
// );
// const DynamicMarker = dynamic(
//   () => import("react-leaflet").then((mod) => mod.Marker),
//   { ssr: false }
// );
// const DynamicPopup = dynamic(
//   () => import("react-leaflet").then((mod) => mod.Popup),
//   { ssr: false }
// );

// export default () => {
//   const { id } = useParams();
//   const hotel: Hotel | undefined = hotels.find(
//     (h) => h.id === parseInt(id as string, 10)
//   );
//   const [cart, setCart] = useState<any[]>([]);
//   const [checkInDate, setCheckInDate] = useState<Date | null>(null);
//   const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
//   const [selectedRoomType, setSelectedRoomType] = useState<string>(
//     hotel?.room_types[0]?.type || ""
//   );
//   const isValidDate = (date: any) => {
//     return date instanceof Date && !isNaN(date.getTime());
//   };
//   useEffect(() => {
//     // Initialize cart from localStorage when the component mounts
//     const storedCart = localStorage.getItem("cart");
//     if (storedCart) {
//       setCart(JSON.parse(storedCart));
//     }
//   }, []);

//   useEffect(() => {
//     // Update cart in localStorage whenever it changes
//     if (cart.length > 0) {
//       localStorage.setItem("cart", JSON.stringify(cart));
//     }
//   }, [cart]);

//   if (!hotel) return <p className="p-6 text-red-500">Hotel not found</p>;

//   const selectedRoom = hotel.room_types.find(
//     (room) => room.type === selectedRoomType
//   );

//   const calculateTotalPrice = () => {
//     if (checkInDate && checkOutDate && selectedRoom) {
//       const diffTime = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
//       const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//       return selectedRoom.price * diffDays;
//     }
//     return 0;
//   };

//   const addToCart = () => {
//     if (checkInDate && checkOutDate && selectedRoom) {
//       Swal.fire({
//         title: "Adding to Cart...",
//         text: "Please wait while we add your item to the cart.",
//         icon: "info",
//         showConfirmButton: false,
//         allowOutsideClick: false,
//         didOpen: () => {
//           Swal.showLoading();
//         },
//       });

//       setTimeout(() => {
//         const newItem = {
//           hotelId: hotel.id,
//           hotelName: hotel.name,
//           roomType: selectedRoomType,
//           checkInDate,
//           checkOutDate,
//           totalPrice: calculateTotalPrice(),
//         };

//         const updatedCart = [...cart, newItem];
//         setCart(updatedCart);

//         Swal.fire({
//           title: "Added to Cart!",
//           text: "Your item has been added to the cart successfully.",
//           icon: "success",
//           confirmButtonText: "OK",
//         });
//       }, 1500);
//     } else {
//       Swal.fire({
//         title: "Error!",
//         text: "Please select a room and dates before adding to the cart.",
//         icon: "error",
//         confirmButtonText: "OK",
//       });
//     }
//   };

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//   };

//   const latitude = hotel?.location.lat || 37.7749;
//   const longitude = hotel?.location.lng || -122.4194;

//   return (
//     <div className="p-6 max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
//       <h1 className="text-4xl font-extrabold mb-6 text-gray-800">
//         {hotel.name}
//       </h1>

//       {/* Carousel */}
//       <Slider {...settings} className="mb-6">
//         {hotel.image_urls.map((url, index) => (
//           <div key={index}>
//             <img
//               className="w-full h-64 object-cover rounded-lg shadow-lg"
//               src={url}
//               alt={`Hotel image ${index + 1}`}
//             />
//           </div>
//         ))}
//       </Slider>

//       {/* Location, Price, Rating */}
//       <div className="mb-6">
//         <p className="text-lg text-gray-600 mb-2">
//           <span className="font-semibold">Location:</span>{" "}
//           {hotel.location.address}, {hotel.location.city},{" "}
//           {hotel.location.country}
//         </p>
//         <p className="text-lg text-gray-600 mb-2">
//           <span className="font-semibold">Price per night:</span> $
//           {hotel.price_per_night}
//         </p>
//         <p className="text-lg text-gray-600 mb-4">
//           <span className="font-semibold">Rating:</span> {hotel.rating} (
//           {hotel.reviews_count} reviews)
//         </p>
//       </div>

//       {/* Date Picker */}
//       <div className="mb-6">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-2">
//           Book Your Stay
//         </h2>
//         <div className="flex space-x-4">
//           <div className="w-full">
//             <label className="block text-gray-700 mb-1">Check-in Date</label>
//             <DatePicker
//               selected={checkInDate}
//               onChange={(date: Date | null) => setCheckInDate(date)}
//               dateFormat="yyyy/MM/dd"
//               minDate={new Date()}
//               className="block w-full p-2 border border-gray-300 rounded-md"
//               placeholderText="Select check-in date"
//             />
//           </div>
//           <div className="w-full">
//             <label className="block text-gray-700 mb-1">Check-out Date</label>
//             <DatePicker
//               selected={checkOutDate}
//               onChange={(date: Date | null) => setCheckOutDate(date)}
//               dateFormat="yyyy/MM/dd"
//               minDate={checkInDate || new Date()}
//               className="block w-full p-2 border border-gray-300 rounded-md"
//               placeholderText="Select check-out date"
//             />
//           </div>
//         </div>
//         <div className="mt-4 text-lg font-semibold text-gray-800">
//           <span>Total Bill: </span>
//           <span className="font-bold">${calculateTotalPrice()}</span>
//         </div>
//       </div>

//       {/* Add to Cart Button */}
//       <div className="mt-6">
//         <button
//           onClick={addToCart}
//           className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
//         >
//           Add to Cart
//         </button>
//       </div>

//       {/* Cart Display */}
//       {cart.length > 0 && (
//         <div className="mt-8">
//           <h2 className="text-3xl font-semibold text-gray-800 mb-4">
//             Your Cart
//           </h2>
//           <div className="space-y-6">
//             {cart.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex items-start p-4 border rounded-md bg-gray-50 shadow-sm hover:shadow-lg transition-all duration-200"
//               >
//                 <div className="flex-1">
//                   <p className="font-semibold text-lg text-gray-800">
//                     {item.hotelName}
//                   </p>
//                   <p className="text-gray-600">
//                     Check-in:{" "}
//                     {isValidDate(item.checkInDate)
//                       ? item.checkInDate.toLocaleDateString()
//                       : "N/A"}
//                   </p>
//                   <p className="text-gray-600">
//                     Check-out:{" "}
//                     {isValidDate(item.checkOutDate)
//                       ? item.checkOutDate.toLocaleDateString()
//                       : "N/A"}
//                   </p>
//                   <div className="mt-2 text-lg font-semibold text-gray-800">
//                     <span>Total Price: </span>
//                     <span className="font-bold">${item.totalPrice}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Reviews */}
//       <div className="mt-8">
//         <h2 className="text-3xl font-semibold text-gray-800 mb-4">
//           Customer Reviews
//         </h2>

//         {/* Average Rating */}
//         <div className="flex items-center space-x-2 mb-6">
//           <span className="text-xl font-semibold text-gray-700">
//             Average Rating:
//           </span>
//           <div className="flex items-center">
//             {/* Render stars based on average rating */}
//             {Array.from({ length: 5 }).map((_, index) => (
//               <svg
//                 key={index}
//                 xmlns="http://www.w3.org/2000/svg"
//                 className={`w-5 h-5 ${
//                   hotel.rating > index ? "text-yellow-500" : "text-gray-300"
//                 }`}
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"
//                 />
//               </svg>
//             ))}
//           </div>
//           <span className="text-lg text-gray-600">
//             ({hotel.reviews_count} reviews)
//           </span>
//         </div>

//         {/* Review List */}
//         <div className="space-y-6">
//           {hotel.reviews.map((review, index) => (
//             <div
//               key={index}
//               className="flex items-start p-4 border rounded-md bg-gray-50 shadow-sm hover:shadow-lg transition-all duration-200"
//             >
//               {/* Reviewer Image */}
//               <img
//                 src={`https://i.pravatar.cc/150?img=${(index % 10) + 1}`} // Random profile image
//                 alt="Reviewer"
//                 className="w-12 h-12 rounded-full mr-4 object-cover"
//               />

//               <div className="flex-1">
//                 {/* Reviewer Name and Rating */}
//                 <div className="flex items-center justify-between">
//                   <p className="font-semibold text-lg text-gray-800">
//                     {review.name}
//                   </p>
//                   <div className="flex items-center">
//                     {/* Render stars based on review rating */}
//                     {Array.from({ length: 5 }).map((_, starIndex) => (
//                       <svg
//                         key={starIndex}
//                         xmlns="http://www.w3.org/2000/svg"
//                         className={`w-4 h-4 ${
//                           review.rating > starIndex
//                             ? "text-yellow-500"
//                             : "text-gray-300"
//                         }`}
//                         viewBox="0 0 24 24"
//                         fill="currentColor"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"
//                         />
//                       </svg>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Review Comment */}
//                 <p className="text-sm text-gray-600 mt-2">{review.comment}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Map */}
//       <div className="mt-8">
//         <h2 className="text-3xl font-semibold text-gray-800 mb-4">
//           Hotel Location
//         </h2>
//         <DynamicMapContainer
//           center={[latitude, longitude]}
//           zoom={12}
//           className="w-full h-[400px] md:h-[500px] rounded-lg shadow-lg"
//         >
//           <DynamicTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//           <DynamicMarker position={[latitude, longitude]}>
//             <DynamicPopup>{hotel.name}</DynamicPopup>
//           </DynamicMarker>
//         </DynamicMapContainer>
//       </div>
//     </div>
//   );
// };
"use client";
import React, { useState, useEffect } from "react";
import "../../../globals.css";
import { useParams } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { hotels } from "../../user/data";
import { Hotel } from "../../user/types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Swal from "sweetalert2";
import dynamic from "next/dynamic";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// const DynamicMapContainer = dynamic(
//   () => import("react-leaflet").then((mod) => mod.MapContainer),
//   { ssr: false }
// );
// const DynamicTileLayer = dynamic(
//   () => import("react-leaflet").then((mod) => mod.TileLayer),
//   { ssr: false }
// );
// const DynamicMarker = dynamic(
//   () => import("react-leaflet").then((mod) => mod.Marker),
//   { ssr: false }
// );
// const DynamicPopup = dynamic(
//   () => import("react-leaflet").then((mod) => mod.Popup),
//   { ssr: false }
// );

export default () => {
  const { id } = useParams();
  const hotel: Hotel | undefined = hotels.find(
    (h) => h.id === parseInt(id as string, 10)
  );
  const [cart, setCart] = useState<any[]>([]);
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [selectedRoomType, setSelectedRoomType] = useState<string>(
    hotel?.room_types[0]?.type || ""
  );
  const isValidDate = (date: any) => {
    return date instanceof Date && !isNaN(date.getTime());
  };
  useEffect(() => {
    // Initialize cart from localStorage when the component mounts
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    // Update cart in localStorage whenever it changes
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  if (!hotel) return <p className="p-6 text-red-500">Hotel not found</p>;

  const selectedRoom = hotel.room_types.find(
    (room) => room.type === selectedRoomType
  );

  const calculateTotalPrice = () => {
    if (checkInDate && checkOutDate && selectedRoom) {
      const diffTime = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return selectedRoom.price * diffDays;
    }
    return 0;
  };

  const addToCart = () => {
    if (checkInDate && checkOutDate && selectedRoom) {
      Swal.fire({
        title: "Adding to Cart...",
        text: "Please wait while we add your item to the cart.",
        icon: "info",
        showConfirmButton: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      setTimeout(() => {
        const newItem = {
          hotelId: hotel.id,
          hotelName: hotel.name,
          roomType: selectedRoomType,
          checkInDate,
          checkOutDate,
          totalPrice: calculateTotalPrice(),
        };

        const updatedCart = [...cart, newItem];
        setCart(updatedCart);

        Swal.fire({
          title: "Added to Cart!",
          text: "Your item has been added to the cart successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
      }, 1500);
    } else {
      Swal.fire({
        title: "Error!",
        text: "Please select a room and dates before adding to the cart.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const latitude = hotel?.location.lat || 37.7749;
  const longitude = hotel?.location.lng || -122.4194;
  const lat = parseFloat(latitude);
  const lng = parseFloat(longitude);

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-800">
        {hotel.name}
      </h1>

      {/* Carousel */}
      <Slider {...settings} className="mb-6">
        {hotel.image_urls.map((url, index) => (
          <div key={index}>
            <img
              className="w-full h-64 object-cover rounded-lg shadow-lg"
              src={url}
              alt={`Hotel image ${index + 1}`}
            />
          </div>
        ))}
      </Slider>

      {/* Location, Price, Rating */}
      <div className="mb-6">
        <p className="text-lg text-gray-600 mb-2">
          <span className="font-semibold">Location:</span>{" "}
          {hotel.location.address}, {hotel.location.city},{" "}
          {hotel.location.country}
        </p>
        <p className="text-lg text-gray-600 mb-2">
          <span className="font-semibold">Price per night:</span> $
          {hotel.price_per_night}
        </p>
        <p className="text-lg text-gray-600 mb-4">
          <span className="font-semibold">Rating:</span> {hotel.rating} (
          {hotel.reviews_count} reviews)
        </p>
      </div>

      {/* Date Picker */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Book Your Stay
        </h2>
        <div className="flex space-x-4">
          <div className="w-full">
            <label className="block text-gray-700 mb-1">Check-in Date</label>
            <DatePicker
              selected={checkInDate}
              onChange={(date: Date | null) => setCheckInDate(date)}
              dateFormat="yyyy/MM/dd"
              minDate={new Date()}
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
              minDate={checkInDate || new Date()}
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

      {/* Add to Cart Button */}
      <div className="mt-6">
        <button
          onClick={addToCart}
          className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
        >
          Add to Cart
        </button>
      </div>

      {/* Cart Display */}
      {cart.length > 0 && (
        <div className="mt-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Your Cart
          </h2>
          <div className="space-y-6">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex items-start p-4 border rounded-md bg-gray-50 shadow-sm hover:shadow-lg transition-all duration-200"
              >
                <div className="flex-1">
                  <p className="font-semibold text-lg text-gray-800">
                    {item.hotelName}
                  </p>
                  <p className="text-gray-600">
                    Check-in:{" "}
                    {isValidDate(item.checkInDate)
                      ? item.checkInDate.toLocaleDateString()
                      : "N/A"}
                  </p>
                  <p className="text-gray-600">
                    Check-out:{" "}
                    {isValidDate(item.checkOutDate)
                      ? item.checkOutDate.toLocaleDateString()
                      : "N/A"}
                  </p>
                  <div className="mt-2 text-lg font-semibold text-gray-800">
                    <span>Total Price: </span>
                    <span className="font-bold">${item.totalPrice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Reviews */}
      <div className="mt-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Customer Reviews
        </h2>

        {/* Average Rating */}
        <div className="flex items-center space-x-2 mb-6">
          <span className="text-xl font-semibold text-gray-700">
            Average Rating:
          </span>
          <div className="flex items-center">
            {/* Render stars based on average rating */}
            {Array.from({ length: 5 }).map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                className={`w-5 h-5 ${
                  hotel.rating > index ? "text-yellow-500" : "text-gray-300"
                }`}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"
                />
              </svg>
            ))}
          </div>
          <span className="text-lg text-gray-600">
            ({hotel.reviews_count} reviews)
          </span>
        </div>

        {/* Review List */}
        <div className="space-y-6">
          {hotel.reviews.map((review, index) => (
            <div
              key={index}
              className="flex items-start p-4 border rounded-md bg-gray-50 shadow-sm hover:shadow-lg transition-all duration-200"
            >
              {/* Reviewer Image */}
              <img
                src={`https://i.pravatar.cc/150?img=${(index % 10) + 1}`} // Random profile image
                alt="Reviewer"
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />

              <div className="flex-1">
                {/* Reviewer Name and Rating */}
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-lg text-gray-800">
                    {review.name}
                  </p>
                  <div className="flex items-center">
                    {/* Render stars based on review rating */}
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <svg
                        key={starIndex}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-4 h-4 ${
                          review.rating > starIndex
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"
                        />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Review Comment */}
                <p className="text-sm text-gray-600 mt-2">{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="mt-8">
  <h2 className="text-2xl font-semibold text-gray-800 mb-2">Location</h2>
  



  <MapContainer
  center={[lat, lng]}
  zoom={13}
  className="h-64 w-full rounded-md"
>
  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
  <Marker position={[lat, lng]}>
    <Popup>{hotel.name}</Popup>
  </Marker>
</MapContainer>
</div>

    </div>
  );
};
