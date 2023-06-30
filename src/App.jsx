import './App.css';
import Heading from './common/Heading/Heading';
import AboutMe from './components/AboutMe/AboutMe';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <NavBar></NavBar>
      <Hero></Hero>
      <Heading id="skills" heading="Skills"></Heading>
      <Skills></Skills>
      <Heading id="aboutMe" heading="About Me"></Heading>
      <AboutMe></AboutMe>
      <Heading id="portfolio" heading="Portfolio"></Heading>
      <Portfolio></Portfolio>
    </div>
  );
}

export default App;
