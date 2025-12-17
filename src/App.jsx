import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Items from "./pages/Items";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <About />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* ITEMS PAGE */}
        <Route path="/items" element={<Items />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
