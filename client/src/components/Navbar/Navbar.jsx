import { useEffect, useState } from "react";

function Navbar() { 

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

        {/* Mobile Menu Button */}
<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden text-2xl text-gray-700 hover:text-blue-600 transition-all duration-300"
  aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
>
  <span
    className={`inline-block transition-transform duration-500 ${
      menuOpen ? "rotate-90" : "rotate-0"
    }`}
  >
    {menuOpen ? "✕" : "☰"}
  </span>
</button>

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

      {/* Mobile Menu */}
<div
  className={`
  md:hidden
  overflow-hidden
  bg-white/95
  backdrop-blur-md
  shadow-lg
  transition-all
  duration-700
  ease-in-out
  ${
    menuOpen
      ? "max-h-[500px] opacity-100 translate-y-0"
      : "max-h-0 opacity-0 -translate-y-2"
  }
`}
>
  <div className="px-6 py-5 space-y-4">

    <a
      href="#hero"
      onClick={() => setMenuOpen(false)}
      className="block text-gray-700 font-medium hover:text-blue-600 transition"
    >
      Home
    </a>

    <a
      href="#stamp-gallery"
      onClick={() => setMenuOpen(false)}
      className="block text-gray-700 font-medium hover:text-blue-600 transition"
    >
      Galeri
    </a>

    <a
      href="#tracking"
      onClick={() => setMenuOpen(false)}
      className="block text-gray-700 font-medium hover:text-blue-600 transition"
    >
      Tracking
    </a>

    <a
      href="#faq"
      onClick={() => setMenuOpen(false)}
      className="block text-gray-700 font-medium hover:text-blue-600 transition"
    >
      FAQ
    </a>

    <a
      href="#stamp-gallery"
      onClick={() => setMenuOpen(false)}
      className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
    >
      Pesan Sekarang
    </a>

  </div>
</div>

    </nav>
  );
}

export default Navbar;