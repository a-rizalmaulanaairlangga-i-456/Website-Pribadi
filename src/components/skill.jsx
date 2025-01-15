// src/components/Skill.jsx
import React, { useContext, useEffect, useRef } from 'react';
import { AnimationContext } from "../App"; // Import context untuk animasi
import { HashLink } from 'react-router-hash-link'; // Import HashLink untuk navigasi internal


// Komponen Skill yang menampilkan keahlian pengguna
const Skill = () => {
  // Mendapatkan context animasi untuk memunculkan bagian web berdasarkan visibilitas
  const { visibleSections, observeSections } = useContext(AnimationContext);

  // Referensi untuk elemen skill untuk memantau visibilitasnya
  const skillRef = useRef(null);

  // Menjalankan animasi untuk memunculkan bagian skill saat bagian tersebut terlihat
  useEffect(() => {
    observeSections([skillRef], [0.2]); // Menentukan threshold untuk animasi
  }, [observeSections]);
  
  return (
    <div
      id="skill"
      ref={skillRef}
      className={`w-[96%] h-[98%] mx-auto grid pb-10 rounded-3xl z-40 transition-all duration-300 ${
        visibleSections["skill"] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{
        position: 'relative',
        backgroundImage: "url('Utama-Skill.jpg')", // Menambahkan gambar latar belakang
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Bagian Judul */}
      <div
        className="flex justify-center items-center w-[22%] h-14 text-center font-bold text-3xl text-white rounded-3xl relative mx-auto mt-3"
        style={{ backgroundImage: "url('/tekstur abu.jpeg')" }} // Latar belakang untuk judul
      >
        Keahlian Saya
      </div>

      {/* Grid untuk layout konten */}
      <div className="grid grid-cols-12 w-[96%] mx-auto mt-7 mb-5">
        
        {/* Deskripsi Keahlian */}
        <div className="grid col-span-5 pl-9 pr-7 mt-10 backdrop-blur-sm py-9 px-1 rounded-3xl">
          {/* Deskripsi tentang keahlian yang dimiliki */}
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Saya menguasai posisi sebagai front-end development, yang dibuktikan melalui berbagai proyek, contohnya website Portofolio yang anda lihat saat ini!! Selain itu, saya juga menguasai bahasa pemrograman C, yang menjadi dasar untuk memahami dan menerapkan logika pemrograman.
            </h2>
          </div>

          {/* Tombol untuk menuju ke halaman GitHub */}
          <div className="mt-7">
            <a
              href="https://github.com/rizalitpens"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[50%] h-12 bg-white/0 backdrop-blur-sm text-white font-semibold rounded-3xl hover:bg-white/20 border-2 border-white transition-all duration-500 flex items-center justify-center"
            >
              Git Hub
            </a>
          </div>
        </div>

        {/* Kolom kosong untuk spasi */}
        <div className="col-span-4"></div>

        {/* Bagian untuk menampilkan kemampuan */}
        <div className="col-span-3 grid gap-3">
          
          {/* Pemrograman Website */}
          <div className="rounded-3xl relative overflow-hidden group">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('e-commerceWeb.png')" }} // Latar belakang gambar untuk pemrograman website
            ></div>
            <div className="grid relative bg-black/20 h-full backdrop-blur-sm px-5 py-3 items-center justify-center z-40">
              {/* Judul untuk pemrograman website */}
              <h3
                className="text-lg text-center text-neutral-700 font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:text-white group-hover:top-0 group-hover:left-0 group-hover:transform-none group-hover:translate-x-0 group-hover:translate-y-0 group-hover:px-5 group-hover:py-3 transition-all duration-500"
              >
                web
              </h3>
              <h5 className="text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pt-5">
                Beberapa projek website saya mulai dari HTML dasar hingga React.js
              </h5>
              {/* Tombol navigasi ke bagian lebih banyak */}
              <HashLink 
                to="/my-skill#projectWebSec" 
                className="flex justify-center items-center text-center w-1/2 h-10 bg-white/0 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-3xl opacity-0 hover group-hover:opacity-100 hover:bg-white/20 transition-all duration-500"
              >
                Lebih banyak
              </HashLink>
            </div>
            <div
              className="absolute bottom-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4))",
                height: '100%',
              }}
            ></div>
          </div>

          {/* Pemrograman Bahasa C */}
          <div className="rounded-3xl relative overflow-hidden group">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('30.png')" }} // Latar belakang gambar untuk pemrograman C
            ></div>
            <div className="grid relative h-full backdrop-blur-sm px-5 py-3 items-center justify-center z-40">
              {/* Judul untuk pemrograman C */}
              <h3
                className="text-lg text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:top-0 group-hover:left-0 group-hover:transform-none group-hover:translate-x-0 group-hover:translate-y-0 group-hover:px-5 group-hover:py-3 mb-0 group-hover:mb-5 transition-all duration-500"
              >
                logika
              </h3>
              <h5 className="text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pt-5">
                Beberapa Projek logika pemrograman saya dengan bahasa C
              </h5>
              {/* Tombol navigasi ke bagian lebih banyak */}
              <HashLink 
                to="/my-skill#projectLogicSec" 
                className="flex justify-center items-center text-center w-1/2 h-10 bg-white/0 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-3xl opacity-0 hover group-hover:opacity-100 hover:bg-white/20 transition-all duration-500"
              >
                Lebih banyak
              </HashLink>
            </div>
            <div
              className="absolute bottom-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))",
                height: '100%',
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mengekspor komponen Skill
export default Skill;
