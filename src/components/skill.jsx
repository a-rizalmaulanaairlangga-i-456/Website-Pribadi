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
      className={`xl:w-[96%] lg:w-[98%] md:w-[98%] w-full h-[98%] md:mx-auto grid pb-12 md:rounded-3xl z-40 transition-all duration-300 ${
        visibleSections["skill"] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } bg-cover lg:bg-center sm:bg-top`} // Responsif posisi latar
      style={{
        position: 'relative',
        backgroundImage: "url('Utama-Skill.jpg')", // Latar belakang gambar
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

      {/* Header Keahlian Saya */}
      <div
        className="flex justify-center items-center xl:w-[22%] lg:w-[25%] md:w-[29%] sm:w-[40%] w-[50%] xl:h-14 lg:h-12 md:h-11 sm:h-12 h-24 lg:py-1 text-center font-bold text-3xl text-white rounded-3xl relative mx-auto mt-3"
        style={{ backgroundImage: "url('/tekstur abu.jpeg')" }} // Latar belakang tekstur
      >
        Keahlian Saya
      </div>

      {/* Konten utama */}
      <div class="grid grid-cols-1 lg:grid-cols-12 w-[96%] mx-auto mt-7 gap-5">
        {/* Bagian Deskripsi */}
        <div class="col-span-1 lg:col-span-5 backdrop-blur-sm mx-auto py-5 rounded-3xl relative overflow-hidden lg:row-span-1">
          {/* Lapisan latar gelap */}
          <div class="absolute inset-0 bg-black/30 opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <div class="relative w-[90%] mx-auto">
            <div class="relative z-10">
              <h2 class="text-2xl font-semibold text-white">
              Saya menguasai posisi sebagai front-end development, yang dibuktikan melalui berbagai proyek, contohnya website Portofolio yang anda lihat saat ini!! Selain itu, saya juga menguasai bahasa pemrograman C, yang menjadi dasar untuk memahami dan menerapkan logika pemrograman.
              </h2>
            </div>

            {/* Tombol untuk menuju ke halaman GitHub */}
            <div class="relative z-10 mt-10 hidden lg:block">
              <a
                href="https://github.com/rizalitpens"
                target="_blank" // Membuka tautan di tab baru
                rel="noopener noreferrer" // Meningkatkan keamanan tautan
                class="w-[45%] h-12 bg-white/0 backdrop-blur-sm text-white font-semibold rounded-3xl hover:bg-white/20 border-2 border-white transition-all duration-500 flex items-center justify-center"
              >
                Git Hub
              </a>
            </div>
          </div>
        </div>

        {/* Tombol menuju ke halaman GitHub untuk layar kecil */}
        <div class="lg:col-span-4">
          <a
            href="https://github.com/rizalitpens"
            target="_blank"
            rel="noopener noreferrer"
            class="lg:hidden sm:w-[20%] w-[50%] h-12 mb-8 bg-white/0 backdrop-blur-sm text-white font-semibold rounded-3xl hover:bg-white/20 border-2 border-white transition-all duration-500 flex items-center justify-center"
          >
            Git Hub
          </a>
        </div>

        {/* Bagian untuk menampilkan kemampuan */}
        <div class="col-span-1 lg:col-span-3 flex lg:grid gap-5">
          {/* Pemrograman Website */}
          <div class="rounded-3xl relative overflow-hidden group">
            <div
              class="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/e-commerceWeb.png')" }}
            ></div>
            <div class="grid relative bg-black/20 h-full backdrop-blur-sm px-5 py-3 items-center justify-center z-40">
              <h3
                class="text-lg text-center text-neutral-700 bg-white/35 rounded-full font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:text-white group-hover:top-0 group-hover:left-0 group-hover:transform-none group-hover:translate-x-0 group-hover:translate-y-0 group-hover:px-5 group-hover:py-3 transition-all duration-500"
              >
                Program Website
              </h3>
              <h5 class="text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pt-5">
                Beberapa projek website saya mulai dari HTML dasar hingga React.js
              </h5>
              <HashLink 
                to="/my-skill#projectWebSec"
                class="flex justify-center items-center text-center w-1/2 h-10 bg-white/0 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-3xl opacity-0 hover group-hover:opacity-100 hover:bg-white/20 transition-all duration-500"
              >
                Lebih banyak
              </HashLink>
            </div>
            <div
              class="absolute bottom-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))",
                height: '100%',
              }}
            ></div>
          </div>

          {/* Pemrograman Bahasa C */}
          <div class="rounded-3xl relative overflow-hidden group">
            <div
              class="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/30.png')" }}
            ></div>
            <div class="grid relative bg-black/20 h-full backdrop-blur-sm px-5 py-3 items-center justify-center z-40">
              <h3
                class="text-lg text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:top-0 group-hover:left-0 group-hover:transform-none group-hover:translate-x-0 group-hover:translate-y-0 group-hover:px-5 group-hover:py-3 mb-0 group-hover:mb-5 transition-all duration-500"
              >
                Logika Pemrograman
              </h3>
              <h5 class="text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pt-5">
                Beberapa Projek logika pemrograman saya dengan bahasa C
              </h5>
              <HashLink 
                to="/my-skill#projectLogicSec"
                class="flex justify-center items-center text-center w-1/2 h-10 bg-white/0 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-3xl opacity-0 hover group-hover:opacity-100 hover:bg-white/20 transition-all duration-500"
              >
                Lebih banyak
              </HashLink>
            </div>
            <div
              class="absolute bottom-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))",
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
