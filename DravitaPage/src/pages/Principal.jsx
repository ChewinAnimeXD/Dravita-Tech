import Navbar from "../components/navbar";
import About from "../components/about";
import Hero from "../components/Hero";
import Pricing from "../components/pricing";
import Testimonials from "../components/testimonials";
import Faqs from "../components/faqs";
import Other from "../components/other";
import Footer from "../components/footer";
import BgFooter from "../assets/bgFooter.png";
import bg from "../assets/bg.png";

function Principal() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image Positioned Behind */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-center -z-10"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Navbar Positioned Above */}
      <div>
        <Navbar className="relative z-30" />
        <div id="hero">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="pricing">
          <Pricing />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="other">
          <Other />
        </div>
        <div id="faqs">
          <Faqs />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Principal;
