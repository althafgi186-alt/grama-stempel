import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import StampGallery from "../../sections/StampGallery";
import FAQ from "../../sections/FAQ";
import OrderSteps from "../../sections/OrderSteps.jsx";
import Tracking from "../../sections/Tracking";
import Location from "../../sections/Location";
import Footer from "../../sections/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StampGallery />
      <OrderSteps />
      <Tracking />
      <FAQ />
      <Location />
      <Footer />
    </>
  );
}

export default Home;