function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 items-center gap-12">

          {/* Kiri */}
          <div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              Grama Stempel Order
            </h1>

            <h2 className="text-3xl md:text-4xl font-semibold mt-4 text-gray-700">
  Jasa Pembuatan Stempel Cepat & Berkualitas 
</h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
  Melayani pembuatan stempel flash, otomatis, dan kayu
untuk kebutuhan usaha, kantor, sekolah, maupun pribadi.
</p>

<a
  href="#stamp-gallery"
  className="inline-block mt-8 bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition"
>
  Lihat Model Stempel →
</a>

          </div>

          {/* Kanan */}
          {/* Kanan */}
<div className="flex justify-center">

  <div className="w-[420px] h-[420px] rounded-3xl bg-gray-100 flex flex-col items-center justify-center shadow-lg">

    <h3 className="text-2xl font-bold text-gray-800">
      Grama Stempel
    </h3>

    <p className="mt-3 text-center text-gray-500 px-8">
      Foto hasil produksi akan ditampilkan di sini.
    </p>

  </div>

</div>

        </div>

      </div>
    </section>
  );
}

export default Hero;