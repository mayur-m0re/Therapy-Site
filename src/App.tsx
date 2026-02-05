import { useEffect, useState } from 'react';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Welcome from './sections/Welcome';
import Specialties from './sections/Specialties';
import Support from './sections/Support';
import About from './sections/About';
import OurOffice from './sections/OurOffice';
import FAQ from './sections/FAQ';
import CTA from './sections/CTA';
import Footer from './sections/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-[hsl(var(--warm-cream))] transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation />
      <main>
        <Hero />
        <Welcome />
        <Specialties />
        <Support />
        <About />
        <OurOffice />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
