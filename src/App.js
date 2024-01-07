
import './App.css';
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme ,lightTheme} from "./utils/Themes"
import Navbar from "./components/Navbar";
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Other from './components/Other';
import Contact from './components/Contact';
import DarkMode from './components/Navbar/DarkMode';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

const RightAlignedDiv = styled.div`
  margin-left: auto;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Navbar>
          <div><p> About </p></div>
          <div><p> Education </p></div>
          <div><p> Projects </p></div>
          <div><p> Experience </p></div>
          <div><p> Other </p></div>
          <RightAlignedDiv>
            <DarkMode/> 
            </RightAlignedDiv> 
      </Navbar>
      
      <Body>
        <HeroSection/>
        <Wrapper>
          
          <Skills/>
          <Experience/>
          <Projects/>
          <Education/>
          <Other/>
          <Contact/>
          


        </Wrapper>
        

      </Body>
        
    </ThemeProvider>
  );
}

export default App;
