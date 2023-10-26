import './App.css';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Header from './components/Header/Header';
import Navbar1 from './components/Nav/Navbar1';
import Navbar2 from './components/Nav/Navbar2';

function App() {
  return (
    <>
    <Navbar1/>
    <Header/>
    <Navbar2/>
    <Experience/>
    <About/>
    </>
  );
}

export default App;
