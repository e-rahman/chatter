import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#vote4words">What is Vote4Words?</a></p>
  <p><a href="#possibility">Managing Privacy</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="vote4words__navbar">
      <div className="vote4words__navbar-links">
        <div className="vote4words__navbar-links_logo">
          <img srg={logo} alt="logo" />
        </div>
        <div className="vote4words__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div ClassName="vote4words__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div ClassName="vote4words__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div ClassName="vote4words__navbar-menu_container scale-up-center">
            <div ClassName="vote4words__navbar-menu_container-links">
              <Menu />
              <div ClassName="vote4words__navbar-menu__container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
    </div>
  </div>
  )
}

export default Navbar
