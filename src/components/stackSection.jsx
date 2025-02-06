import React, { useState, useContext, useEffect, useRef } from 'react';
import Card from './card'; // Mengimpor komponen Card
import { AnimationContext } from "../App"; // Mengimpor konteks animasi dari App.js

// Daftar alat yang digunakan dalam proyek
const tools = [
  {
    name: 'VSCode',
    image: 'vscode.png',
    description: 'VSCode adalah editor kode yang saya gunakan untuk membuat berbagai program, mulai dari pemrograman bahasa C hingga pemrograman website.',
  },
  {
    name: 'Framer',
    image: 'framer.png',
    description: 'Framer adalah alat untuk membuat prototipe website dengan desain interaktif. Namun saya menggunakannya untuk mendapatkan ide desain website yang saya inginkan.',
  },
  {
    name: 'Tailwind',
    image: 'tailwind.png',
    description: 'Tailwind adalah framework CSS yang saya gunakan untuk membuat desain website yang responsif dan mudah diatur.',
  },
  {
    name: 'Git-Hub',
    image: 'git-hub-putih.png',
    description: 'GitHub adalah platform untuk pengembangan perangkat lunak dan kolaborasi, serta menyimpan, mengelola, dan mengontrol kode program.',
  },
  {
    name: 'Vercel',
    image: 'vercel.png',
    description: 'Vercel adalah platform cloud untuk hosting dan deployment aplikasi web dan situs statis. Saya menggunakan Vercel untuk menghosting web berbasis React.js.',
  },
  {
    name: 'Flaticon',
    image: 'flaticon.png',
    description: 'Flaticon adalah situs web yang menyediakan koleksi ikon berkualitas tinggi dan vektor yang dapat digunakan dalam berbagai proyek desain.',
  },
  {
    name: 'Notion',
    image: 'notion.png',
    description: 'Notion adalah alat catatan yang memiliki banyak fitur, saya menggunakannya untuk mencatat code program dan kesalahan-kesalahan dalam penulisan code program saya.',
  },
  {
    name: 'Canva',
    image: 'canva.png',
    description: 'Canva adalah platform desain grafis online yang saya gunakan untuk membuat berbagai desain, mulai dari logo hingga poster, termasuk juga CV dokumen yang saya buat.',
  },
  {
    name: 'Google Drive',
    image: 'google-drive.png',
    description: 'Google Drive adalah layanan penyimpanan berbasis cloud yang disediakan oleh Google. Saya menggunakan Google Drive untuk menyimpan berbagai file dan dokumen backup.',
  },
  {
    name: 'ChatGPT',
    image: 'chatgpt.png',
    description: 'ChatGPT adalah alat Open AI yang membantu saya dalam menyusun code program, logika pemrograman, dan hal lain yang saya butuhkan.',
  },
];

const StackSection = () => {
  // Mengambil state dan fungsi dari AnimationContext untuk kontrol animasi
  const { visibleSections, observeSections } = useContext(AnimationContext);

  // Membuat refs untuk elemen-elemen yang diamati untuk animasi
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const instructionRef = useRef(null);
  const cardRefs = useRef(tools.map(() => React.createRef())); // Ref untuk setiap Card

  useEffect(() => {
    // Menggunakan observeSections untuk mengamati perubahan pada elemen-elemen yang ditargetkan
    observeSections([title1Ref, title2Ref, instructionRef, ...cardRefs.current], [0.1]); // Mengubah threshold
  }, [observeSections]);

  // State untuk menyimpan status flip setiap kartu
  const [flippedCards, setFlippedCards] = useState({});

  // Fungsi untuk menangani aksi flip pada kartu
  const handleFlip = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle status flip untuk kartu yang dipilih
    }));
  };

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
        {tools.map((tool, index) => (
          <div
            key={index}
            id={`card-${index}`}
            ref={cardRefs.current[index]} // Menghubungkan setiap kartu dengan ref terkait
            className={`w-64 h-80 relative cursor-pointer hover:scale-105 ${
              visibleSections[`card-${index}`]
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            onClick={() => handleFlip(index)} // Fungsi untuk flip kartu
            style={{
              transition: 'transform 500ms ease-out, opacity 300ms ease-out', // Durasi transisi
              perspective: '1000px', // Perspektif untuk efek 3D
            }}
          >
            {/* Kartu yang terbalik */}
            <div
              className={`relative w-full h-full transition-transform duration-1000 transform`}
              style={{
                transformStyle: 'preserve-3d', // Mempertahankan efek 3D
                transform: flippedCards[index] ? 'rotateY(180deg)' : 'rotateY(0deg)', // Rotasi berdasarkan status flip
              }}
            >
              {/* Bagian Depan Kartu */}
              <div
                className="absolute w-full h-full backdrop-blur-sm p-6 rounded-3xl"
                style={{
                  backfaceVisibility: 'hidden', // Menyembunyikan bagian belakang kartu
                }}
              >
                <div className="w-full h-full mx-auto my-auto bg-white bg-opacity-20 border border-white rounded-3xl shadow-md flex flex-col items-center justify-center">
                  <img src={tool.image} alt={tool.name} className="w-auto h-20" />
                  <h3 className="mt-4 text-lg font-bold">{tool.name}</h3>
                </div>
              </div>

              {/* Bagian Belakang Kartu */}
              <div
                className="absolute w-full h-full backdrop-blur-sm p-6 rounded-3xl"
                style={{
                  backfaceVisibility: 'hidden', // Menyembunyikan bagian depan saat terbalik
                  transform: 'rotateY(180deg)', // Rotasi bagian belakang kartu
                }}
              >
                <div className="w-full h-full mx-auto my-auto bg-white bg-opacity-80 rounded-3xl shadow-md flex items-center justify-center">
                  <p className="text-center text-base text-gray-800 px-4">{tool.description}</p>
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
