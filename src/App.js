import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import './App.css';
import './Projects.css';
import './Skills.css';
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element = {<Home/>}></Route>
        <Route path="/About" element = {<About/>}></Route>
        <Route path="/Projects" element = {<Projects/>}></Route>
        <Route path="/Skills" element = {<Skills/>}></Route>
         <Route path="/Contact" element = {<Contact/>}></Route>

      </Routes>
      </BrowserRouter>
     
      {/* <h1>Hello World</h1>
      <About/>
      <Contact/>
      <Skills/>
      <Projects/>
      <Home/> */}
    </div>
  );
}

export default App;
