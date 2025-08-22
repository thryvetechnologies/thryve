import Blur from "./components/atoms/Blur";
import Navbar from "./components/organisms/Navbar";

const App = () => {
  return (
    <main className="h-screen">
      <header className="max-width-center relative">
        <Navbar />
        <Blur
          mainClassName="absolute -top-56 -right-20"
          blurStrength="200"
          blurSize="300"
        />
      </header>
    </main>
  );
};

export default App;
