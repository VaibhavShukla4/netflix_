
import './App.css';
/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import { HeroSection } from './components/hero_section/HeroSection';
import Header from './components/header/Header';
function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
    </div>
  );
}

export default App;
