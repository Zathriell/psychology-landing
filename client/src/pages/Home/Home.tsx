import Hero from "../../components/sections/Hero";
import Services from "../../components/sections/Services";
import About from "../../components/sections/About";
import Contact from "../../components/sections/Contact";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Psicóloga en Managua | Terapia Profesional</title>

        <meta
          name="description"
          content="Psicóloga especializada en ansiedad, depresión y terapia emocional en Managua. Agenda tu consulta profesional."
        />

        <meta
          name="keywords"
          content="psicóloga Managua, terapia ansiedad Managua, terapia depresión Managua, psicólogo Nicaragua"
        />
      </Helmet>
      
      <Hero />
      <Services />
      <About />
      <Contact />
    </>
  );
};

export default Home;