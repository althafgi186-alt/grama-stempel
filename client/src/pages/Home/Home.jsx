import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import StampGallery from "../../sections/StampGallery";
import FAQ from "../../sections/FAQ";
import OrderSteps from "../../sections/OrderSteps";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StampGallery />
      <OrderSteps />
      <FAQ />
    </>
  );
}

export default Home;