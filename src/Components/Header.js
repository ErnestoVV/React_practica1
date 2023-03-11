import React from 'react';
import './Header.css';
import imagen from '../banco.JPG';

function Header(){
return(
      <div>
        <header className="Header">
          <img src={imagen} className="imagen" alt="imagen" />
        </header>
      </div>
    )
}

export default Header;