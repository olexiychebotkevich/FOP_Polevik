import React from 'react';
import Footer from "./Footer"

export default props => (
    <div>
      <div>
        {props.children}
      </div>
      <Footer/>
    </div>
    
  );