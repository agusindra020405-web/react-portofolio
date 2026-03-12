import { useLocation } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./style.css";

import WaveBackground from "./components/WaveBackGround";
import SplashScreen from "./components/SplashScreen";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Contactme from "./Contactme";

// Komponen pembantu untuk reset scroll saat pindah halaman
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Jika tidak ada hash (seperti #home), scroll ke paling atas
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // loader visible for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }
  return (
    <BrowserRouter>
    <WaveBackground />

      <ScrollToTop />
      <Header></Header>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero></Hero>
              <About></About>
              <Skills></Skills>
              <Contacts></Contacts>
            </>
          }
        />

        <Route path="/contact" element={<Contactme />} />
      </Routes>

      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
