import React, { useState, useContext, useEffect, useRef } from "react";
import { AnimationContext } from "../App";

// Data proyek logika yang akan ditampilkan di halaman
const LogicProjects = [
  {
    id: 1,
    title: "Gaji Pokok dengan Bonus dan Sertifikasi, Mencetak Angka dengan Format Tertentu, Pajak",
    image: "projectUTS.png",
    link: "https://github.com/Sem-1-Prak-KonsepPemrograman/Project-UTS",
  },
  {
    id: 2,
    title: "Menginput Nilai Mahasiswa dan Menampilkan Datanya",
    image: "mgg-14.png",
    link: "https://github.com/Sem-1-Prak-KonsepPemrograman/Project_Minggu-14",
  },
  {
    id: 3,
    title: "Menentukan Zodiak, Output Data Nilai, Mengubah bilangan jadi maksimum dan minimum",
    image: "UAS.png",
    link: "https://github.com/Sem-1-Prak-KonsepPemrograman/UAS",
  },
  {
    id: 4,
    title: "Struk Sederhana Pembelian Ayam, Mengecek Hari Esok, Hari Ulang Tahun dengan Struct",
    image: "29.png",
    link: "https://github.com/Sem-1-Prak-KonsepPemrograman/Praktikum_29",
  },
  {
    id: 5,
    title: "Struk Sederhana Pembelian Produk, Menghitung Nilai Akhir dan Grade Mahasiswa",
    image: "30.png",
    link: "https://github.com/Sem-1-Prak-KonsepPemrograman/Praktikum_30",
  },
  {
    id: 6,
    title: "Deret Fibonacci, Menjumlahkan Dua Matriks, Cari Bilangan Terbesar dari Deret Bilangan",
    image: "18.png",
    link: "https://github.com/Sem-1-Prak-KonsepPemrograman/Praktikum_18",
  },
  {
    id: 7,
    title: "Bilangan Ganjil Sebanyak n Kecuali Kelipatan 3, Pola Persegi dan Segitiga dari Angka",
    image: "11.png",
    link: "https://github.com/Sem-1-Prak-KonsepPemrograman/Praktikum_11",
  },
];

// Komponen utama untuk menampilkan bagian proyek logika
function ProjectLogicSection() {
  // Mendapatkan fungsi dan state dari context animasi
  const { visibleSections, observeSections } = useContext(AnimationContext);

  // Referensi untuk elemen-elemen di dalam proyek logika
  const moreLogicRef = useRef(null);
  const testLogicRef = useRef(null);
  const logicRefs = useRef(LogicProjects.map(() => React.createRef()));

  // Menambahkan observer untuk setiap elemen proyek yang akan dianimasikan
  useEffect(() => {
    observeSections([moreLogicRef, testLogicRef, ...logicRefs.current], [0.2]); // Mengubah threshold
  }, [observeSections]);

  return (
    <div className="w-[98%] mx-auto p-6 text-center">
      {/* Bagian untuk menampilkan proyek-proyek logika */}
      <div className="flex flex-wrap justify-center gap-6">
        {LogicProjects.map((logic) => (
          <a
            key={logic.id}
            href={logic.link}
            target="_blank"
            rel="noopener noreferrer"
            id={`logic-${logic.id}`} // ID unik untuk setiap proyek
            ref={logicRefs.current[logic.id - 1]} // Referensi untuk elemen proyek
            className={`shadow-md overflow-hidden relative group w-[45%] md:w-[30%] lg:w-[22%] grid items-center rounded-3xl transition-transform ${
              // Animasi berdasarkan visibilitas elemen
              visibleSections[`logic-${logic.id}`]
                ? "translate-y-0 opacity-100 duration-300 ease-in-out"
                : "translate-y-10 opacity-0 duration-300 ease-in"
            }`}
          >
            {/* Gambar proyek */}
            <div className="w-full overflow-hidden relative rounded-3xl h-[12rem] md:h-[9rem] lg:h-[7rem]">
              <img
                src={logic.image}
                alt={logic.title}
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Efek hover pada gambar */}
              <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-full p-4 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-sm text-gray-600 mt-1">Klik untuk lihat Code</p>
              </div>
            </div>
            {/* Judul proyek */}
            <h2 className="text-xl font-semibold mt-5">{logic.title}</h2>
          </a>
        ))}
      </div>

      {/* Tombol untuk menampilkan lebih banyak proyek */}
      <a
        href="https://github.com/orgs/Sem-1-Workshop-Desain-web/repositories"
        rel="noreferrer"
        target="_blank"
        id="moreLogic"
        ref={moreLogicRef}
        className={`px-6 py-2 mt-16 border-2 justify-center border-white rounded-3xl bg-black text-white text-center inline-block 
          transition-colors duration-700 ease-in-out hover:bg-white hover:text-black active:bg-gray-300 
          ${visibleSections["moreLogic"] ? "translate-y-0 opacity-100 transition-transform duration-500 ease-in-out" : "translate-y-10 opacity-0 transition-transform duration-300 ease-in"}`}
      >
        Lihat Lebih Banyak
      </a>

      {/* Tombol untuk mengarahkan ke halaman petunjuk cara menguji program */}
      <p className="mt-1 text-sm text-white text-center">
        <a
          href="https://penssby-my.sharepoint.com/:b:/g/personal/3124600033_msoffice_pens_ac_id/ERlJqfasJkVGtokM9_dtUukBUIopUtrooGgrJcN0smhBoA?e=7oWNZu"
          rel="noreferrer"
          target="_blank"
          id="testLogic"
          ref={testLogicRef}
          className={`relative inline-block text-white hover:after:scale-x-100 after:content-[''] after:block after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 transition-transform duration-300 ease-in-out ${
            visibleSections["testLogic"] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Cara Menguji Program?
        </a>
      </p>
    </div>
  );
}

export default ProjectLogicSection;
