import React, { useState, useContext, useEffect, useRef } from "react";
import { AnimationContext } from "../App";
import WebProjects from './projectWebSec.jsx';
import LogicProjects from './projectLogicSec.jsx';

/**
 * Komponen utama untuk menampilkan kartu proyek.
 * Mengelompokkan tampilan proyek berdasarkan kategori (web atau logika).
 * @param {Object} props - Properti yang diterima oleh komponen.
 * @param {string} props.section - Kategori proyek yang akan ditampilkan ("web" atau "logic").
 */
function CardProject({ section }) {
  // Mendapatkan fungsi dan data dari AnimationContext untuk efek animasi
  const { visibleSections, observeSections } = useContext(AnimationContext);

  // Referensi untuk mengamati elemen proyek web dan logika
  const webRef = useRef(null);
  const logicRef = useRef(null);

  // Menginisialisasi pengamatan untuk elemen proyek web dan logika
  useEffect(() => {
    observeSections([webRef, logicRef], [0.2]); // Threshold 0.2 untuk animasi
  }, [observeSections]);

  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Bagian untuk menampilkan proyek website */}
      {section === "web" && (
        <div
          id="web" // ID untuk identifikasi elemen
          ref={webRef} // Referensi untuk animasi
          className={`transition-transform duration-300 ease-in-out ${
            visibleSections["web"] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl text-center font-bold pt-20 mb-10">Projek Website</h2>
          <WebProjects />
        </div>
      )}

      {/* Bagian untuk menampilkan proyek logika pemrograman */}
      {section === "logic" && (
        <div
          id="logic" // ID untuk identifikasi elemen
          ref={logicRef} // Referensi untuk animasi
          className={`transition-transform duration-300 ease-in-out ${
            visibleSections["logic"] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl text-center font-bold pt-36 mb-10">
            Projek Logika Pemrograman (dengan Bahasa Pemrograman C)
          </h2>
          <LogicProjects />
        </div>
      )}
    </div>
  );
}

export default CardProject;
