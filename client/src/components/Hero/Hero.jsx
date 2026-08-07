function Hero() {
  return (
    <section
      id="hero"
      data-aos="fade-left"
      className="bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">

        <div className="grid md:grid-cols-2 items-center gap-10 md:gap-12">

          {/* Kiri */}
          <div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              GRAMA STEMPEL ORDER
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 text-gray-700 leading-tight">
              Jasa Pembuatan Stempel Cepat & Berkualitas ⚡
            </h2>

            <p className="mt-6 text-base sm:text-lg text-gray-600 leading-7 sm:leading-8">
              Melayani Pesanan & Pembuatan Stempel Flash, Otomatis, dan Kayu
              untuk Kebutuhan Usaha, Kantor, Sekolah, maupun Pribadi.
            </p>

            <a
              href="#stamp-gallery"
              className="inline-block mt-8 bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-gray-800 hover:scale-105 transition-all duration-300"
            >
              Lihat Model Stempel →
            </a>

          </div>

          {/* Kanan */}
          <div>

            <h3 className="text-2xl font-bold text-gray-800">
              Grama Stempel
            </h3>

            <p className="mt-3 text-center text-gray-500 px-4 sm:px-8">
              Foto hasil produksi akan ditampilkan di sini.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;