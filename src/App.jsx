import { useEffect } from 'react';
import './styles/main.css';
import Nav from './components/Nav';
import StarBackground from './components/StarBackground';
import Intro from './components/Intro';
import About from './components/About';
import FindMe from './components/FindMe';
import Friends from './components/Friends';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    let ticking = false;
    
    // Throttle scroll event for better performance
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const windowHeight = window.innerHeight;
          const background = document.querySelector('.background');
          
          if (scrollTop > 0.6 * windowHeight) {
            background?.classList.add('fixed');
          } else {
            background?.classList.remove('fixed');
          }
          
          ticking = false;
        });
        
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Nav />
      <StarBackground />
      <div className="main">
        <Intro />
        <About />
        <FindMe />
        <Friends />
      </div>
      <Footer />
    </div>
  );
}

export default App;

