function Tracking() {
  return (
    <section id="tracking" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-gray-900">
          Tracking Pesanan
        </h2>

        <p className="mt-4 text-gray-600">
          Masukkan nomor pesanan untuk melihat status pengerjaan stempel Anda.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

          <input
            type="text"
            placeholder="Contoh: GS250001"
            className="border rounded-xl px-5 py-4 w-full md:w-96 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <button className="bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition">
            Cek Status
          </button>

          <div className="mt-10 bg-white rounded-2xl shadow-lg p-8 text-left">

  <h3 className="text-2xl font-bold text-gray-900">
    Status Pesanan
  </h3>

  <div className="mt-6 space-y-3">

    <p>
      <span className="font-semibold">Nomor Pesanan:</span> GS250001
    </p>

    <p>
      <span className="font-semibold">Status:</span>
      <span className="ml-2 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
        Sedang Diproses
      </span>
    </p>

    <p>
      <span className="font-semibold">Estimasi Selesai:</span> 7 Agustus 2026
    </p>

  </div>

</div>

        </div>

      </div>
    </section>
  );
}

export default Tracking;