import React, { useState, useEffect } from 'react'; 
import { useNavigate, useLocation } from 'react-router-dom'; // Importing navigation hooks

const Navbar = ({ scrollToSection, homeRef, aboutMeRef, cardStackRef, skillRef, queriesRef, contactRef }) => {
  const [isScrolled, setIsScrolled] = useState(false); // State to track whether the page is scrolled
  const navigate = useNavigate(); // Hook for navigation
  const location = useLocation(); // Hook to access current location

  // Function to handle scroll event and adjust navbar appearance
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50); // Change state when scrolled more than 50px
  };

  useEffect(() => {
    const handleScroll = () => {
      // Atur threshold scroll sesuai kebutuhan
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function for navigating to sections and scrolling to them
  const handleNavigation = (ref) => {
    if (location.pathname !== '/') {
      navigate('/'); // Navigate to homepage if not already there
      setTimeout(() => scrollToSection(ref), 50); // Wait for navigation before scrolling to section
    } else {
      scrollToSection(ref); // Scroll to the section directly if on homepage
    }
  };

  const [activeMenu, setActiveMenu] = useState(''); // State to track the active menu item

  useEffect(() => {
    // Intersection Observer to track which section is currently visible
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Set active menu based on the visible section
          if (entry.target === homeRef.current) {
            setActiveMenu('Home');
          } else if (entry.target === aboutMeRef.current) {
            setActiveMenu('About Me');
          } else if (entry.target === cardStackRef.current) {
            setActiveMenu('Stack');
          } else if (entry.target === skillRef.current) {
            setActiveMenu('Skill');
          } else if (entry.target === queriesRef.current) {
            setActiveMenu('Queries');
          } else if (entry.target === contactRef.current) {
            setActiveMenu('Contact');
          }
        }
      });
    };

    const observerOptions = {
      root: null, // Observe within the viewport
      rootMargin: '0px',
      threshold: 0.4, // Trigger when 20% of the element is visible
    };

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each section using the refs passed in the props
    if (homeRef.current) observer.observe(homeRef.current);
    if (aboutMeRef.current) observer.observe(aboutMeRef.current);
    if (cardStackRef.current) observer.observe(cardStackRef.current);
    if (skillRef.current) observer.observe(skillRef.current);
    if (queriesRef.current) observer.observe(queriesRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    // Cleanup observer when the component unmounts
    return () => {
      if (homeRef.current) observer.unobserve(homeRef.current);
      if (aboutMeRef.current) observer.unobserve(aboutMeRef.current);
      if (cardStackRef.current) observer.unobserve(cardStackRef.current);
      if (skillRef.current) observer.unobserve(skillRef.current);
      if (queriesRef.current) observer.unobserve(queriesRef.current);
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, [homeRef, aboutMeRef, cardStackRef, skillRef, queriesRef, contactRef]);

  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk mengontrol dropdown

  return (
    <nav
      className={`fixed w-full transition-all duration-1000 z-50 text-white px-6 py-3 ${
        isScrolled ? 'backdrop-blur-md shadow-md' : 'h-16 md:h-auto bg-neutral-900 rounded-b-3xl w-5/12'
      }`}
      style={{ left: '50%', transform: 'translateX(-50%)' }}
    >
      <div className="relative flex items-center justify-between max-w-[96%] mx-auto">
        {/* Logo Section */}
        <div
          className={`transition-all duration-500 ease-in-out ${
            isScrolled ? 'relative left-0' : 'relative left-6'
          } w-fit`}
        >
          <img
            src="logo.png"
            alt="Logo"
            onClick={() => handleNavigation(homeRef)}
            className="relative cursor-pointer hover:scale-125 hover:drop-shadow-[0_4px_4px_rgba(255,255,255,0.8)] transition-all duration-500 ease-in-out w-auto h-8"
          />
        </div>

        {/* Mobile Menu Button */}
        <div 
          className={`block md:hidden transition-all duration-500 ease-in-out ${
            isScrolled ? 'relative right-0' : 'relative right-6'
          }`}
        >
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md hover:bg-neutral-800 transition-all"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Navigation Menu Section (Hidden on small screens) */}
        <div 
          className={`hidden md:flex items-center text-base transition-all duration-1000 ease-in-out ${
            isScrolled ? 'relative justify-center' : 'relative justify-end'
          }`}
          style={{
            transform: isScrolled ? 'translateX(0)' : 'translateX(50px)',
            width: '100%'
          }}
        >
          <div
            className={`flex transition-all duration-500 ${
              isScrolled ? 'bg-neutral-900 rounded-full w-fit px-7 py-2 -mb-3 gap-3' : 'py-1 mr-14'
            }`}
          >
            <button
              onClick={() => handleNavigation(aboutMeRef)}
              className={`hover:bg-zinc-200 hover:text-black px-3 py-1 mr-1 rounded-2xl transition duration-500 ease-in-out ${
                activeMenu === 'About Me' ? 'bg-zinc-400 text-black' : 'hover:bg-zinc-200'
              }`}
            >
              Tentang
            </button>
            <button
              onClick={() => handleNavigation(cardStackRef)}
              className={`hover:bg-zinc-200 hover:text-black px-3 py-1 mr-1 rounded-2xl transition duration-500 ease-in-out ${
                activeMenu === 'Stack' ? 'bg-zinc-400 text-black' : 'hover:bg-zinc-200'
              }`}
            >
              Alat
            </button>
            <button
              onClick={() => handleNavigation(skillRef)}
              className={`hover:bg-zinc-200 hover:text-black px-3 py-1 mr-1 rounded-2xl transition duration-500 ease-in-out ${
                activeMenu === 'Skill' ? 'bg-zinc-400 text-black' : 'hover:bg-zinc-200'
              }`}
            >
              Keahlian
            </button>
            <button
              onClick={() => handleNavigation(queriesRef)}
              className={`hover:bg-zinc-200 hover:text-black px-3 py-1 rounded-2xl transition duration-500 ease-in-out ${
                activeMenu === 'Queries' ? 'bg-zinc-400 text-black' : 'hover:bg-zinc-200'
              }`}
            >
              Pertanyaan
            </button>
          </div>
        </div>

        {/* Contact Menu Section */}
        <div
          className={`hidden md:block text-sm mr-4 transition-all duration-500 ease-in-out ${
            isScrolled ? 'mr-0 translate-y-2' : ''
          }`}
        >
          <button
            onClick={() => handleNavigation(contactRef)}
            className={`group px-3 py-1 rounded-lg transition-all duration-500 ease-in-out ${
              activeMenu === 'Contact' ? 'shadow-lg' : ''
            }`}
          >
            Kontak
            <span
              className={`absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-500 ease-in-out ${
                activeMenu === 'Contact' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-neutral-800 rounded-lg shadow-lg text-white">
          <button
            onClick={() => handleNavigation(aboutMeRef)}
            className="block px-4 py-2 hover:bg-zinc-800 active:bg-zinc-900 w-full text-left rounded-t-lg"
          >
            Tentang
          </button>
          <button
            onClick={() => handleNavigation(cardStackRef)}
            className="block px-4 py-2 hover:bg-zinc-800 active:bg-zinc-900 w-full text-left"
          >
            Alat
          </button>
          <button
            onClick={() => handleNavigation(skillRef)}
            className="block px-4 py-2 hover:bg-zinc-800 active:bg-zinc-900 w-full text-left"
          >
            Keahlian
          </button>
          <button
            onClick={() => handleNavigation(queriesRef)}
            className="block px-4 py-2 hover:bg-zinc-800 active:bg-zinc-900 w-full text-left"
          >
            Pertanyaan
          </button>
          <button
            onClick={() => handleNavigation(contactRef)}
            className="block px-4 py-2 hover:bg-zinc-800 active:bg-zinc-900 w-full text-left rounded-b-lg"
          >
            Kontak
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
