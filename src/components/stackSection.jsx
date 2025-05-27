import React, { useState, useContext, useEffect, useRef } from 'react';
import Card from './card'; // Mengimpor komponen Card
import { AnimationContext } from "../App"; // Mengimpor konteks animasi dari App.js

const StackSection = () => {
  // Hooks harus berada di awal komponen
  const { visibleSections, observeSections } = useContext(AnimationContext);

  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const instructionRef = useRef(null);
  const [cardRefs, setCardRefs] = useState([]);
  const [flippedCards, setFlippedCards] = useState({});
  const [tools, setTools] = useState([]);
  const [loadingTools, setLoadingTools] = useState(true);

  // Ambil data dari Notion
  useEffect(() => {
    async function fetchTools() {
      try {
        const response = await fetch('http://localhost:3001/api/dbTools');
        const json = await response.json();

        const sorted = json.sort((a, b) => {
          const numA = a.properties?.tool_id?.number || 0;
          const numB = b.properties?.tool_id?.number || 0;
          return numA - numB;
        });

        setTools(sorted);
      } catch (error) {
        console.error('Error fetching data from Notion:', error);
      } finally {
        setLoadingTools(false);
      }
    }
    fetchTools();
  }, []);

  useEffect(() => {
    if (tools.length > 0) {
      setCardRefs(tools.map(() => React.createRef()));
    }
  }, [tools]);

  useEffect(() => {
    if (cardRefs.length === tools.length && cardRefs.length > 0) {
      observeSections([title1Ref, title2Ref, instructionRef, ...cardRefs], [0.1]);
    }
  }, [cardRefs, observeSections, tools.length]);

  const handleFlip = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Setelah semua hook di-deklarasikan, baru boleh ada kondisi seperti ini:
  if (loadingTools) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }


  return (
    <section className="py-10">
      {/* Judul Bagian */}
      <h1
        id='title1'
        ref={title1Ref}
        className={`text-3xl font-bold text-center mb-6 transition-transform duration-300 ease-in-out ${
          visibleSections["title1"] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        Alat Saya
      </h1>

      {/* Deskripsi singkat tentang bagian */}
      <h3
        id='title2'
        ref={title2Ref}
        className={`text-xl font-medium text-center md:w-full w-2/3 mx-auto transition-transform duration-300 ease-in-out ${
          visibleSections["title2"] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        Mari lihat beberapa tools yang sering saya gunakan dalam membuat suatu projek
      </h3>

      {/* Instruksi untuk mengklik kartu */}
      <h6
        id='instruction'
        ref={instructionRef}
        className={`text-sm text-zinc-400 font-medium text-center mt-2 mb-12 italic transition-transform duration-300 ease-in-out ${
          visibleSections["instruction"] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        klik kartu untuk melihat selengkapnya
      </h6>

      {/* Kartu-kartu yang menampilkan alat */}
      <div className="flex flex-wrap justify-center gap-6">
        {tools.map((page, index) => (
          <div
            key={index}
            id={`card-${index}`}
            ref={cardRefs[index]}
            className={`w-64 h-80 relative cursor-pointer hover:scale-105 ${
              visibleSections[`card-${index}`]
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            onClick={() => handleFlip(index)}
            style={{
              transition: 'transform 300ms ease-out, opacity 300ms ease-out',
              perspective: '1000px',
            }}
          >
            <div
              className={`relative w-full h-full transition-transform duration-1000 transform`}
              style={{
                transformStyle: 'preserve-3d',
                transform: flippedCards[index] ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}
            >
              {/* Bagian Depan */}
              <div
                className="absolute w-full h-full backdrop-blur-sm p-6 rounded-3xl"
                style={{
                  backfaceVisibility: 'hidden',
                }}
              >
                <div className="w-full h-full mx-auto my-auto bg-white bg-opacity-20 border border-white rounded-3xl shadow-md flex flex-col items-center justify-center">
                  <img
                    src={page?.properties?.logo?.files?.[0]?.file?.url || ''}
                    alt={page?.properties?.Name?.title?.[0]?.plain_text || 'No Name'}
                    className="w-auto h-20"
                  />
                  <h3 className="mt-4 text-lg font-bold">
                    {page?.properties?.Name?.title?.[0]?.plain_text || 'Unnamed Tool'}
                  </h3>
                </div>
              </div>

              {/* Bagian Belakang */}
              <div
                className="absolute w-full h-full backdrop-blur-sm p-6 rounded-3xl"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
              >
                <div className="w-full h-full mx-auto my-auto bg-white bg-opacity-80 rounded-3xl shadow-md flex items-center justify-center">
                  <p className="text-center text-base text-gray-800 px-4">
                    {page?.properties?.short_desc?.rich_text?.[0]?.plain_text || 'Tidak ada deskripsi'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default StackSection; // Mengekspor komponen StackSection
