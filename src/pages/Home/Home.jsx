import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Personalization from "../../components/Personalization/Personalization";
import Playful from "../../components/Playful/Playful";
import Testimonial from "../../components/Testimonial/Testimonial";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Playful />
      <Personalization />
      <Testimonial />
      <Footer />
    </div>
  );
}
