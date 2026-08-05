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

          <div className="rounded-3xl overflow-hidden shadow-2xl">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.0927607441326!2d95.31584169999998!3d5.553265999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3040378226d08d2b%3A0x7acfc649c04c0d78!2sToko%20Grama%20Stempel!5e0!3m2!1sid!2sid!4v1785930863556!5m2!1sid!2sid"
    width="100%"
    height="480"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
  ></iframe>
</div>

          <div>

            <h3 className="text-4xl font-bold text-gray-900">
  Grama Stempel
</h3>

<p className="mt-5 text-gray-600 leading-7">
  Spesialis pembuatan stempel otomatis, flash, dan kayu
  untuk kebutuhan usaha, kantor, sekolah, dan pribadi.
</p>

<div className="mt-8 space-y-6">

  <div className="flex gap-4">
    <span className="text-2xl">📍</span>
    <div>
      <h4 className="font-semibold">Alamat</h4>
      <p className="text-gray-600">
        Banda Aceh
      </p>
    </div>
  </div>

  <div className="flex gap-4">
    <span className="text-2xl">🕒</span>
    <div>
      <h4 className="font-semibold">Jam Operasional</h4>
      <p className="text-gray-600">Senin - Sabtu</p>
      <p className="text-gray-600">09.00 - 22.00 WIB</p>
    </div>
  </div>

  <div className="flex gap-4">
    <span className="text-2xl">📱</span>
    <div>
      <h4 className="font-semibold">WhatsApp</h4>

      <a
  href="https://wa.me/082260765090"
  target="_blank"
  rel="noreferrer"
  className="
    group
    inline-flex items-center gap-3
    mt-5
    bg-gradient-to-r from-green-500 to-green-600
    hover:from-green-600 hover:to-green-700
    text-white
    px-7 py-3.5
    rounded-2xl
    font-semibold
    shadow-lg
    hover:shadow-green-500/50
    hover:-translate-y-1
    hover:scale-105
    active:scale-95
    transition-all
    duration-300
  "
>
  <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">
    💬
  </span>

  <span>
    Chat via WhatsApp
  </span>

  <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
    →
  </span>
</a>

    </div>
  </div>

</div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Location;