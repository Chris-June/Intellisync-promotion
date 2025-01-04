
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { About } from './components/sections/About';
import { Promotion } from './components/sections/Promotion';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
         <Hero />
        <Promotion />
       
        <Features />
        <About />
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
