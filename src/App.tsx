import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Treatments from "./components/Treatments";
import About from "./components/About";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustBar />
      <Treatments />
      <About />
    </div>
  );
}

export default App;