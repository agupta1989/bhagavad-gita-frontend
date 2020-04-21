import React from 'react';
import { shape, string, node } from 'prop-types';

function FormField({
  error, type, label, inputRef, ...inputProps
}) {
  return (
    <div className="field">
      {label && (
        <label className="label" htmlFor="textArea">
          {label}
        </label>
      )}

      <div className="control">
        {type === 'textarea' && (
          <textarea
            id="textArea"
            className="textarea is-medium"
            ref={inputRef}
            {...inputProps}
          />
        )}

        {type !== 'textarea' && (
          <input
            className="input is-medium"
            ref={inputRef}
            type={type}
            {...inputProps}
          />
        )}
      </div>

      {error && <p className="help is-danger">{error.message}</p>}
    </div>
  );
}

FormField.propTypes = {
  error: shape({}).isRequired,
  type: string.isRequired,
  label: string.isRequired,
  inputRef: node.isRequired,
};
export default FormField;
