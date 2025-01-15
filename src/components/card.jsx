// Komponen React untuk kartu dengan animasi flip (Card)
import React, { useState } from 'react';

// Komponen utama Card
const Card = ({ tool }) => {
  // State untuk menentukan apakah kartu sedang terbalik atau tidak
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-64 h-80 relative cursor-pointer hover:scale-105 transition-transform duration-500 ease-out"
      onClick={() => setIsFlipped(!isFlipped)} // Mengubah state isFlipped saat kartu diklik
      style={{
        perspective: '1000px', // Perspektif untuk efek 3D saat kartu diputar
      }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-1000 transform`}
        style={{
          transformStyle: 'preserve-3d', // Pertahankan tampilan 3D saat transformasi
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)', // Rotasi kartu berdasarkan state isFlipped
        }}
      >
        {/* Bagian Depan Kartu */}
        <div
          className="absolute w-full h-full backdrop-blur-sm p-6 rounded-3xl"
          style={{
            backfaceVisibility: 'hidden', // Sembunyikan bagian ini saat bagian belakang terlihat
          }}
        >
          <div className="w-full h-full mx-auto my-auto bg-white bg-opacity-20 border border-white rounded-3xl shadow-md flex flex-col items-center justify-center">
            <img src={tool.image} alt={tool.name} className="w-auto h-20" /> {/* Gambar alat */}
            <h3 className="mt-4 text-lg font-bold">{tool.name}</h3> {/* Nama alat */}
          </div>
        </div>

        {/* Bagian Belakang Kartu */}
        <div
          className="absolute w-full h-full backdrop-blur-sm p-6 rounded-3xl"
          style={{
            backfaceVisibility: 'hidden', // Sembunyikan bagian ini saat bagian depan terlihat
            transform: 'rotateY(180deg)', // Rotasi bagian belakang 180 derajat
          }}
        >
          <div className="w-full h-full mx-auto my-auto bg-white bg-opacity-80 rounded-3xl shadow-md flex items-center justify-center">
            <p className="text-center text-base text-gray-800 px-4">
              {tool.description} {/* Deskripsi alat */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Ekspor komponen Card untuk digunakan di komponen lain
export default Card;
