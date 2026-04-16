import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Lineup from "./components/Lineup";
import Playlist from "./components/Playlist";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Lineup />
      <Playlist />
      <About />
      <FAQ />
      <Footer />
    </main>
  );
}
