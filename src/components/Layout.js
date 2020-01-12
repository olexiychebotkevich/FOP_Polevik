import React from 'react';
import NavMenu from './NavMenu/NavMenu';
import Footer from "./Footer"

export default props => (
    <div>
      <NavMenu/>
      <div>
        {props.children}
      </div>
      <Footer/>
    </div>
    
  );