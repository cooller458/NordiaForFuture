import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';

import './NavbarDark.css';

function NavbarDark() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [home, setHome] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  return (
    <>
      <nav className='navbarDark'>
        <div className='navbar-container'>
          <Link  to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img
              className='navbar-logo'
              src={'images/DarkLogo.png'}
            />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link  to='/'    className='nav-links-dark' onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/team'
                className='nav-links-dark'
                onClick={closeMobileMenu}
              >
                TEAM
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links-dark'
                onClick={closeMobileMenu}
              >
                ABOUT
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Nft'
                className='nav-links-dark'
                onClick={closeMobileMenu}
              >
                NFT
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/roadmap'   className='nav-links-dark'
                onClick={closeMobileMenu}
              >
                Road Map
              </Link>
            </li>
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                JOIN US
              </Link>
            </li>
          </ul>

          {button && <Button buttonStyle='btn--outline2'>     <img
            style={{ height: 15, width: 15, marginTop: 2, marginRight: 5 }}
            src={'images/world.png'}
          />  JOIN US </Button>}
        </div>
      </nav>
    </>
  );
}

export default NavbarDark;
