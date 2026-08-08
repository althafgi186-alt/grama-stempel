function OrderSteps() {
  const steps = [
    {
      icon: "🛍️",
      title: "Pilih Model",
      description: "Pilih model stempel yang diinginkan.",
    },
    {
      icon: "📱",
      title: "Klik Pesan",
      description: 'Tekan tombol "Pilih Model Ini".',
    },
    {
      icon: "📝",
      title: "Kirim Data",
      description: "Kirim nama dan desain melalui WhatsApp.",
    },
    {
      icon: "🛠️",
      title: "Diproses",
      description: "Pesanan akan segera kami kerjakan.",
    },
    {
      icon: "🎉",
      title: "Ambil Pesanan",
      description: "Ambil stempel di toko setelah selesai.",
    },
  ];

  return (
    <section
      id="order"
      className="py-20 sm:py-24 bg-white"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Judul */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">
          Cara Pemesanan
        </h2>

        <p className="mt-4 text-center text-sm sm:text-base text-gray-600">
          Ikuti langkah berikut untuk memesan stempel dengan mudah.
        </p>

        {/* Steps */}
        <div className="mt-12 sm:mt-14 relative">

          {/* Garis penghubung desktop */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gray-200"></div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-5 relative">

            {steps.map((step, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="
                  bg-white
                  shadow-lg
                  rounded-2xl
                  p-6
                  text-center
                  border
                  border-gray-100
                  hover:-translate-y-2
                  hover:shadow-2xl
                  transition-all
                  duration-500
                "
              >

                {/* Icon */}
                <div className="text-5xl">
                  {step.icon}
                </div>

                {/* Judul */}
                <h3 className="mt-4 font-bold text-lg text-gray-900">
                  {step.title}
                </h3>

                {/* Deskripsi */}
                <p className="mt-2 text-gray-600 text-sm leading-6">
                  {step.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default OrderSteps;