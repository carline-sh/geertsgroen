import "./app.css"
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Works } from "./components/Works";

export default function App() {

  return (
    <div className="min-h-screen flex flex-col miranda-sans">
      <Navbar />
      <div className="flex-1">
        <Hero />
        <About />
        <Works />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
