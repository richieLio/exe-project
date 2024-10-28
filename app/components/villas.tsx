import React, { useState } from 'react';
import RoomTypes from './room-types';

const Villas = () => {
  const [selectedVilla, setSelectedVilla] = useState(1);

  return (
    <div className="flex flex-col items-center gap-8 p-8 bg-gradient-to-b from-white to-gray-50">
      <div className="flex gap-8 w-full max-w-6xl">
        <div
          onClick={() => setSelectedVilla(1)}
          className={`flex flex-col p-6 rounded-2xl cursor-pointer transition-all hover:shadow-xl w-1/2 ${
            selectedVilla === 1
              ? 'bg-blue-100 border-2 border-blue-600'
              : 'bg-white hover:bg-gray-50'
          }`}
        >
          <img 
            src="/images/miha1/deluxe.jpg" 
            alt="Villa 1" 
            className="w-full h-64 object-cover rounded-lg mb-4 shadow-md"
          />
          <h3 className="text-2xl font-semibold mb-3 text-blue-700">Villa 1</h3>        
          <p className="text-gray-600 leading-relaxed">Sang trọng và hiện đại với không gian rộng rãi, view biển tuyệt đẹp. Phù hợp cho gia đình và nhóm bạn.</p>
          <div className="flex gap-3 mt-4">
            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">4 Phòng ngủ</span>
            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">View biển</span>
          </div>
        </div>
        <div
          onClick={() => setSelectedVilla(2)}
          className={`flex flex-col p-6 rounded-2xl cursor-pointer transition-all hover:shadow-xl w-1/2 ${
            selectedVilla === 2
              ? 'bg-blue-100 border-2 border-blue-600'
              : 'bg-white hover:bg-gray-50'
          }`}
        >
          <img 
            src="/images/miha2/fullvillas.jpg" 
            alt="Villa 2" 
            className="w-full h-64 object-cover rounded-lg mb-4 shadow-md"
          />
          <h3 className="text-2xl font-semibold mb-3 text-blue-700">Villa 2</h3>        
          <p className="text-gray-600 leading-relaxed">Thiết kế độc đáo với khu vườn riêng, hồ bơi private. Không gian yên tĩnh, riêng tư tuyệt đối.</p>
          <div className="flex gap-3 mt-4">
            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Hồ bơi riêng</span>
            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Vườn riêng</span>
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl">
        <RoomTypes villaId={selectedVilla.toString()} />
      </div>
    </div>
  );
  }
export default Villas;