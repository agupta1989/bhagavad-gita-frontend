import React from 'react';
import { node } from 'prop-types';

function CenteredColumns({ children }) {
  return (
    <div className="columns is-centered is-variable is-4 is-multiline">
      {children}
    </div>
  );
}

CenteredColumns.propTypes = {
  children: node.isRequired,
};
export default CenteredColumns;
