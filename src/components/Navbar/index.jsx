import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,

} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/todolist' activeStyle>
            Todo List
          </NavLink>
          <NavLink to='/pokeapi' activeStyle>
            Poke Api
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;