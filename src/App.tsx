// import Blur from "./components/atoms/Blur";
import AboutUs from "./components/organisms/AboutUs";
import ContactUs from "./components/organisms/ContactUs";
import Hero from "./components/organisms/Hero";
import Navbar from "./components/organisms/Navbar";
import Projects from "./components/organisms/Projects";
import Services from "./components/organisms/Services";

const App = () => {
  return (
    <main className="h-screen">
      <header className="max-width-center relative width-x-res py-9 lg:py-11">
        <Navbar />
        {/* small screens 150 and 200 */}
        {/* <Blur
          mainClassName="absolute -top-56 -right-20"
          blurStrength="250"
          blurSize="400"
        /> */}
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
    </main>
  );
};

export default App;
