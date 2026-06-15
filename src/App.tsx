import "./app.css"
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

export default function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Hero />
        <Hero />
        <Hero />
      </div>
      <Footer />
    </div>
  );
}
