import { useState } from "react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Berapa lama proses pembuatan stempel?",
      answer:
        "Proses pembuatan biasanya selesai dalam 1 hari kerja, tergantung jenis dan jumlah pesanan.",
    },
    {
      question: "Apakah bisa kirim ke luar kota?",
      answer:
        "Ya, kami melayani pengiriman ke seluruh Indonesia.",
    },
    {
      question: "Apakah desain stempel bisa dibuatkan?",
      answer:
        "Bisa. Jika belum memiliki desain, kami siap membantu membuatkannya.",
    },
    {
      question: "Apakah bisa pesan dalam jumlah banyak?",
      answer:
        "Tentu bisa. Untuk pemesanan dalam jumlah banyak, silakan hubungi kami untuk mendapatkan informasi harga dan proses pemesanannya.",
    },
  ];

  return (
    <section id="faq" className="bg-gray-50 py-20 px-6">

      <div className="max-w-5xl mx-auto">

        {/* Judul */}
        <h2
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 leading-tight"
        >
          Pertanyaan yang Sering Diajukan
        </h2>

        {/* Deskripsi */}
        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="mt-4 text-center text-sm sm:text-base text-gray-600 max-w-2xl mx-auto"
        >
          Berikut beberapa pertanyaan yang sering ditanyakan pelanggan.
        </p>

        {/* FAQ List */}
        <div className="mt-10 sm:mt-12 space-y-4 sm:space-y-6 max-w-3xl mx-auto">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow overflow-hidden"
            >

              {/* Pertanyaan */}
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-gray-50 transition-all duration-300"
              >
                <h3 className="font-bold text-base sm:text-lg leading-6">
                  {faq.question}
                </h3>

                <span
                  className={`text-2xl flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index
                      ? "rotate-45"
                      : "rotate-0"
                  }`}
                >
                  +
                </span>
              </button>

              {/* Jawaban */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base text-gray-600 leading-7">
                    {faq.answer}
                  </p>
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default FAQ;