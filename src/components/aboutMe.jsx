// src/components/AboutMe.jsx
import React, { useContext, useEffect, useRef } from 'react';
import { AnimationContext } from "../App"; // Mengimpor konteks animasi dari App.js
import { HashLink } from 'react-router-hash-link'; // Library untuk navigasi dengan hash link

// Komponen utama AboutMe
const AboutMe = () => {
  // Mendapatkan fungsi dan state dari konteks animasi
  const { visibleSections, observeSections } = useContext(AnimationContext);

  // Referensi untuk mengamati elemen "about"
  const aboutRef = useRef(null);

  // Mengaktifkan pengamatan elemen saat komponen dimuat
  useEffect(() => {
    observeSections([aboutRef], [0.1]); // Mengamati elemen dengan threshold 20%
  }, [observeSections]);

  return (
    <div
      id="about" 
      ref={aboutRef} 
      className={`xl:w-[96%] lg:w-[98%] md:w-[98%] w-full h-[98%] md:mx-auto grid pb-12 md:rounded-3xl z-40 transition-all duration-300 ${
        visibleSections["about"] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } bg-cover lg:bg-center sm:bg-top`} // Responsif posisi latar
      style={{
        position: 'relative',
        backgroundImage: "url('aboutme.png')", // Latar belakang gambar
        backgroundPositionX: '61%', // Mengatur posisi horizontal latar belakang
      }}
    >

      {/* Header Tentang Saya */}
      <div
        className="flex justify-center items-center xl:w-[22%] lg:w-[25%] md:w-[29%] sm:w-[40%] w-[42%] xl:h-14 lg:h-12 md:h-11 sm:h-12 h-20 lg:py-1 text-center font-bold text-3xl text-white rounded-3xl relative mx-auto mt-3"
        style={{ backgroundImage: "url('/tekstur abu.jpeg')" }} // Latar belakang tekstur
      >
        Tentang Saya
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
                Saat ini Saya sedang menempuh pendidikan di Politeknik Elektronika Negeri Surabaya, mengambil program studi D4 Teknik Informatika di bawah naungan Departemen Teknik Informatika dan Komputer. Saya sendiri merupakan lulusan SMAN 1 Gedangan dengan sejumlah prestasi yang berhasil diraih selama masa sekolah.
              </h2>
            </div>

            {/* Tombol untuk melihat CV */}
            <div class="relative z-10 mt-10 hidden lg:block">
              <a
                href="https://www.canva.com/design/DAGcDuXrLuA/OCfppTRVaHwFLhjgeNec-w/edit?utm_content=DAGcDuXrLuA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                target="_blank" // Membuka tautan di tab baru
                rel="noopener noreferrer" // Meningkatkan keamanan tautan
                class="w-[45%] h-12 bg-white/0 backdrop-blur-sm text-white font-semibold rounded-3xl hover:bg-white/20 border-2 border-white transition-all duration-500 flex items-center justify-center"
              >
                CV dokumen
              </a>
            </div>
          </div>
        </div>

        {/* Tombol CV untuk layar kecil */}
        <div class="lg:col-span-4">
          <a
            href="https://www.canva.com/design/DAGcDuXrLuA/OCfppTRVaHwFLhjgeNec-w/edit?utm_content=DAGcDuXrLuA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            target="_blank"
            rel="noopener noreferrer"
            class="lg:hidden sm:w-[20%] w-[50%] h-12 mb-8 bg-black/30 backdrop-blur-sm text-white font-semibold rounded-3xl hover:bg-black/45 border-2 border-white transition-all duration-500 flex items-center justify-center"
          >
            CV dokumen
          </a>
        </div>

        {/* Bagian Pencapaian */}
        <div class="col-span-1 lg:col-span-3 flex lg:grid gap-5">
          {/* Pencapaian Akademik */}
          <div class="rounded-3xl relative overflow-hidden group w-full">
            <div
              class="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/NLC.png')" }}
            ></div>
            <div class="grid relative bg-black/20 h-full backdrop-blur-sm px-5 py-3 items-center justify-center z-40">
              <h3
                class="text-lg text-center text-neutral-700 font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:text-white group-hover:top-0 group-hover:left-0 group-hover:transform-none group-hover:translate-x-0 group-hover:translate-y-0 group-hover:px-5 group-hover:py-3 transition-all duration-500"
              >
                Akademik
              </h3>
              <h5 class="text-sm text-white lg:mt-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pt-5">
                Beberapa sertifikat akademik yang saya raih semasa SMA
              </h5>
              <HashLink 
                to="/about-me#academicAchiev"
                class="flex justify-center items-center text-center sm:w-1/2 w-full sm:h-10 lg:mt-0 mt-7 py-1 bg-white/0 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-3xl opacity-0 hover group-hover:opacity-100 hover:bg-white/20 transition-all duration-500"
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

          {/* Pencapaian Non-Akademik */}
          <div class="rounded-3xl relative overflow-hidden group w-full">
            <div
              class="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/inc2.jpg')" }}
            ></div>
            <div class="grid relative bg-black/20 h-full backdrop-blur-sm px-5 py-3 items-center justify-center z-40">
              <h3
                class="text-lg text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:top-0 group-hover:left-0 group-hover:transform-none group-hover:translate-x-0 group-hover:translate-y-0 group-hover:px-5 group-hover:py-3 mb-0 group-hover:mb-5 transition-all duration-500"
              >
                Non-Akademik
              </h3>
              <h5 class="text-sm text-white lg:mt-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pt-5">
                Beberapa sertifikat non-akademik yang saya raih semasa SMA
              </h5>
              <HashLink 
                to="/about-me#nonAcademicAchiev"
                class="flex justify-center items-center text-center sm:w-1/2 w-full sm:h-10 lg:mt-0 mt-7 py-1 bg-white/0 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-3xl opacity-0 hover group-hover:opacity-100 hover:bg-white/20 transition-all duration-500"
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

export default AboutMe; // Menjadikan komponen tersedia untuk diimpor di file lain
