import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar1 from './components/Nav/Navbar1';
import Navbar2 from './components/Nav/Navbar2';
import Projects from './components/Project/Projects';
import Testimonials from './components/Testimonials/Testimonials';
import { useContext } from 'react';
import {themeContext} from './context'
import Work from './components/Work/Work'

function App() {
  
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className='App' style={{background:darkMode?"var(--color-black)":"",color:darkMode?"var(--color-white)":""}} >
    <Navbar1/>
    <Header/>
    <Navbar2/>
    <Experience/>
    <Projects/>
    {/* <Work/> */}
    <About/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
