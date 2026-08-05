import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import StampGallery from "../../sections/StampGallery";
import FAQ from "../../sections/FAQ";
import OrderSteps from "../../sections/OrderSteps.jsx";
import Tracking from "../../sections/Tracking";
import Location from "../../sections/Location";

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
    </>
  );
}

export default Home;