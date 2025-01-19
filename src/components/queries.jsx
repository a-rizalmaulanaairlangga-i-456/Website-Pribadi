import React, { useState, useContext, useEffect, useRef } from "react";
import { AnimationContext } from "../App";

// Data FAQ (Frequently Asked Questions) yang berisi pertanyaan dan jawaban
const faqs = [
  {
    question: "Apa yang menjadi kelebihan dan kekuranganmu?", // Pertanyaan 1
    answer:
      "Saya merupakan individu yang teguh terhadap pendirian saya, sehingga saya juga mampu menjaga konsistensi saya dalam mencapai suatu tujuan. Saya mudah beradaptasi dalam berbagai lingkungan, terbuka dengan pendapat orang lain menjadi salah hal yang membuat saya percaya diri untuk membawa pengaruh positif kepada lingkungan saya. Namun, juga saya akui bahwa meskipun rajin mencatat jadwal dan tugas, saya sendiri masih sering melupakan kegiatan-kegiatan yang sudah terjadwal",
  },
  {
    question: "Di mana saya berkuliah, serta mengapa saya memilih Kampus dan jurusan saya saat ini?", // Pertanyaan 2
    answer:
      "Saat ini saya berkuliah di Politeknik Elektronika Negeri Surabaya dengan prodi D4 Teknik Informatika. Didorong oleh perkembangan teknologi yang semakin maju, maka sebagai generasi penerus bangsa Saya ingin menjadi penerus yang profesional di bidang teknologi, khususnya pada pengembangan perangkat lunak. Memajukan berbagai bidang dengan pemanfaatan IoT, AI, dan Cloud Computing, yang merupakan rencana dari fokus studi saya kedepannya. ",
  },
  {
    question: "Apa rencana pendidikan saya dalam beberapa tahun ke depan?", // Pertanyaan 3
    answer:
      "Dalam tahun pertama ini, saya ingin fokus untuk mengikuti kegiatan edukasi seperti komunitas, bootcamp atau workshop di dalam maupun di luar kampus. Di tahun kedua, saya ingin mulai aktif dalam kegiatan organisasi dan memulai proyek kolaboratif di bidang Informatika. Pada tahun ketiga, saya berencana fokus membangun portofolio di bidang akademik maupun non-akademik, termasuk juga proyek magang. Tahun terakhir berkuliah, saya akan memfokuskan diri pada Tugas Akhir, serta lulus tepat waktu dengan nilai memuaskan",
  },
];

const FAQ = () => {
  const [openIndices, setOpenIndices] = useState([]); // State untuk menyimpan pertanyaan yang terbuka

  // Fungsi untuk mengubah status pertanyaan yang dibuka atau ditutup
  const toggleFAQ = (index) => {
    setOpenIndices((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index); // Menutup pertanyaan yang sudah terbuka
      } else {
        return [...prev, index]; // Membuka pertanyaan
      }
    });
  };

  // Mengambil context untuk animasi bagian yang terlihat
  const { visibleSections, observeSections } = useContext(AnimationContext);

  // Referensi untuk elemen judul dan pertanyaan FAQ
  const titleRef = useRef(null);
  const questionRefs = useRef(faqs.map(() => React.createRef())); // Membuat referensi untuk setiap pertanyaan

  // Menggunakan useEffect untuk memonitor visibilitas elemen pada saat scroll
  useEffect(() => {
    observeSections([titleRef, ...questionRefs.current], [0.2]); // Mengubah threshold menjadi 20%
  }, [observeSections]);

  return (
    <div className="w-[90%] mx-auto mt-20 text-white">
      {/* Judul FAQ dengan animasi */}
      <h1
        id="faq-title"
        ref={titleRef}
        className={`text-center text-3xl font-bold mb-10 transition-transform duration-300 ease-in-out ${
          visibleSections["faq-title"]
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        Pertanyaan Umum
      </h1>
      <div className="space-y-5">
        {/* Iterasi untuk menampilkan setiap pertanyaan dan jawaban */}
        {faqs.map((faq, index) => (
          <div
            key={index}
            id={`faq-question-${index}`}
            ref={questionRefs.current[index]}
            className={`border-b border-gray-500 pb-3 transition-transform ${
              visibleSections[`faq-question-${index}`]
                ? "translate-y-0 opacity-100 duration-300 ease-in-out"
                : "translate-y-10 opacity-0 duration-300 ease-in"
            }`}
          >
            {/* Tombol untuk toggle pertanyaan */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left sm:text-2xl text-xl sm:font-normal font-light flex justify-between items-center focus:outline-none"
            >
              {faq.question} {/* Menampilkan teks pertanyaan */}
              <span className="text-gray-400">
                {openIndices.includes(index) ? "\u25B2" : "\u25BC"} {/* Menampilkan panah naik atau turun */}
              </span>
            </button>
            {/* Menampilkan jawaban dengan animasi untuk membuka/tutup */}
            <div
              className={`overflow-hidden transition-[max-height] ${
                openIndices.includes(index)
                  ? "max-h-screen duration-700 ease-in-out"
                  : "max-h-0 duration-700 ease-in"
              }`}
            >
              <p className="mt-3 text-white/80 sm:text-lg text-base">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

export function Questions() {
  return (
    <div className="w-[90%] mx-auto mt-20 text-white">
      {/* Judul Pertanyaan Umum */}
      <h1 className="text-center text-3xl font-bold mb-10">Pertanyaan Umum</h1>
      <div className="space-y-5">
        {/* Iterasi untuk menampilkan daftar pertanyaan tanpa jawaban */}
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-500 pb-3">
            <h2 className="w-full text-left text-xl font-medium flex justify-between items-center focus:outline-none">
              {faq.question} {/* Menampilkan teks pertanyaan */}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
