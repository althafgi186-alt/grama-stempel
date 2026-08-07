import { useEffect, useState } from "react";

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
  <button
    onClick={scrollToTop}
    className={`
      fixed
      bottom-6
      right-6
      z-50
      w-12
      h-12
      rounded-full
      bg-blue-600
      hover:bg-blue-700
      text-white
      text-xl
      shadow-lg
      hover:shadow-blue-500/40
      hover:-translate-y-1
      active:scale-90
      transition-all
      duration-700
      ${
        show
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-5 scale-75 pointer-events-none"
      }
    `}
    aria-label="Kembali ke atas"
  >
    ↑
  </button>
);
}

export default BackToTop;