import { useState } from 'react';
import './App.css';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import { Project } from './components/Projects/Project';
import { Skill } from './components/Skill/Skill';

function App() {
  const [menu,setMenu]=useState(false)

  return (
    <div className="app">
      <Navbar menu={menu} setMenu={setMenu} />
       <Home/>
       <About/> 
      <Skill/>
       <Project/>
      <Contact/>
    </div>
  );
}

export default App;
