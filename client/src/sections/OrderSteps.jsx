function OrderSteps() {
  return (
    <section id="order" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-900">
          Cara Pemesanan
        </h2>

        <p className="mt-4 text-center text-gray-600">
          Ikuti langkah berikut untuk memesan stempel dengan mudah.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-5">

          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:-translate-y-3 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <div className="text-5xl">🛍️</div>
            <h3 className="mt-4 font-bold text-lg">Pilih Model</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Pilih model stempel yang diinginkan.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:-translate-y-3 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <div className="text-5xl">📱</div>
            <h3 className="mt-4 font-bold text-lg">Klik Pesan</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Tekan tombol "Pilih Model Ini".
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:-translate-y-3 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <div className="text-5xl">📝</div>
            <h3 className="mt-4 font-bold text-lg">Kirim Data</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Kirim nama dan desain melalui WhatsApp.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:-translate-y-3 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <div className="text-5xl">🛠️</div>
            <h3 className="mt-4 font-bold text-lg">Diproses</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Pesanan akan segera kami kerjakan.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:-translate-y-3 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <div className="text-5xl">🎉</div>
            <h3 className="mt-4 font-bold text-lg">Ambil Pesanan</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Ambil stempel di toko setelah selesai.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default OrderSteps;