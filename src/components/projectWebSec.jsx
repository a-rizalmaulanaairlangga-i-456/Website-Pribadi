import React, { useState, useContext, useEffect, useRef } from "react";
import { AnimationContext } from "../App";

// Data proyek yang ditampilkan
const projects = [
    {
      id: 1,
      title: "Simple E Commerce Website", // Judul proyek
      description: "Project akhir semester membuat website E Commerce dengan fitur menambah produk ke dalam cart", // Deskripsi proyek
      image: "e-commerceWeb.png", // Gambar untuk proyek
      link: "https://rizalmaulanaairlangga-projekakhir-sem1.vercel.app/", // Link ke website
    },
    {
      id: 2,
      title: "Copy PENS Website", // Judul proyek
      description: "Project evaluasi 2 membuat salinan halaman depan dari website PENS", // Deskripsi proyek
      image: "copy-PENSWebsite.png", // Gambar untuk proyek
      link: "https://rizalitpens.github.io/Evaluasi2-WDW-Sem1/", // Link ke website
    },
    // Tambahkan lebih banyak data projek di sini
  ];

function ProjectWebSection() {
  // Menggunakan context untuk animasi bagian yang terlihat
  const { visibleSections, observeSections } = useContext(AnimationContext);

  // Menggunakan useRef untuk referensi elemen dalam proyek dan kontrol animasi
  const moreRef = useRef(null); // Referensi untuk tombol 'Lihat Lebih Banyak'
  const testRef = useRef(null); // Referensi untuk tombol 'Cara Menguji Program?'
  const webRefs = useRef(projects.map(() => React.createRef())); // Referensi untuk setiap proyek

  // Efek untuk memonitor bagian-bagian yang terlihat saat scroll
  useEffect(() => {
    // observeSections digunakan untuk memonitor bagian-bagian yang perlu dianimasikan
    observeSections([moreRef, testRef, ...webRefs.current], [0.2]); // Threshold 0.2 berarti animasi akan dimulai saat 20% elemen terlihat
  }, [observeSections]);

  return (
    <div className="text-center">
      {/* Grid untuk menampilkan proyek */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 pt-10 px-14 w-full">
        {/* Iterasi untuk setiap proyek dalam array 'projects' */}
        {projects.map((project) => (
          <a
            key={project.id} // Key untuk setiap elemen
            href={project.link} // Link ke website proyek
            target="_blank" // Membuka link di tab baru
            rel="noopener noreferrer" // Keamanan untuk link eksternal
            id={`web-${project.id}`} // ID unik untuk tiap proyek
            ref={webRefs.current[project.id - 1]} // Menambahkan referensi untuk animasi
            className={`group shadow-md hover:shadow-black overflow-hidden block cursor-pointer transition-all duration-300 rounded-3xl ${
              visibleSections[`web-${project.id}`]
                ? "translate-y-0 opacity-100 duration-300 ease-in-out" // Animasi jika bagian proyek terlihat
                : "translate-y-10 opacity-0 duration-300 ease-in" // Animasi jika bagian proyek tidak terlihat
            }`}
          >
            {/* Menampilkan gambar proyek */}
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={project.image} // Sumber gambar
                alt={project.title} // Deskripsi gambar
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500" // Efek hover pada gambar
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-full p-4 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {/* Deskripsi proyek yang muncul saat hover */}
                <p className="text-sm text-left text-gray-700 mt-1">{project.description}</p>
              </div>
            </div>
            <h2 className="text-3xl font-semibold mt-5">{project.title}</h2> {/* Judul proyek */}
          </a>
        ))}
      </div>

      {/* Tombol untuk melihat lebih banyak proyek */}
      <a
        href="https://github.com/orgs/Sem-1-Workshop-Desain-web/repositories"
        rel="noreferrer"
        target="_blank"
        id="more" // ID tombol
        ref={moreRef} // Menambahkan referensi untuk animasi
        className={`px-6 py-2 mt-16 border-2 justify-center border-white rounded-3xl bg-black text-white text-center inline-block 
          transition-colors duration-700 ease-in-out hover:bg-white hover:text-black active:bg-gray-300 
          ${visibleSections["more"] ? "translate-y-0 opacity-100 transition-transform duration-500 ease-in-out" : "translate-y-10 opacity-0 transition-transform duration-300 ease-in"}`}
      >
        Lihat Lebih Banyak
      </a>

      {/* Bagian untuk menunjukkan cara menguji program */}
      <p className="mt-1 text-sm text-white text-center">
        <a
          href="https://penssby-my.sharepoint.com/:b:/g/personal/3124600033_msoffice_pens_ac_id/EVLUGP0b-r1Jok5tdHjpPDYBsCoZPBgk2Y92P9GSkrmj3Q?e=8oNxnm"
          rel="noreferrer"
          target="_blank"
          id="test" // ID untuk tombol 'Cara Menguji Program?'
          ref={testRef} // Menambahkan referensi untuk animasi
          className={`relative inline-block text-white hover:after:scale-x-100 after:content-[''] after:block after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 transition-transform duration-300 ease-in-out ${
            visibleSections["test"] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Cara Menguji Program?
        </a>
      </p>
    </div>
  );
}  

export default ProjectWebSection;
