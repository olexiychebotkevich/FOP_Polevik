import React from 'react';
import NavMenu from './NavMenu/NavMenu';

export default props => (
    <div>
      <NavMenu />
      <div>
        {props.children}
      </div>
    </div>
  );