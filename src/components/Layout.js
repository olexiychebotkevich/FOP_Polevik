import React from 'react';
import Footer from "./Footer"
import 'bootstrap/dist/css/bootstrap.min.css';

export default props => (
    <div>
      <div>
        {props.children}
      </div>
      <Footer />
    </div>
    
  );