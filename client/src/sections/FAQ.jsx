function FAQ() {
  return (
    <section id="faq" className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-900">
          Pertanyaan yang Sering Diajukan
        </h2>

        <p className="mt-4 text-center text-gray-600">
          Berikut beberapa pertanyaan yang sering ditanyakan pelanggan.
        </p>

        <div className="mt-12 space-y-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg">
              Berapa lama proses pembuatan stempel?
            </h3>
            <p className="mt-2 text-gray-600">
              Proses pembuatan biasanya selesai dalam 1 hari kerja,
              tergantung jenis dan jumlah pesanan.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg">
              Apakah bisa kirim ke luar kota?
            </h3>
            <p className="mt-2 text-gray-600">
              Ya, kami melayani pengiriman ke seluruh Indonesia.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg">
              Apakah desain stempel bisa dibuatkan?
            </h3>
            <p className="mt-2 text-gray-600">
              Bisa. Jika belum memiliki desain, kami siap membantu membuatkannya.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default FAQ;