import React from 'react';
import PropTypes from 'prop-types';
//import styles

function Sidebar({ children }) {
  return (
    <nav className="holder">
      {children}
    </nav>
  );
}

Sidebar.propTypes = {
  children: PropTypes.node
};

export default Sidebar;
