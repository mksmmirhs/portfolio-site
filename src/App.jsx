import './App.css';
import Heading from './common/Heading/Heading';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <NavBar></NavBar>
      <Hero></Hero>
      <Heading heading="Skills"></Heading>
      <Skills></Skills>
    </div>
  );
}

export default App;
