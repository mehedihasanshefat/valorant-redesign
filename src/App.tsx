import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <main className="relative w-screen min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}

export default App;
