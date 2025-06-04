import React, { useState, useEffect, useRef, useContext } from "react";
import { AnimationContext } from "../App";

function ProjectLogicSection() {
  const { visibleSections, observeSections } = useContext(AnimationContext);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refs, setRefs] = useState([]);

  const moreLogicRef = useRef(null);
  const testLogicRef = useRef(null);

  // Fetch data dari backend
  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch('https://personalwebsitebackend-production.up.railway.app/api/dbLogicProject');
        const json = await res.json();

        // Pastikan data yang diterima valid
        if (!Array.isArray(json)) {
          console.error('Data yang diterima bukan array:', json);
          return;
        }

        // Sort berdasarkan checkbox Terbaik (true di atas) dan kemudian tanggal jika ada
        const sorted = json
          .filter(project => project.properties)
          .sort((a, b) => {
            // Prioritas pertama: checkbox Terbaik
            const aBest = a.properties.Terbaik?.checkbox || false;
            const bBest = b.properties.Terbaik?.checkbox || false;
            if (aBest !== bBest) return bBest - aBest;
            
            // Prioritas kedua: tanggal jika ada
            try {
              const dateA = a.properties.Date?.date?.start ? new Date(a.properties.Date.date.start) : null;
              const dateB = b.properties.Date?.date?.start ? new Date(b.properties.Date.date.start) : null;
              if (dateA && dateB) return dateB - dateA;
              if (dateA) return -1;
              if (dateB) return 1;
              return 0;
            } catch (e) {
              console.error('Error parsing date:', e);
              return 0;
            }
          });

        setProjects(sorted);
      } catch (e) {
        console.error('Fetch error:', e);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  // Setup dynamic refs
  useEffect(() => {
    setRefs(projects.map(() => React.createRef()));
  }, [projects]);

  // Observe sections after refs are ready
  useEffect(() => {
    if (refs.length > 0) {
      observeSections([moreLogicRef, testLogicRef, ...refs], Array(refs.length + 2).fill(0.1));
    }
  }, [refs, observeSections]);

  // Fungsi untuk mendapatkan URL gambar yang aman
  const getImageUrl = (project) => {
    if (!project.properties.Foto || !project.properties.Foto.files || project.properties.Foto.files.length === 0) {
      return 'https://via.placeholder.com/800x600?text=No+Image';
    }
    return project.properties.Foto.files[0].file.url;
  };

  // Fungsi untuk mendapatkan judul
  const getTitle = (project) => {
    if (!project.properties.Name || !project.properties.Name.title || project.properties.Name.title.length === 0) {
      return 'Judul Tidak Tersedia';
    }
    return project.properties.Name.title[0].plain_text;
  };

  // Fungsi untuk mendapatkan link
  const getLink = (project) => {
    if (!project.properties.Link || !project.properties.Link.url) {
      return '#';
    }
    return project.properties.Link.url;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-xl">Loading proyek logika...</p>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-xl">Tidak ada data proyek logika yang ditemukan</p>
      </div>
    );
  }

  // Pisahkan proyek terbaik dan lainnya
  const bestProjects = projects.filter(project => 
    project.properties.Terbaik?.checkbox
  );
  const otherProjects = projects;

  return (
    <div className="w-[98%] mx-auto p-6 text-center">
      {/* Daftar Proyek Terbaik */}
      {bestProjects.length > 0 && (
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-4">Proyek Unggulan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 px-14 w-full">
            {bestProjects.map((project, i) => {
              const idx = projects.findIndex(p => p.id === project.id);
              const visibleBestLogic = visibleSections[`logic-${project.id}`];
              const classBestLogic = `group shadow-md hover:shadow-black overflow-hidden block cursor-pointer transition-all duration-300 rounded-3xl
                ${visibleBestLogic ? "translate-y-0 opacity-100 ease-in-out" : "translate-y-10 opacity-0 ease-in"}`;
              return (
                <a
                  key={project.id}
                  href={getLink(project)}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`logic-${project.id}`}
                  ref={idx !== -1 ? refs[idx] : null}
                  className={classBestLogic}
                >
                  <div className="relative overflow-hidden rounded-3xl h-64">
                    <img
                      src={getImageUrl(project)}
                      alt={getTitle(project) || "Gambar proyek"}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        if (!e.target.src.includes('placeholder.com')) {
                          e.target.src = 'https://via.placeholder.com/800x600?text=Image+Error';
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                    <div className="absolute bottom-0 left-0 w-full p-4 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <p className="text-sm text-gray-600">Klik untuk melihat kode</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mt-5">
                    {getTitle(project)}
                  </h3>
                </a>
              );
            })}
          </div>
        </div>
      )}

      {/* Daftar Semua Proyek */}
      <div>
        <h2 className="text-2xl font-bold mt-8 mb-4">Semua Proyek Logika</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {otherProjects.map((project, i) => {
            const visibleAllLogic = visibleSections[`logic-${project.id}`];
            const classAllLogic = `shadow-md overflow-hidden relative group w-[45%] md:w-[30%] lg:w-[22%] rounded-3xl transition-transform duration-300
            ${visibleAllLogic ? "translate-y-0 opacity-100 ease-in-out" : "translate-y-10 opacity-0 ease-in"}`;
            return (
              <a
                key={project.id}
                href={getLink(project)}
                target="_blank"
                rel="noopener noreferrer"
                id={`logic-${project.id}`}
                ref={refs[i] ?? null}
                className={classAllLogic}
              >
                <div className="relative overflow-hidden rounded-3xl h-32 md:h-28 lg:h-20 xl:h-28">
                  <img
                    src={getImageUrl(project)}
                    alt={getTitle(project)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/800x600?text=Image+Error';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-sm text-gray-600">Klik untuk melihat kode</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mt-5">
                  {getTitle(project)}
                </h3>
              </a>
            )})}
        </div>
      </div>

      {/* Tombol untuk melihat lebih banyak proyek */}
      <a
        href="https://github.com/orgs/Sem-1-Workshop-Desain-web/repositories"
        rel="noreferrer"
        target="_blank"
        id="moreLogic"
        ref={moreLogicRef}
        className={`px-6 py-2 mt-16 border-2 justify-center border-white rounded-3xl bg-black text-white text-center inline-block
        transition-all duration-300 ease-in-out hover:bg-white hover:text-black active:bg-gray-300
        ${visibleSections["moreLogic"]
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
        }`}
      >
        Lihat Lebih Banyak
      </a>

      {/* Bagian untuk menunjukkan cara menguji program */}
      <p className="mt-1 text-sm text-white text-center">
        <a
          href="https://drive.google.com/file/d/1auG9c9d4eHnjUi-A7B5RqcN6xMyY8LoP/view?usp=sharing"
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