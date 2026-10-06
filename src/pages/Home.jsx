import Layout from "../components/Layout";
import Contact from "../sections/Contact";
import CTA from "../sections/CTA";
import Features from "../sections/Features";
import GeneratorPreview from "../sections/GeneratorPreview";
import Hero from "../sections/Hero";
import Pricing from "../sections/Pricing";
import Showcase from "../sections/Showcase";
import Testimonials from "../sections/Testimonials";
import useScrollFade from "../hooks/useScrollFade";


const Home = () => {
  useScrollFade();

  return (
    <Layout>
      <section className="fade-section">
        <Hero />
      </section>

      <section className="fade-section">
        <GeneratorPreview />
      </section>

      <section className="fade-section">
        <Features />
      </section>

      <section className="fade-section">
        <Showcase />
      </section>

      <section className="fade-section">
        <Testimonials />
      </section>

      <section className="fade-section">
        <Pricing />
      </section>

      <section className="fade-section">
        <Contact />
      </section>

      <section className="fade-section">
        <CTA />
      </section>
    </Layout>
  );
};

export default Home;
