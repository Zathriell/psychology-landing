import Hero from "../../components/sections/Hero";
import Services from "../../components/sections/Services";
import About from "../../components/sections/About";
import Contact from "../../components/sections/Contact";
import { Helmet } from "react-helmet-async";
import WhatsAppButton from "../../components/WhatsAppButton";
import Credentials from "../../components/sections/Credentials";
import Testimonials from "../../components/sections/Testimonials";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Psicóloga en Nicaragua | Terapia para ansiedad, depresión y pareja</title>

        <meta
          name="description"
          content="Psicóloga profesional en Nicaragua. Terapia para ansiedad, depresión, pareja y bienestar emocional. Agenda tu consulta por WhatsApp."
        />

        <meta
          name="keywords"
          content="psicóloga en Nicaragua, terapia psicológica Nicaragua, terapia depresión Managua, psicóloga para ansiedad, terapia de pareja Nicaragua"
        />
      </Helmet>

      <Hero />
      <About />
      <Services />
      <Credentials />
      <Testimonials />
      <WhatsAppButton />
      <Contact />
    </>
  );
};

export default Home;