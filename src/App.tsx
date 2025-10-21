import Header from "./components/Header";
import Hero from "./components/Hero";
import ExplainerVideo from "./components/ExplainerVideo";
import WhatWeDo from "./components/WhatWeDo";
import OurProcess from "./components/OurProcess";
import OurServices from "./components/OurServices";
import LocationSection from "./components/LocationSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <ExplainerVideo />
        <WhatWeDo />
      </section>
      <section id="process">
        <OurProcess />
      </section>
      <section id="services">
        <OurServices />
      </section>
      <LocationSection />
      <Footer />
    </div>
  );
}

export default App;
