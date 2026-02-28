import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Lineup from "./components/Lineup";
import About from "./components/About";
import Tickets from "./components/Tickets";
import Sponsors from "./components/Sponsors";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Lineup />
      <About />
      <Tickets />
      <Sponsors />
      <FAQ />
      <Footer />
    </main>
  );
}
