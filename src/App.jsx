import './App.css';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <NavBar></NavBar>
      <Hero></Hero>
    </div>
  );
}

export default App;
