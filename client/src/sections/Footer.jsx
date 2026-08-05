function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">
            Grama Stempel
          </h2>

          <p className="mt-4 text-gray-400">
            Melayani pembuatan stempel berkualitas
            untuk usaha, kantor, sekolah, dan pribadi.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h3 className="font-bold text-lg">
            Menu
          </h3>

          <ul className="mt-4 space-y-2 text-gray-400">
            <li><a href="#home">Home</a></li>
            <li><a href="#stamp-gallery">Galeri</a></li>
            <li><a href="#tracking">Tracking</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="font-bold text-lg">
            Kontak
          </h3>

          <p className="mt-4 text-gray-400">
            📍 Banda Aceh
          </p>

          <p className="mt-2 text-gray-400">
            📞 WhatsApp
          </p>

          <p className="mt-2 text-gray-400">
            Senin - Sabtu
          </p>

          <p className="mt-2 text-gray-400">
            09.00 - 22.00 WIB
          </p>
        </div>

      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
        © 2026 Grama Stempel. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;