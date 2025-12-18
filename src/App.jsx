import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Items from "./pages/items";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Hero />
      <Items />      {/* ITEMS FIRST */}
      <Services />
      <About />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
