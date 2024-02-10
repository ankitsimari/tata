import "./App.css";
import Accordion from "./Components/Accordian";
import Calculator from "./Components/Calculator";
import Category from "./Components/Category";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Highlights from "./Components/Highlights";
import { Navbar } from "./Components/Navbar";
import Partner from "./Components/Partner";
import Process from "./Components/Process";
import ReferAndEarn from "./Components/ReferAndEarn";
import Testimonial from "./Components/Testimonial";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Highlights />
      <Partner />
      <Process />
      <Testimonial />
      <Category />
      <Calculator />
      <ReferAndEarn />
      <Accordion/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
