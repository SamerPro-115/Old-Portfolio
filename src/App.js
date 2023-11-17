import React, {useState} from 'react'
import {Container, Navbar,} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'animate.css'
import DarkMood from './components/Navbar/DarkMood'
import Body from './components/Body/Body.js'
import Header from './components/Body/Header.js'
import {FaMoon} from "react-icons/fa";
import AboutMe from "./components/Body/AboutMe.js"
import WhatIUseInCoding from "./components/Body/WhatIUseInCoding.js"
import Works from "./components/Body/Works"
import ContentCreator from "./components/Body/ContentCreator"
import {BsMoon} from "react-icons/bs";
import Animation from './components/Body/Animation';





function App() {
  

  // Dark mood changes
  const [isDarkMode, setIsDarkMood] = useState(true);
  

  

  
  return (
    <div className={`App ${isDarkMode ? "" : "light-mode-theme"}`}>
      <Animation isDarkMode={isDarkMode} />
      <div className='content'>
      <Navbar expand="lg">
          <Container className="mt-3">
            <DarkMood onClick={() => setIsDarkMood(!isDarkMode)}>
              {isDarkMode ? <FaMoon color="white" />: <BsMoon color="gray" />  }
            </DarkMood>
          </Container>
        </Navbar>
        <Body>
           <Header isDarkMode={isDarkMode} />
           <AboutMe isDarkMode={isDarkMode} />
           <WhatIUseInCoding isDarkMode={isDarkMode}/>
           <Works isDarkMode={isDarkMode}/>
           <ContentCreator isDarkMode={isDarkMode}/>
        </Body>
      </div>
    </div>

  );
  
}

export default App;
