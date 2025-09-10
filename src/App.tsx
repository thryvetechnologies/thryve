import { useEffect, useState } from "react";
import Blur from "./components/atoms/Blur";
import AboutUs from "./components/organisms/AboutUs";
import ContactUs from "./components/organisms/ContactUs";
import Hero from "./components/organisms/Hero";
import Navbar from "./components/organisms/Navbar";
import Projects from "./components/organisms/Projects";
import Services from "./components/organisms/Services";

function useIsLargeScreen() {
  const [isLarge, setIsLarge] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setIsLarge(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsLarge(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);
  return isLarge;
}

const App = () => {
  const isLargeScreen = useIsLargeScreen();
  return (
    <main className="h-screen">
      <header className="max-width-center relative width-x-res py-9 lg:py-11">
        <Navbar />
        <Blur
          mainClassName="absolute top-0 right-0 lg:-top-56 lg:-right-20"
          blurStrength={isLargeScreen ? "250" : "65"}
          blurSize={isLargeScreen ? "400" : "120"}
        />
      </header>

      <section className="max-width-center width-x-res mt-40">
        <Hero />
      </section>

      <section className="max-width-center width-x-res mt-40">
        <AboutUs />
      </section>

      {/* <section className="max-width-center width-x-res mt-40">
        <Hero />
      </section> */}

      <section className="max-width-center width-x-res mt-40">
        <Projects />
      </section>

      <section className="max-width-center width-x-res mt-40">
        <Services />
      </section>

      <section className="max-width-center width-x-res mt-40">
        <ContactUs />
      </section>
      <p className="mt-16 text-center text-xs">
        &copy; 2025 All Rights Reserved
      </p>
    </main>
  );
};

export default App;
