import TopBar from './components/TopBar';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Uses from './components/Uses';
import Specs from './components/Specs';
import Downloads from './components/Downloads';
import Faq from './components/Faq';
import Safety from './components/Safety';
import FootEnd from './components/FootEnd';

/*
 * Reading order: what it is, why it is good, what it looks like, where it goes
 * and how it is mixed, the numbers, the paperwork, the objections, the hazard.
 *
 * The tinted sections alternate so the page has a rhythm without needing rules
 * between every block.
 *
 * The FAQ sits second to last, after the documents. By that point a reader has
 * everything the page asserts and is deciding whether to believe it, which is
 * what those questions answer. Safety stays last because the hazard is the note
 * you leave someone on, not one to bury above five collapsed panels.
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
      <Faq />
      <Safety />
    </main>
    <FootEnd />
  </>
);

export default App;
