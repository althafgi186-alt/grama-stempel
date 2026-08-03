function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          Grama Stempel
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li>
            <a href="#">Home</a>
          </li>

          <li>
            <a href="#">Galeri</a>
          </li>

          <li>
            <a href="#">Tracking</a>
          </li>

          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>

        {/* Tombol */}
        <button className="hidden md:block bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2 rounded-lg">
          Pesan Sekarang
        </button>

      </div>
    </nav>
  );
}

export default Navbar;