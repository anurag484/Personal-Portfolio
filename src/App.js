import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Header from './components/Header/Header';
import Navbar1 from './components/Nav/Navbar1';
import Navbar2 from './components/Nav/Navbar2';
import Projects from './components/Project/Projects';
import Work from './components/Work/Work'

function App() {
  return (
    <>
    <Navbar1/>
    <Header/>
    <Navbar2/>
    <Experience/>
    <Projects/>
    <Work/>
    <About/>
    <Contact/>
    </>
  );
}

export default App;
