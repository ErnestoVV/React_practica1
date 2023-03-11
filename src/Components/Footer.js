import React from 'react';
import './Footer.css';
import PropTypes from 'prop-types';

function Footer({children}){
return(
      <div className="Footer">

            {children}

      </div>
    )
}

export default Footer;


Footer.propTypes={
      children:PropTypes.object
}
  
Footer.defaultProps={
      children:<h1>Hola mundo.</h1>
}