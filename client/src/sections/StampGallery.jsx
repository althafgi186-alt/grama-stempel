const waNumber = "082260765090"; // Nomor WhatsApp tujuan
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
  data-aos="fade-up"
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
  className="
    group
    bg-white
    rounded-2xl
    shadow-md
    overflow-hidden
    border
    border-gray-200
    hover:border-blue-500
    hover:bg-blue-50/30
    hover:-translate-y-3
    hover:scale-[1.03]
    hover:shadow-2xl
    transition-all
    duration-500
  "
>
              <div className="overflow-hidden">
  <img
    src={stamp.image}
    alt={stamp.code}
    className="
w-full
h-56
object-cover
transition-all
duration-500
group-hover:scale-110
"
  />
</div>

              <div className="p-6">

                <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-blue-600">
                  {stamp.code}
                </h3>

                <p className="text-gray-500 mt-1 transition-colors duration-300 group-hover:text-gray-700">
                  {stamp.size}
                </p>

                <a
  href={`https://wa.me/${waNumber}?text=${encodeURIComponent(
    `Halo Grama Stempel.

Saya ingin memesan stempel dengan detail berikut:

Kode : ${stamp.code}
Ukuran : ${stamp.size}

Mohon informasi mengenai harga dan proses pemesanannya.

Terima kasih.`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="
mt-6
w-full
bg-gradient-to-r
from-green-500
to-green-600
hover:from-green-600
hover:to-green-700
text-white
py-3
rounded-xl
font-semibold
shadow-lg
hover:shadow-green-500/40
hover:scale-105
active:scale-95
transition-all
duration-300
">
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