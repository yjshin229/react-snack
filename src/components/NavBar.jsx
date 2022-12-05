import React from 'react'
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const StyledHeader = styled.nav`
    height: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-style: solid none;
    border-color: transparent transparent var(--beige);
    font-size: 1.5rem;
    margin: 1.5rem 2rem;
    padding: 1.5rem;
    flex-direction: row;
`;
function NavBar() {
  return (
    <StyledHeader>
      <NavLink to = "/SelectSnack" className= {({isActive}) => (isActive? 'nav-link-active' : 'nav-link')}>
        Today's Snack
      </NavLink>
      <NavLink to = "/Results" className={({isActive}) => (isActive? 'nav-link-active' : 'nav-link')}>
        Results
      </NavLink>
      <NavLink to = "/SelectShop" className={({isActive}) => (isActive? 'nav-link-active' : 'nav-link')}>
        Select Shop
      </NavLink>
    </StyledHeader>
  );
};

export default NavBar;