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
    observeSections([aboutRef], [0.2]); // Mengamati elemen dengan threshold 20%
  }, [observeSections]);

  return (
    <div
      id="about" // ID untuk navigasi
      ref={aboutRef} // Referensi elemen untuk pengamatan
      className={`w-[96%] h-[98%] mx-auto grid pb-10 rounded-3xl z-40 transition-all duration-300 ${
        visibleSections["about"] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`} // Animasi transisi berdasarkan visibilitas
      style={{
        position: 'relative',
        backgroundImage: "url('aboutme.png')", // Latar belakang gambar
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Header Tentang Saya */}
      <div
        className="flex justify-center items-center w-[22%] h-14 text-center font-bold text-3xl text-white rounded-3xl relative mx-auto mt-3"
        style={{ backgroundImage: "url('/tekstur abu.jpeg')" }} // Latar belakang tekstur
      >
        Tentang Saya
      </div>

      {/* Konten utama */}
      <div className="grid grid-cols-12 w-[96%] mx-auto mt-7">
        {/* Bagian Deskripsi */}
        <div className="grid col-span-5 pl-9 pr-7 mt-10 backdrop-blur-sm py-9 px-1 rounded-3xl">
          {/* Penjelasan singkat tentang saya */}
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Saat ini Saya sedang menempuh pendidikan di Politeknik Elektronika Negeri Surabaya, mengambil program studi D4 Teknik Informatika di bawah naungan Departemen Teknik Informatika dan Komputer. Saya sendiri merupakan lulusan SMAN 1 Gedangan dengan sejumlah prestasi yang berhasil diraih selama masa sekolah.
            </h2>
          </div>
          {/* Tombol untuk melihat CV */}
          <div className="mt-10">
            <a
              href="https://www.canva.com/design/DAGcDuXrLuA/OCfppTRVaHwFLhjgeNec-w/edit?utm_content=DAGcDuXrLuA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              target="_blank" // Membuka tautan di tab baru
              rel="noopener noreferrer" // Meningkatkan keamanan tautan
              className="w-[50%] h-12 bg-white/0 backdrop-blur-sm text-white font-semibold rounded-3xl hover:bg-white/20 border-2 border-white transition-all duration-500 flex items-center justify-center"
            >
              CV dokumen
            </a>
          </div>
        </div>

        <div className="col-span-4"></div> {/* Ruang kosong di tengah */}

        {/* Bagian Pencapaian */}
        <div className="col-span-3 grid gap-3">
          {/* Pencapaian Akademik */}
          <div className="rounded-3xl relative overflow-hidden group">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('NLC.png')" }}
            ></div>
            <div className="grid relative bg-black/30 h-full backdrop-blur-sm px-5 py-3 items-center justify-center z-40">
              <h3
                className="text-lg text-center text-neutral-700 font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:text-white group-hover:top-0 group-hover:left-0 group-hover:transform-none group-hover:translate-x-0 group-hover:translate-y-0 group-hover:px-5 group-hover:py-3 transition-all duration-500"
              >
                Akademik
              </h3>
              <h5 className="text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pt-5">
                Beberapa sertifikat akademik yang saya raih semasa SMA
              </h5>
              <HashLink 
                to="/about-me#academicAchiev" // Tautan ke bagian pencapaian akademik
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

          {/* Pencapaian Non-Akademik */}
          <div className="rounded-3xl relative overflow-hidden group">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('inc2.jpg')" }}
            ></div>
            <div className="grid relative bg-black/20 h-full backdrop-blur-sm px-5 py-3 items-center justify-center z-40">
              <h3
                className="text-lg text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:top-0 group-hover:left-0 group-hover:transform-none group-hover:translate-x-0 group-hover:translate-y-0 group-hover:px-5 group-hover:py-3 mb-0 group-hover:mb-5 transition-all duration-500"
              >
                Non-Akademik
              </h3>
              <h5 className="text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pt-5">
                Beberapa sertifikat non-akademik yang saya raih semasa SMA
              </h5>
              <HashLink 
                to="/about-me#nonAcademicAchiev" // Tautan ke bagian pencapaian non-akademik
                className="flex justify-center items-center text-center w-1/2 h-10 bg-white/0 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-3xl opacity-0 hover group-hover:opacity-100 hover:bg-white/20 transition-all duration-500"
              >
                Lebih banyak
              </HashLink>
            </div>
            <div
              className="absolute bottom-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
