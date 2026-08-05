function Location() {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-900">
          Lokasi Toko
        </h2>

        <p className="mt-4 text-center text-gray-600">
          Datang langsung ke toko untuk mengambil pesanan Anda.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">

          <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center shadow">
            <span className="text-gray-500">
              Google Maps akan ditampilkan di sini
            </span>
          </div>

          <div>

            <h3 className="text-2xl font-bold">
              Grama Stempel
            </h3>

            <p className="mt-6 text-gray-600">
              📍 Banda Aceh
            </p>

            <p className="mt-3 text-gray-600">
              🕗 Senin - Sabtu
            </p>

            <p className="mt-3 text-gray-600">
              08.00 - 17.00 WIB
            </p>

            <p className="mt-3 text-gray-600">
              📞 WhatsApp:
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Location;