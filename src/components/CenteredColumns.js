import React from 'react';

function CenteredColumns({ children }) {
  return (
    <div className="columns is-centered is-variable is-4 is-multiline">
      {children}
    </div>
  );
}

export default CenteredColumns;
