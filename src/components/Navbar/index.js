import React from "react";
import styled from "styled-components";
import DarkMode from "./DarkMode";


const StyledNavbar = styled.nav`
  background-color: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;  // Set the border-radius for rounded edges
  width: 100%;  // Set the desired width
  height: 60px;  // Set the desired height
  gap: 12px;
  padding: 0 6px;

  margin-bottom: 0.5px;
  cursor: 'pointer'

`;
const NavItems = styled.ul`
width: 100%;
display: flex;
align-items: center;

gap: 100px;
padding: 0 20px;
list-style: none;
color:  ${({ theme }) => theme.text_primary};  

a {
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.text_primary_hover};
  }
}

@media screen and (max-width: 768px) {
  display: none;
}
`;

const RightAlignedDiv = styled.div`
  margin-left: auto;
`;

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <StyledNavbar>
      <NavItems>

        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>

        <RightAlignedDiv>
          <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
        </RightAlignedDiv>




      </NavItems>

    </StyledNavbar>

  )
};


export default Navbar;