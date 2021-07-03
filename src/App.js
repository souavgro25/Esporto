import React,{useState} from 'react'

import './App.css';
import Header from './components.js/Header';
import Hero from './components.js/Hero';
import About from './Pages/About';
import Sponcers from './Pages/Sponcers';
import Contact from './Pages/Contact';
import Dropdown from './components.js/Dropdown';
function App() {
   
  const [isopen, setisopen] = useState(false);

  const toggle=()=>{
    setisopen(!isopen);
  }

  return (
    <div className="App">
        <Header toggle={toggle}/>
        <Dropdown isopen={isopen} toggle={toggle}/>
        <Hero/>
        <About/>
        <Sponcers/>
        <Contact/>
    </div>
  );
}

export default App;
