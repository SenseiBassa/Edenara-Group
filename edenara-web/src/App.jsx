import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Companies from './components/Companies.jsx';
import { Leadership, Vision, Features, CtaBand, Footer } from './components/Sections.jsx';

export default function App() {
  return (
    <div style={{ background: '#060F1C', color: '#F4EFE4', minHeight: '100vh' }}>
      <Nav />
      <Hero />
      <About />
      <Companies />
      <Leadership />
      <Vision />
      <Features />
      <CtaBand />
      <Footer />
    </div>
  );
}
