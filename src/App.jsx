import { useEffect } from 'react';
import './styles/h.9c69ed6c.css';
import './styles/nekotora.99cf6f8c.css';
import Nav from './components/Nav';
import StarBackground from './components/StarBackground';
import Intro from './components/Intro';
import About from './components/About';
import FindMe from './components/FindMe';
import Friends from './components/Friends';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Handle scroll event for background fixed effect
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const background = document.querySelector('.background');
      
      if (scrollTop > 0.6 * windowHeight) {
        background?.classList.add('fixed');
      } else {
        background?.classList.remove('fixed');
      }
    };

    window.addEventListener('scroll', handleScroll);
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

