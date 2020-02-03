import React from 'react';
import Footer from "./Footer"
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap/dist/react-bootstrap';

export default props => (
    <div>
      <div>
        {props.children}
      </div>
      <Footer />
    </div>
    
  );