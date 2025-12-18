import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Items from "./pages/items";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/whatsAppFloat";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="items">
          <Items />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;