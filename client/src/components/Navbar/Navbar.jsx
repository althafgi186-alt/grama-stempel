import { useEffect, useState } from "react";

function Navbar() { 

  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <nav
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    scrolled
      ? "bg-white/90 backdrop-blur-md shadow-lg"
      : "bg-transparent"
  }`}
>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600 hover:scale-105 transition-transform duration-300 cursor-pointer">
          Grama Stempel
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li>
  <a
    href="#home"
    className="hover:text-blue-600 transition-colors duration-300"
  >
    Home
  </a>
</li>

          <li>
  <a
    href="#stamp-gallery"
    className="hover:text-blue-600 transition-colors duration-300"
  >
    Galeri
  </a>
</li>

          <li>
  <a
    href="#tracking"
    className="hover:text-blue-600 transition-colors duration-300"
  >
    Tracking
  </a>
</li>

          <li>
  <a
    href="#faq"
    className="hover:text-blue-600 transition-colors duration-300"
  >
    FAQ
  </a>
</li>
        </ul>

        {/* Tombol */}
        <a
  href="#stamp-gallery"
  className="
    hidden md:inline-flex
    items-center
    bg-gradient-to-r from-blue-600 to-blue-700
    hover:from-blue-700 hover:to-blue-800
    text-white
    px-6 py-3
    rounded-xl
    font-semibold
    shadow-lg
    hover:shadow-blue-500/40
    hover:-translate-y-1
    hover:scale-105
    active:scale-95
    transition-all
    duration-300
  "
>
  Pesan Sekarang
</a>

      </div>
    </nav>
  );
}

export default Navbar;