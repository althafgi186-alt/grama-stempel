const stampData = [
  {
    code: "GS-001",
    size: "40 × 60 mm",
    image: "/images/stamps/GS-001.jpg",
  },
  {
    code: "GS-002",
    size: "30 × 50 mm",
    image: "/images/stamps/GS-002.jpg",
  },
  {
    code: "GS-003",
    size: "18 × 47 mm",
    image: "/images/stamps/GS-003.jpg",
  },
  {
    code: "GS-004",
    size: "24 × 60 mm",
    image: "/images/stamps/GS-004.jpg",
  },
  {
    code: "GS-005",
    size: "50 × 50 mm",
    image: "/images/stamps/GS-005.jpeg",
  },
  {
    code: "GS-006",
    size: "45 × 70 mm",
    image: "/images/stamps/GS-006.jpg",
  },
];

function StampGallery() {
  return (
    <section
  id="stamp-gallery"
  className="bg-white py-20"
>
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-900">
          Contoh Model Stempel
        </h2>

        <p className="mt-4 text-center text-lg text-gray-600 max-w-3xl mx-auto">
  Pilih model stempel yang Anda inginkan, lalu klik tombol "Pilih Model Ini"
  untuk melanjutkan pemesanan melalui WhatsApp.
</p>

        <div className="grid gap-8 mt-14 sm:grid-cols-2 lg:grid-cols-3">

          {stampData.map((stamp) => (
            <div
              key={stamp.code}
              className="bg-white rounded-2xl shadow-md overflow-hidden border hover:shadow-xl transition"
            >
              <img
                src={stamp.image}
                alt={stamp.code}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {stamp.code}
                </h3>

                <p className="text-gray-500 mt-1">
                  {stamp.size}
                </p>

                <a
  href={`https://wa.me/082260765090?text=${encodeURIComponent(
    `Halo Grama Stempel, saya ingin memesan model ${stamp.code}. Apakah model ini masih tersedia?`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="mt-6 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
    Pilih Model Ini
  </button>
</a>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default StampGallery;