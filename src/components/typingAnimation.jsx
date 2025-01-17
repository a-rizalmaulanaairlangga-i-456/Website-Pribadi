import React, { useState, useEffect, useRef } from "react";

const TypingEffect = () => {
  const texts = ["Selamat Datang di Website Pribadi Saya", "Saya Rizal", "Saya Seorang Mahasiswa IT" ]; // Array teks
  const [displayedText, setDisplayedText] = useState(""); // Teks yang sedang ditampilkan
  const [currentIndex, setCurrentIndex] = useState(0); // Indeks teks saat ini
  const charIndex = useRef(0); // Referensi untuk indeks karakter saat ini
  const typingTimeoutRef = useRef(null); // Referensi untuk timeout mengetik
  const delayTimeoutRef = useRef(null); // Referensi untuk timeout jeda

  useEffect(() => {
    const typeText = () => {
      const currentText = texts[currentIndex]; // Teks saat ini
      if (charIndex.current <= currentText.length) {
        // Tambahkan karakter berikutnya atau selesaikan kata
        setDisplayedText(currentText.slice(0, charIndex.current)); // Ambil bagian teks hingga indeks saat ini
        charIndex.current += 1; // Pindah ke karakter berikutnya
        typingTimeoutRef.current = setTimeout(typeText, 100); // Lanjutkan mengetik setelah 100 ms
      } else {
        // Jika teks selesai diketik
        delayTimeoutRef.current = setTimeout(() => {
          setDisplayedText(""); // Hapus teks yang ditampilkan
          charIndex.current = 0; // Reset indeks karakter
          setCurrentIndex((prev) => (prev + 1) % texts.length); // Pindah ke teks berikutnya
        }, 2000); // Jeda 2 detik sebelum memulai teks berikutnya
      }
    };

    typeText(); // Mulai mengetik teks

    return () => {
      // Bersihkan timeout saat komponen di-unmount
      clearTimeout(typingTimeoutRef.current);
      clearTimeout(delayTimeoutRef.current);
    };
  }, [currentIndex]); // Efek dijalankan ulang setiap kali indeks teks berubah

  return (
    <div id="app" className="flex">
      <div className="text-[3rem] font-bold font-mono">
        <span>Haloo, {displayedText}</span>
        <span className="inline-block w-[1px] bg-black animate-blink">|</span>
      </div>
    </div>
  );
};

export default TypingEffect;
