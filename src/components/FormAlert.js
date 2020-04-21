import React from 'react';
import { string } from 'prop-types';

function FormAlert({ type, message }) {
  return (
    <div
      className={`notification${type === 'error' ? ' is-danger' : ''}${
        type === 'success' ? ' is-success' : ''
      }`}
    >
      {message}
    </div>
  );
}

FormAlert.propTypes = {
  type: string.isRequired,
  message: string.isRequired,
};
export default FormAlert;
