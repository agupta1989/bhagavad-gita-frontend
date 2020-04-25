import React from 'react';
import { bool, string, node } from 'prop-types';

function NavbarContainer({ spaced, color, children }) {
  return (
    <nav
      className={`navbar${color ? ` is-${color}` : ''}${spaced ? ' is-spaced' : ''}`}
    >
      {children}
    </nav>
  );
}

NavbarContainer.propTypes = {
  spaced: bool.isRequired,
  color: string.isRequired,
  children: node.isRequired,
};
export default NavbarContainer;
