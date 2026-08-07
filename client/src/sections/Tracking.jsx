import { useState } from "react";

function Tracking() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [orderResult, setOrderResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const orders = {
    GS250001: {
      status: "Sedang Diproses",
      estimate: "7 Agustus 2026",
    },
    GS250002: {
      status: "Selesai",
      estimate: "6 Agustus 2026",
    },
    GS250003: {
      status: "Menunggu Konfirmasi",
      estimate: "-",
    },
  };

  const handleTracking = () => {
  const number = trackingNumber.trim().toUpperCase();

  if (number === "") {
    setShowResult(false);
    setOrderResult(null);
    return;
  }

  setLoading(true);
  setShowResult(false);

  setTimeout(() => {
    const order = orders[number];

    if (order) {
      setOrderResult(order);
    } else {
      setOrderResult(null);
    }

    setLoading(false);
    setShowResult(true);
  }, 700);
};

  return (
    <section
      id="tracking"
      className="bg-gray-50 py-20"
      data-aos="fade-up"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

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
            value={trackingNumber}
            onChange={(e) => {
              setTrackingNumber(e.target.value);
              setShowResult(false);
            }}
            className="border border-gray-300 rounded-xl px-5 py-4 w-full md:w-96 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <button
  onClick={handleTracking}
  disabled={loading}
  className="bg-blue-600 hover:bg-blue-900 disabled:bg-blue-400 text-white px-7 py-4 rounded-xl font-semibold shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 active:scale-95 transition-all duration-300"
>
  {loading ? (
    <span className="flex items-center justify-center gap-2">
      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
      Mengecek...
    </span>
  ) : (
    "🔍 Cek Status"
  )}
</button>

        </div>

        {showResult && (
  <div
    data-aos="fade-up"
    className="mt-10 bg-white rounded-2xl shadow-lg p-8 text-left"
  >

    {orderResult ? (
      <>
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          Detail Pesanan
        </h3>

        <div className="space-y-4">

          <p>
            <span className="font-semibold">
              Nomor Pesanan:
            </span>{" "}
            {trackingNumber.toUpperCase()}
          </p>

          <p>
            <span className="font-semibold">
              Status:
            </span>

            <span
  className={`ml-2 px-4 py-1 rounded-full text-sm font-medium ${
    orderResult.status === "Selesai"
      ? "bg-green-100 text-green-700"
      : orderResult.status === "Sedang Diproses"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-blue-100 text-blue-700"
  }`}
>
  {orderResult.status}
</span>
          </p>

          <p>
            <span className="font-semibold">
              Estimasi Selesai:
            </span>{" "}
            {orderResult.estimate}
          </p>

        </div>
      </>
    ) : (
      <div className="text-center">

        <div className="text-4xl mb-4">
          ❌
        </div>

        <h3 className="text-xl font-bold text-gray-900">
          Pesanan Tidak Ditemukan
        </h3>

        <p className="mt-2 text-gray-600">
          Nomor pesanan yang Anda masukkan tidak terdaftar.
        </p>

      </div>
    )}

  </div>
)}

      </div>
    </section>
  );
}

export default Tracking;