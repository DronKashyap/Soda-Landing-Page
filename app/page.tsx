
import Footer from "./components/Footer";
import Header from "./components/Header";
import AlternatingText from "./screens/AlternatingText";
import BigText from "./screens/BigText";
import Carousel from "./screens/Carousel";
import Hero from "./screens/Hero";
import SkyDive from "./screens/SkyDive";

export default function Home() {
  return (
    <> 
      <Header />
      <Hero />
      <SkyDive />
      <Carousel />
      <AlternatingText />
      <BigText />
      <Footer />
    </>
  );
}
