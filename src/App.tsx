// import Blur from "./components/atoms/Blur";
import Hero from "./components/organisms/Hero";
import Navbar from "./components/organisms/Navbar";

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
    </main>
  );
};

export default App;
