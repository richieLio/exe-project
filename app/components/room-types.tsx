import React from 'react';

interface RoomTypesProps {
  villaId: string;
}

const RoomTypes: React.FC<RoomTypesProps> = ({ villaId }) => {
  const roomTypes = [
    {
      villaId: 1,
      type: "Deluxe",
      size: "27.5m²",
      numberOfRooms: 3,
      capacity: "2 people",
      view: "Garden View",
      image: "/images/miha1/deluxe.jpg",
      rates: {
        weekday: "500,000 VND",
        weekend: "550,000 VND",
        holiday: "700,000 VND"
      }
    },
    {
      villaId: 1,
      type: "Deluxe Family 2 Bed",
      size: "56.7m²",
      numberOfRooms: 2,
      capacity: "4-6 people",
      view: "Balcony, City View",
      image: "/images/miha1/deluxe-family.jpg",
      rates: {
        weekday: "700,000 VND",
        weekend: "750,000 VND",
        holiday: "900,000 VND"
      }
    },
    {
      villaId: 1,
      type: "Standard",
      size: "20m²",
      numberOfRooms: 4,
      capacity: "2 people",
      view: "City View",
      image: "/images/miha1/standard.jpg",
      rates: {
        weekday: "300,000 VND",
        weekend: "350,000 VND",
        holiday: "500,000 VND"
      }
    },
    {
      villaId: 1,
      type: "Deluxe",
      size: "30m²",
      numberOfRooms: 5,
      capacity: "2 people",
      view: "Balcony, City View",
      image: "/images/miha1/deluxe-city.jpg",
      rates: {
        weekday: "400,000 VND",
        weekend: "450,000 VND",
        holiday: "600,000 VND"
      }
    },
    {
      villaId: 1,
      type: "Villa 1",
      size: "150m²",
      numberOfRooms: 5,
      capacity: "14-20 people",
      view: "Balcony, City View",
      image: "/images/miha1/deluxe-city.jpg",
      rates: {
        weekday: "3,000,000 VND (14 people)",
        weekend: "3,300,000 VND",
        holiday: "3,500,000 VND"
      }
    },
    {
      villaId: 2,
      type: "Villa 2",
      size: "150m²",
      numberOfRooms: 1,
      capacity: "14-20 people",
      view: "Rooftop, full villa view",
      image: "/images/miha2/fullvillas.jpg",
      rates: {
        weekday: "3,000,000 VND (14 people)",
        weekend: "3,300,000 VND",
        holiday: "3,500,000 VND"
      }
    }
  ];

  // Lọc ra các phòng có villaId khớp với villaId được truyền vào
  const filteredRoomTypes = roomTypes.filter(room => room.villaId.toString() === villaId);

  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-br from-gray-50 to-gray-100">
      <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 transform hover:scale-105 transition-transform duration-300">
        MIHA VILLA {villaId}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredRoomTypes.map((room, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm bg-opacity-90 border border-gray-100"
          >
            <div className="relative overflow-hidden rounded-xl mb-4">
              <img
                src={room.image}
                alt={room.type}
                className="w-full h-48 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-2xl font-semibold text-white">{room.type}</h3>
              </div>
            </div>
            <div className="space-y-3">
              <p className="flex items-center space-x-2 group">
                <span className="font-medium text-blue-600">Room Size & Number of Rooms:</span>
                <span className="text-gray-700 group-hover:text-blue-500 transition-colors duration-300">{room.numberOfRooms} & ({room.size}), for {room.capacity}</span>
              </p>
              <p className="flex items-center space-x-2 group">
                <span className="font-medium text-blue-600">View:</span>
                <span className="text-gray-700 group-hover:text-blue-500 transition-colors duration-300">{room.view}</span>
              </p>
              <div className="mt-6">
                <p className="font-medium text-blue-600 mb-3">Room Rate:</p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                    <span className="w-3 h-3 rounded-full bg-blue-400"></span>
                    <span className="text-gray-800">Monday-Friday: {room.rates.weekday}</span>
                  </li>
                  <li className="flex items-center space-x-2 p-2 rounded-lg hover:bg-purple-50 transition-colors duration-200">
                    <span className="w-3 h-3 rounded-full bg-purple-400"></span>
                    <span className="text-gray-800">Saturday & Sunday: {room.rates.weekend}</span>
                  </li>
                  <li className="flex items-center space-x-2 p-2 rounded-lg hover:bg-pink-50 transition-colors duration-200">
                    <span className="w-3 h-3 rounded-full bg-pink-400"></span>
                    <span className="text-gray-800">Holidays of the Year: {room.rates.holiday}</span>
                  </li>
                </ul>            
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomTypes;
