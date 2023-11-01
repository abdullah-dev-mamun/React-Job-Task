import { Fragment } from "react";
import ContactSection from "../components/ContactSection";
import Testimonials from "../components/Testimonials";
import AboutSection from "../components/AboutSection";
import Header from "../components/Header";
import TopHomeSlider from "../components/TopHomeSlider";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";
import OurServices from "../components/OurServices";
import GallerySection from "../components/GallerySection";
import OurVisionMission from "../components/OurVisionMission";

const HomePage = () => {
  return (
    <Fragment>
      {/* Header Section */}
      <Header />

      {/* To Slider */}
      <section className="target_section" id="home">
        <TopHomeSlider />
      </section>

      {/* ========== About Section ========== */}
      <section
        id="about"
        className="target_section container_section py-10 3xl:py-20"
      >
        <AboutSection />
        <OurVisionMission />
      </section>

      {/* ========== Our Services ========== */}
      <section id="services" className="target_section container_section mb-12">
        <OurServices />
      </section>

      {/* ========== Why choose us ========== */}
      <section
        id="why_choose_us"
        className="target_section container_section mb-12 mt-20"
      >
        <WhyChooseUs />
      </section>
      {/* ========== Testimonials Section ========== */}

      <section id="testimonials" className="pt-[20px] target_section">
        <Testimonials />
      </section>

      {/* ========== Gelley Section ========== */}
      <section id="gellery_section" className="target_section mb-12 mt-16">
        <GallerySection />
      </section>

      {/* ============== Contact Section =============== */}
      <section
        id="contact"
        className="target_section container_section mt-20 mb-8 xl:mt-32"
      >
        <ContactSection />
      </section>
      {/* Footer */}
      <section className="">
        <Footer />
      </section>
    </Fragment>
  );
};

export default HomePage;
