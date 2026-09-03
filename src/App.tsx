import TopBar from './components/TopBar';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Uses from './components/Uses';
import Specs from './components/Specs';
import Downloads from './components/Downloads';
import Safety from './components/Safety';
import FootEnd from './components/FootEnd';

/*
 * Reading order: what it is, why it is good, what it looks like, where it goes
 * and how it is mixed, the numbers, the paperwork, the hazard.
 *
 * The tinted sections alternate so the page has a rhythm without needing rules
 * between every block.
 */
const App = () => (
  <>
    <TopBar />
    <main>
      <Hero />
      <Features />
      <Gallery />
      <Uses />
      <Specs />
      <Downloads />
      <Safety />
    </main>
    <FootEnd />
  </>
);

export default App;
